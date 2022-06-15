import * as THREE from 'three'
import { dblog, debug } from './debug'
import { newDatGui } from '/assets/js/datgui.js'
import { world } from './world'
import { defaultPlaneGeometry } from './geometry'



export class Shape {
    constructor(geometry, material) {
        if (geometry == null) geometry = defaultPlaneGeometry()
        if (material == null) material = defaultPhongMaterial
        this.geometry = geometry
        this.material = material
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.update()
    }

    // update for animation changes
    update() {
        this.mesh.geometry.dispose()
        this.mesh.geometry = defaultPlaneGeometry()
        this.updateVertices()
    }

    updateVertices() {
        const { array } = this.mesh.geometry.attributes.position

        for (let i = 0; i < array.length; i += 3) {
            // dblog("[%d,%d,%d]", i, i + 1, i + 2) //! debug
            array[i + 2] += Math.random() - 0.5
        }
    }

    // TODO sample rotation
    animate() {
        // this.mesh.rotation.x += 0.01
        // this.mesh.rotation.y += 0.02
        // this.mesh.rotation.z += 0.005
        this.update()
    }
}

export class Jagged extends Shape {

}

export function newMesh(geometry, material) {
    //* three.js animations require a scene, a camera, and a renderer.
    if (geometry == null) {
        geometry = defaultPlaneGeometry()
    }

    if (material == null) {
        material = defaultPhongMaterial
    }

    const shape = new Shape(geometry, material)

    /// instantiate new dat.gui for mesh item
    // if (debug) { const dat = newDatGui(shape) }

    return shape
}

export const defaultPhongMaterial = new THREE.
    MeshPhongMaterial({
        color: 0x0055aa,
        side: THREE.DoubleSide,
        flatShading: THREE.FlatShading
    })

// export const defaultPlaneMaterial = new THREE.
//     MeshBasicMaterial({
//         color: 0x0055aa,
//         side: THREE.DoubleSide,
//     })


// THREE.Mesh(defaultPlaneGeometry, defaultPlaneMaterial)
