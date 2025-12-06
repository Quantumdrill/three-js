import * as THREE from "three"

export const basicMesh = ({x=0,y=0,z=0}={})=>{
    const geo = new THREE.BoxGeometry(1,1,1)
    const mat = new THREE.MeshBasicMaterial({color:0xffff00})
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}
export const phongMesh=({x=0,y=0,z=0}={})=>{
    const geo = new THREE.BoxGeometry(1,1,1)
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
export const lambertMesh=({x=0,y=0,z=0}={})=>{
    const geo = new THREE.BoxGeometry(1,1,1)
    const mat = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
        flatShading: true,
    })
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}
export const standardMesh=({x=0,y=0,z=0}={})=>{
    const geo = new THREE.BoxGeometry(1,1,1)
    const mat = new THREE.MeshStandardMaterial({
        color: 0x00ff00,
        metalness: 1,
        roughness: 0.5,
    })
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}
export const physicalMesh=({x=0,y=0,z=0}={})=>{
    const geo = new THREE.BoxGeometry(1,1,1)
    const mat = new THREE.MeshPhysicalMaterial({
        color: 0xff0000,
        metalness: 0.0,
        roughness: 0.3,
        clearcoat: 1.0,
        clearcoatRoughness: 0.06,
        transmission: 0.95,
        ior: 1.7,
        attenuationColor: 0xabcdef,
        attenuationDistance: 2.5,
    })
    const mesh = new THREE.Mesh(geo,mat)
    mesh.position.set(x,y,z)
    return mesh
}