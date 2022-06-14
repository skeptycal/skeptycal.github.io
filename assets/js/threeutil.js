/**
 * threeutil.js v1.0.1
 * @license
 * Copyright 2021 Michael Treanor
 * SPDX-License-Identifier: MIT
 */

// import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import * as THREE from 'three'

const debug = true

export function dblog(msg) {
    if (debug) { console.log(msg) }
}

const defaultFOV = 75
const defaultNearClippingPlane = 0.1
const defaultFarClippingPlane = 1000

const defaultCameraPosition = 4 // this.camera.position.z


////// Geometry
export const defaultBoxGeometry = new THREE.BoxGeometry(1, 1, 1)
export const defaultPlaneGeometry = new THREE.PlaneGeometry(5, 5, 10, 10)

////// Material
export const defaultPlaneMaterial = new THREE.
    MeshBasicMaterial({
        color: 0x0055aa,
        side: THREE.DoubleSide
    })

export const defaultPhongMaterial = new THREE.
    MeshPhongMaterial({
        color: 0x0055aa,
        side: THREE.DoubleSide
    })

// const aspectRatio = innerWidth / innerHeight
export function aspectRatio() { return innerWidth / innerHeight }

export class Renderer {
    constructor(scene, camera) {
        if (scene == null) {
            scene = new THREE.Scene()
        }

        if (camera == null) {
            camera = new THREE.PerspectiveCamera(defaultFOV, aspectRatio(), defaultNearClippingPlane, defaultFarClippingPlane)
        }

        this.scene = scene
        this.camera = camera
        this.camera.position.z = defaultCameraPosition
        this.renderer = new THREE.WebGLRenderer(scene, camera)
        this.setSize()
        this.setPixelRatio()
        this.appendChild()
    }

    /// render the scene
    render() { this.renderer.render(this.scene, this.camera) }

    /// set full window size
    setSize() { this.renderer.setSize(innerWidth, innerHeight) }

    /// match device specs for antialiasing
    setPixelRatio() { this.renderer.setPixelRatio(devicePixelRatio) }

    /// add to the dom
    appendChild() { document.body.appendChild(this.renderer.domElement) }

    addMesh(mesh) { this.scene.add(mesh) }

    /// animate
    // animate() {
    //     this.renderer.render(this.scene, this.camera)
    // }

}

export function threeRenderer() {
    //* three.js animations require a scene, a camera, and a renderer.

    return new Renderer()
}

export class Mesh {
    constructor(geometry, material) {
        this.geometry = geometry
        this.material = material
        this.mesh = new THREE.Mesh(this.geometry, this.material)
    }

    // TODO sample rotation
    animate() {
        // this.mesh.rotation.x += 0.01
        // this.mesh.rotation.y += 0.02
        // this.mesh.rotation.z += 0.005
    }
}

export function threeMesh(geometry, material) {
    //* three.js animations require a scene, a camera, and a renderer.
    if (geometry == null) {
        geometry = defaultPlaneGeometry
    }

    if (material == null) {
        material = defaultPlaneMaterial
    }

    return new Mesh(geometry, material)
}

// THREE.Mesh(defaultPlaneGeometry, defaultPlaneMaterial)

const defaultSphereRadius = 1

export class Sphere {
    constructor(radius, geometry, material) {
        if (radius < 0 || radius > 100) {
            radius = defaultSphereRadius
        }
        if (geometry == null) {
            geometry = new THREE.SphereGeometry(radius, 10, 10)
        }

        if (material == null) {
            material = new THREE.
                MeshBasicMaterial({
                    color: 0xfefc99,
                    side: THREE.DoubleSide
                })
        }

        this.radius = radius
        this.geometry = geometry
        this.material = material
        this.mesh = new THREE.Mesh(this.geometry, this.material)
    }

    // TODO sample rotation
    animate() {
        const translationAmount = 5
        const rotationAmount = 0.2
        this.mesh.rotation.x += (Math.random() - 0.5) * rotationAmount
        this.mesh.rotation.y += (Math.random() - 0.5) * rotationAmount
        this.mesh.rotation.z += (Math.random() - 0.5) * rotationAmount
        // this.mesh.translateX += (Math.random() - 0.3) * translationAmount
        // this.mesh.translateY += (Math.random() - 0.4) * translationAmount
        // this.mesh.translateZ += (Math.random() - 0.5) * translationAmount
    }
}

export function threeSphere(r) {
    //* three.js animations require a scene, a camera, and a renderer.

    return new Sphere(r)
}

export class PointSet {
    constructor(n, radius, geometry, material) {
        if (n < 1) {
            n = 1
        }
        if (radius < 0 || radius > 100) {
            radius = defaultSphereRadius
        }
        if (geometry == null) {
            geometry = new THREE.SphereGeometry(radius, 10, 10)
        }

        if (material == null) {
            material = new THREE.
                MeshBasicMaterial({
                    color: 0xfefc99,
                    side: THREE.DoubleSide
                })
        }

        this.n = n
        this.radius = radius
        this.geometry = geometry
        this.material = material
        // this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.points = this.setPoints()

    }

    setRadius(i) { this.geometry.radius = i }
    setHeightSegments(i) { this.geometry.heightSegments = i }
    setWidthSegments(i) { this.geometry.widthSegments = i }
    setMaterial(mat) { this.material = mat }

    setPoints() {
        // n > 1000 lags out bad in test environment

        var points = []

        for (var i = 0; i < this.n; i++) {
            points[i] = new Sphere(this.radius, this.geometry, this.material)
            // r.addMesh(points[i].mesh)
        }
        return points
    }

    // add all points to mesh
    add(mesh) {
        for (var i = 0; i < this.n; i++) {
            mesh.add(this.points[i].mesh)
        }
    }

    animate() {
        // const translationAmount = 5
        // const rotationAmount = 0.2
        // this.mesh.rotation.x += (Math.random() - 0.5) * rotationAmount
        // this.mesh.rotation.y += (Math.random() - 0.5) * rotationAmount
        // this.mesh.rotation.z += (Math.random() - 0.5) * rotationAmount
        // this.mesh.translateX += (Math.random() - 0.3) * translationAmount
        // this.mesh.translateY += (Math.random() - 0.4) * translationAmount
        // this.mesh.translateZ += (Math.random() - 0.5) * translationAmount
    }
}

export function threePointSet(n, radius) {
    if (radius <= 0) {
        radius = 1
    }
    return new PointSet(n, radius)
}