// const debug = true

// // import './style.css'

// // import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'

// import { dblog, aspectRatio, threeRenderer } from "./assets/js/threeutil.js"


// export const defaultBoxGeometry = new THREE.BoxGeometry(1, 1, 1)
// export const defaultMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 })



// export function box(scene) {
//   return mesh(scene, defaultBoxGeometry, defaultMaterial)
// }

// //* three.js objects require a geometry, a material, and a mesh

// export function mesh(scene, geometry, material) {


//   const mesh = new THREE.Mesh(geometry, material)
//   var obj = {
//     geometry: geometry,
//     material: material,
//     mesh: mesh,
//   };

//   scene.add(mesh)

//   return mesh
// }

// function animate() {
//   renderer.render(scene, camera)
//   requestAnimationFrame(animate)
//   mesh.rotation.x += 0.005
//   mesh.rotation.y += 0.001
//   mesh.rotation.z += 0.002
// }
// animate()


// // document.querySelector('#app').innerHTML = `
// //   <h1>Skeptycal</h1>
// //   `