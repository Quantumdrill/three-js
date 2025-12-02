import * as THREE from "three"

export const pointLight=({x=0,y=0,z=0,intensity=1,color=0xffffff}={})=>{
    const lt = new THREE.PointLight({color:color,power:intensity})
    lt.position.set(x,y,z)
    return lt
}

export const directionalLight=({x=0,y=0,z=0,intensity=1,color=0xffffff}={})=>{
    const lt = new THREE.DirectionalLight({color:color,intensity:intensity})
    lt.position.set(x,y,z)
    return lt
}