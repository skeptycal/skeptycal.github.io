import * as THREE from 'three'
import { dblog } from './debug'
import { world } from './world'

export function defaultPlaneGeometry() {
    return new THREE.PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.heightSegments
    )
}
// dblog(defaultPlaneGeometry()) //! debug