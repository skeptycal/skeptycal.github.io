import * as THREE from 'three'
import * as LIGHT from './light'
import * as CAM from './camera'
import * as MESH from './mesh'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { throttle } from './helpers'
import { debug } from './debug'
import { newDatGui } from './datgui'

const resizeUpdateInterval = 500

//* App

export class App {
    constructor(scene, camera) {
        if (scene == null) scene = new THREE.Scene()
        if (camera == null) camera = CAM.defaultCamera()
        this.scene = scene
        this.camera = camera /// main camera
        this.renderer = new THREE.WebGLRenderer(scene, camera)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.canvas = this.renderer.domElement;

        this.lights = []
        this.shapes = []

        this.setLights(LIGHT.defaultLight, LIGHT.defaultBackLight)

        /// background plane mesh
        this.shape = new MESH.Shape()
        this.add(this.shape.mesh)
        if (debug) { this.dat = newDatGui(this.shape) }
        this.addListeners()
        this.reset()
        this.appendChild()
    }

    addListeners() {
        window.addEventListener(
            'resize',
            throttle(
                () => { this.reset() },
                resizeUpdateInterval,
                { trailing: true }
            )
        );
    }

    /// add shape to list and to scene
    add(shape) {
        this.shapes.push(shape)
        this.scene.add(shape)
    }

    setShapes(...shapes) {
        for (var i = 0; i < shapes.length; i++) {
            this.add(shapes[i])
        }
    }

    setLights(...lights) {
        for (var i = 0; i < lights.length; i++) {
            this.addLight(lights[i])
        }
    }

    /// add light to list and to scene
    addLight(light) {
        this.lights.push(light)
        this.scene.add(light)
    }

    reset() {

        this.setRendererDimensions()
        this.setCanvasDimensions()
        this.setCameraDimensions()
        this.render()
    }

    setCanvasDimensions() {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight
        this.camera.updateProjectionMatrix()
    }

    setRendererDimensions() {
        this.renderer.setSize(innerWidth, innerHeight)
        this.renderer.setPixelRatio(devicePixelRatio)
    }

    // Reference: https://dev.to/pahund/resizing-a-three-js-scene-when-the-browser-window-size-changes-4lnd
    setCanvasDimensions(set2dTransform = false) {
        // const ratio = devicePixelRatio;
        this.canvas.width = innerWidth * devicePixelRatio
        this.canvas.height = innerHeight * devicePixelRatio
        this.canvas.style.width = `${innerWidth}px`
        this.canvas.style.height = `${innerHeight}px`
        if (set2dTransform) {
            this.canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0)
        }
    }

    /// add to the dom
    appendChild() { document.body.appendChild(this.renderer.domElement) }

    render() {
        this.shapes.forEach.animate
        // // this.shape.animate()
        this.renderer.render(this.scene, this.camera)
    }
}
