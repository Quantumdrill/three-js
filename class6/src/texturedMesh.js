import * as THREE from "three"

export const texturedMesh=()=>{
    const texLoader = new THREE.TextureLoader()
    const cMap = texLoader.load('/textures/color.png')
    const nMap = texLoader.load("/textures/normal.png")
    const aoMap = texLoader.load("/textures/ao.png")
    const dispMap = texLoader.load("/textures/displace.png")

    const geo = new THREE.SphereGeometry(1,256,256)
    const mat = new THREE.MeshPhysicalMaterial({
        map: cMap,
        aoMap: aoMap,
        displacementMap: dispMap,
        normalMap: nMap,
        displacementScale: 0.1,
        aoMapIntensity: 100,
        roughness: aoMap,
    })

    const mesh = new THREE.Mesh(geo,mat)
    return mesh
}

export const pumpkinMesh=()=>{
    const texLoader = new THREE.TextureLoader()
    const cMap = texLoader.load('/pumpkin/Fabric_Knitted_007_basecolor.png')
    const nMap = texLoader.load("/pumpkin/Fabric_Knitted_007_normal.png")
    const rMap = texLoader.load("/pumpkin/Fabric_Knitted_007_roughness.png")
    const dispMap = texLoader.load('/pumpkin/Fabric_Knitted_007_displacement.png')

    const geo = new THREE.SphereGeometry(1,256,256)
    const mat = new THREE.MeshPhysicalMaterial({
        map: cMap,
        displacementMap: dispMap,
        normalMap: nMap,
        displacementScale: 0.1,
        roughness: rMap,
    })

    const mesh = new THREE.Mesh(geo,mat)
    return mesh
}