import * as THREE from "three"
import {defaultMeshes} from "./defaultMeshes.js"

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias:true})
const cam = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,0.1,1000)
cam.position.set(0,0,5)
let clock = new THREE.Clock()
const meshes = {}

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    meshes.default1 = defaultMeshes()
    scene.add(meshes.default1)
    anim()
}

function anim(){
    let tick = clock.getElapsedTime() 
    let angle = tick*5
    console.log(clock)
    meshes.default1.position.x = Math.cos(angle)*2
    meshes.default1.position.y = Math.sin(angle)*2
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()