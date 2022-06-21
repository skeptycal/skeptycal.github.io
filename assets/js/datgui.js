import * as THREE from 'three'
import * as dat from 'dat.gui'
import { dblog } from './debug'
import { world } from './world'

/// instantiates a dat-gui control set for
/// 'object' using the 'world' defaults
export class GUI {
    constructor(mesh) {
        this.mesh = mesh
        this.gui = new dat.GUI()
        dblog(this.gui)

        // this.addSlider('width', 1, 20)
        // this.addSlider('height', 1, 20)
        this.addSlider('widthSegments', 1, 200)
        this.addSlider('heightSegments', 1, 200)
        // this.addSlider('dx', 1, 100)
        // this.addSlider('dy', 1, 100)
        this.addSlider('dz', 1, 100)
        // this.addSlider('red', 0, 1)
        // this.addSlider('green', 0, 1)
        // this.addSlider('blue', 0, 1)
        this.update()
    }

    update() {
        this.mesh.update()
        // this.shape.setVertexColorSet()
    }

    addSlider(value, min, max) {
        this.gui.add(world.plane, value, min, max).onChange(() => {
            this.update()
        })
    }
}
