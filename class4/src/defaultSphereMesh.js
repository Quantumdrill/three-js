import * as THREE from "three"

export const defaultSphereMesh = (x,y,z,r,color)=>{
    const geo = new THREE.SphereGeometry(r,32,32)
    const mat = new THREE.MeshBasicMaterial({color:color})
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}