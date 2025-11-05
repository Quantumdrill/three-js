import * as THREE from "three"

export const defaultSphereMesh = ()=>{
    const geo = new THREE.SphereGeometry(0.5,32,32)
    const mat = new THREE.MeshBasicMaterial({color:0xffffff})
    const mesh = new THREE.Mesh(geo,mat)
    return mesh
}