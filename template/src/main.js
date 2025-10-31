import * as THREE from "three"
import {defaultMeshes} from "./defaultMeshes.js"

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias:true})
const cam = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,0.1,1000)
cam.position.set(0,0,5)

const meshes = {}

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    meshes.default1 = defaultMeshes()
    meshes.default2 = defaultMeshes()
    scene.add(meshes.default1)
    scene.add(meshes.default2)
    anim()
}

let radius = 1.3
const clock = new THREE.Clock()
function anim(){
    let tick = clock.getDelta()
    console.log(tick)
    meshes.default1.position.x = radius*Math.cos(tick/15)
    meshes.default1.position.y = radius*Math.sin(tick/15)
    meshes.default2.position.x = radius*Math.cos(tick/15+Math.PI)
    meshes.default2.position.y = radius*Math.sin(tick/15+Math.PI)
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()