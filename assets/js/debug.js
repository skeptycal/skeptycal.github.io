/**
 * threeutil.js v1.0.1
 * @license
 * Copyright 2021 Michael Treanor
 * SPDX-License-Identifier: MIT
 */

export var debug = true

export function dblog(...msg) {
    if (debug) { console.log(...msg) }
}

// document.querySelector('#app').innerHTML = `
//   <h1>Skeptycal</h1>
//   `