import * as THREE from "three"

export const phongMesh=({x=0,y=0,z=0}={})=>{
    const geo = new THREE.TorusKnotGeometry(0.5,0.1,256,64)
    const mat = new THREE.MeshPhongMaterial({
        color: 0x0000ff,
        specular: 0xffffff,
        shininess: 100,
        reflectivity: 1,
        flatShading: false,
    })
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}