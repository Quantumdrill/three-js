import * as THREE from "three"

export const defaultTetrahedronMesh = (x,y,z,r,color)=>{
    const geo = new THREE.TetrahedronGeometry(r)
    const mat = new THREE.MeshBasicMaterial({color:color})
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}