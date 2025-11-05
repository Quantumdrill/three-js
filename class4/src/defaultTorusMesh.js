import * as THREE from "three"

export const defaultTorusMesh = ()=>{
    const geo = new THREE.TorusGeometry(0.5,0.2,16,100)
    const mat = new THREE.MeshBasicMaterial({color:0xffffff})
    const mesh = new THREE.Mesh(geo,mat)
    return mesh
}