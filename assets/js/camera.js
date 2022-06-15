import * as THREE from 'three'

///// Camera
const defaultFOV = 75
const defaultNearClippingPlane = 0.1
const defaultFarClippingPlane = 1000
const defaultCameraPosition = 4

export function aspectRatio() { return innerWidth / innerHeight }

export function defaultCamera() {
    const camera = new THREE.PerspectiveCamera(defaultFOV, aspectRatio(), defaultNearClippingPlane, defaultFarClippingPlane)
    camera.position.z = defaultCameraPosition
    return camera
}
