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
    scene.add(meshes.default1)
    anim()
}

function anim(){
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()