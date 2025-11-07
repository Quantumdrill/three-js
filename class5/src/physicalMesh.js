import * as THREE from "three"

export const physicalMesh=({x=0,y=0,z=0}={})=>{
    const geo = new THREE.TorusKnotGeometry(0.5,0.1,256,64)
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