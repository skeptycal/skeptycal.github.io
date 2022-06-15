
// import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'

import { App } from './assets/js/app'
import { debug, dblog } from './assets/js/debug'

const app = new App
dblog(app)

function animate(user) {
    app.render()
    requestAnimationFrame(animate)
}
animate()
