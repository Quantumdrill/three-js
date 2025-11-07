import * as THREE from "three"

export const lambertMesh=({x=0,y=0,z=0}={})=>{
    const geo = new THREE.TorusKnotGeometry(0.5,0.1,256,64)
    const mat = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
        flatShading: true,
    })
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}