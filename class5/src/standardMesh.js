import * as THREE from "three"

export const standardMesh=({x=0,y=0,z=0}={})=>{
    const geo = new THREE.TorusKnotGeometry(0.5,0.1,256,64)
    const mat = new THREE.MeshStandardMaterial({
        color: 0x00ff00,
        metalness: 1,
        roughness: 0.5,
    })
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}