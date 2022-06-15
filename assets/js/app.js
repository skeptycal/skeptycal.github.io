// import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import * as THREE from 'three'
import * as LIGHT from './light.js'
import * as CAM from './camera.js'
import * as MESH from './mesh.js'
import { debug } from './debug'
import { newDatGui } from './datgui'

//* App

export class App {
    constructor(scene, camera) {
        if (scene == null) scene = new THREE.Scene()
        if (camera == null) camera = CAM.defaultCamera()
        this.scene = scene
        this.camera = camera /// main camera
        this.renderer = new THREE.WebGLRenderer(scene, camera)
        this.lights = []
        this.shapes = []

        this.setLights(LIGHT.defaultLight, LIGHT.defaultBackLight)

        /// background plane mesh
        this.shape = new MESH.Shape()
        this.add(this.shape.mesh)
        if (debug) { this.dat = newDatGui(this.shape) }

        this.reset()
        this.appendChild()
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
        this.renderer.setSize(innerWidth, innerHeight)
        this.renderer.setPixelRatio(devicePixelRatio)
        this.render()
    }

    /// add to the dom
    appendChild() { document.body.appendChild(this.renderer.domElement) }

    render() {
        this.shapes.forEach.animate
        // // this.shape.animate()
        this.renderer.render(this.scene, this.camera)
    }
}

// //* three.js animations require a scene, a camera, and a renderer.
// export function oneRing(scene, camera) {
//     if (scene == null) scene = new THREE.Scene()
//     if (camera == null) camera = CAM.defaultCamera()
//     return new Renderer(scene, camera)
// }
