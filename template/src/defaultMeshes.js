import * as THREE from "three"

export const defaultMeshes = ()=>{
    const geo = new THREE.BoxGeometry(1,1,1)
    const mat = new THREE.MeshBasicMaterial({color:0xffff00})
    const mesh = new THREE.Mesh(geo,mat)
    return mesh
}