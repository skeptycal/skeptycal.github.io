const debug = true

// import './style.css'

// import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import * as THREE from 'three'

import { dblog, defaultPhongMaterial, defaultPlaneGeometry, threeRenderer, threeSphere, threePointSet, threeMesh } from "./assets/js/threeutil.js"

const r = threeRenderer()
const m = threeMesh(defaultPlaneGeometry, defaultPhongMaterial)
const mesh = m.mesh

r.addMesh(mesh)
dblog(mesh)

// use (1,1) for severe deformations
// use (2,1) or (3,1) for cool shimmering effect
// const points = getPoints(10, 0.1)
// const points = threePointSet(1, 0.1)
// points.add(m.mesh)

const light = new THREE.DirectionalLight(0xffffff, 1)

light.position.set(0, 0, 1)
r.scene.add(light)



function animate(user) {
  r.render()
  m.animate()
  // for (i = 0; i < points.length; i++) {
  //   points[i].animate()
  // }
  requestAnimationFrame(animate)
}
animate()


// document.querySelector('#app').innerHTML = `
//   <h1>Skeptycal</h1>
//   `