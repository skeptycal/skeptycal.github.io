import { Vector3, DirectionalLight } from 'three'
import { dblog, debug } from './debug'

///// Lighting
export const defaultLightPosition = new Vector3(0, 0, 1)
export const defaultBackLightPosition = new Vector3(0, 0, -1)
export const defaultLightIntensity = 1
export const defaultLightColor = 0xffffff

export const defaultLight = newLight(defaultLightColor, defaultLightIntensity, defaultLightPosition)
export const defaultBackLight = newLight(defaultLightColor, defaultLightIntensity, defaultBackLightPosition)

export function newLight(color, intensity, v) {
    const light = new DirectionalLight(color, intensity)
    setLightPosition(light, v)
    return light
}

/// use Vector3 to set light position
export function setLightPosition(light, v) { light.position.set(v.x, v.y, v.z) }