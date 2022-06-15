import * as THREE from 'three'
import * as dat from 'dat.gui'
import { dblog } from './debug'
import { world } from './world'
import { defaultPlaneGeometry } from './geometry'


/// instantiates a dat-gui control set for
/// 'object' using the 'world' defaults
export class GUI {
    constructor(shape) {
        this.shape = shape
        // dblog(this.shape)
        this.mesh = shape.mesh
        // dblog(this.mesh)
        this.gui = new dat.GUI()

        this.addSlider('width', 1, 20)
        this.addSlider('height', 1, 20)
        this.addSlider('widthSegments', 1, 200)
        this.addSlider('heightSegments', 1, 200)
        this.addSlider('dx', 1, 100)
        this.addSlider('dy', 1, 100)
        this.addSlider('dz', 1, 100)
        this.update()
    }

    update() { this.shape.update() }

    addSlider(value, min, max) {
        this.gui.add(world.plane, value, min, max).onChange(() => {
            this.update()
        })
    }
}

export function newDatGui(shape) {
    return new GUI(shape)
}