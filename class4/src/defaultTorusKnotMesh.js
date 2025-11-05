import * as THREE from "three"

export const defaultTorusKnotMesh = (x,y,z,r,tube,color)=>{
    const geo = new THREE.TorusKnotGeometry(r,tube,16,100)
    const mat = new THREE.MeshBasicMaterial({color:color})
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}