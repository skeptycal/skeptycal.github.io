import * as THREE from 'three'
import { debug, dblog } from './assets/js/debug'
import * as CAM from './assets/js/camera'
// import * as LIGHT from './assets/js/light'

export const mouse = {
    x: undefined,
    y: undefined,
    rawX: undefined,
    rawY: undefined,
}

// const resizeUpdateInterval = 500
// const defaultControls = true
const scene = new THREE.Scene()
// dblog(scene)
const camera = CAM.defaultCamera()
// dblog(camera)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)

document.body.appendChild(renderer.domElement)
// dblog(renderer.domElement)
// dblog(renderer)

const BoxGeometry = new THREE.BoxGeometry(20, 20, 10, 10)



/*
const app = new App
var dat = undefined

/// create plane object
const plane = new Shape()
plane.setVertexColorSet()

app.add(plane)

if (debug) { dat = new GUI(plane) }

function animate(user) {
    requestAnimationFrame(animate)

    // mouseover intersects plane ...
    const i = app.intersects(plane)
    if (i.length > 0) dblog(i)

    app.render()
}
animate()
*/