import * as THREE from "three"
import {defaultMeshes} from "./defaultMeshes.js"
import {basicMesh} from "./basicMesh.js"
import {standardMesh} from "./standardMesh.js"
import {phongMesh} from "./phongMesh.js"
import {lambertMesh} from "./lambertMesh.js"
import {physicalMesh} from "./physicalMesh.js"
import {pointLight,directionalLight} from "./light.js"

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
    meshes.basic = basicMesh()
    meshes.standard = standardMesh({x:2})
    meshes.phong = phongMesh({x:-2})
    meshes.lambert = lambertMesh({x:4})
    meshes.physical = physicalMesh({x:-4})
    lights.default = pointLight({x:2,y:2,z:2})
    lights.key = directionalLight({x:5,y:5,z:5})
    lights.rim = directionalLight({x:-7,y:-2,z:-2,color:"0xff9900"})
    scene.add(meshes.basic,meshes.standard,lights.key,lights.rim,meshes.phong,meshes.lambert,meshes.physical)
    anim()
}

function anim(){
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()