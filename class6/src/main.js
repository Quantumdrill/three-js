import * as THREE from "three"
import {basicMesh,standardMesh,phongMesh,lambertMesh,physicalMesh} from "./defaultMeshes.js"
import {pointLight,directionalLight} from "./light.js"
import {texturedMesh,pumpkinMesh} from "./texturedMesh.js"

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias:true})
const cam = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,0.1,1000)
cam.position.set(0,0,5)
let clock = new THREE.Clock()
const meshes = {}
const lights = {}

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    meshes.default1 = basicMesh()
    meshes.standard = standardMesh({x:2})
    meshes.textured = texturedMesh()
    meshes.pumpkin = pumpkinMesh()
    lights.key = directionalLight({x:5,y:5,z:5})
    scene.add(meshes.pumpkin,lights.key)
    anim()
}

function anim(){
    let tick = clock.getElapsedTime() 
    meshes.pumpkin.material.displacementScale = Math.abs(Math.sin(tick*3)*0.8)
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()