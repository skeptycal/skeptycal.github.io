import * as THREE from 'three'

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


// use (1,1) for severe deformations
// use (2,1) or (3,1) for cool shimmering effect
// const points = getPoints(10, 0.1)
// const points = threePointSet(1, 0.1)
// points.add(m.mesh)

export function threePointSet(n, radius) {
    if (radius <= 0) {
        radius = 1
    }
    return new PointSet(n, radius)
}

// export const defaultBoxGeometry = new THREE.BoxGeometry(1, 1, 1)
