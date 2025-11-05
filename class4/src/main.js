import * as THREE from "three"
import {defaultMeshes} from "./defaultMeshes.js"
import {defaultSphereMesh} from "./defaultSphereMesh.js"
import {defaultTorusMesh} from "./defaultTorusMesh.js"

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
    meshes.defaultSphere = defaultSphereMesh()
    meshes.defaultTorus = defaultTorusMesh()
    meshes.defaultSphere.position.set(2,0,0)
    meshes.defaultTorus.position.set(-2,0,0)
    scene.add(meshes.default1,meshes.defaultSphere,meshes.defaultTorus)
    anim()
}

function anim(){
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()