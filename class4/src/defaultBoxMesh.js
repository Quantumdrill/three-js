import * as THREE from "three"

export const defaultBoxMesh = (x,y,z,size,color)=>{
    const geo = new THREE.BoxGeometry(size,size,size)
    const mat = new THREE.MeshBasicMaterial({color:color})
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}