import * as THREE from "three"
import {defaultBoxMesh} from "./defaultBoxMesh.js"
import {defaultSphereMesh} from "./defaultSphereMesh.js"
import {defaultTorusMesh} from "./defaultTorusMesh.js"
import {defaultTorusKnotMesh} from "./defaultTorusKnotMesh.js"
import {defaultTetrahedronMesh} from "./defaultTetrahedronMesh.js"

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias:true})
const cam = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight,0.1,1000)
cam.position.set(0,0,5)
let clock = new THREE.Clock()
let constant = 1
const meshes = {}
let meshesArr

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    let colors = []
    for (let i=0;i<5;i++){
        colors.push(new THREE.Color(Math.random(),Math.random(),Math.random()))
    }
    meshes.defaultBox = defaultBoxMesh(0,0,0,1,colors[0])
    meshes.defaultSphere = defaultSphereMesh(2,0,0,0.5,colors[1])
    meshes.defaultTorus = defaultTorusMesh(-2,0,0,0.4,0.2,colors[2])
    meshes.defaultTorusKnot = defaultTorusKnotMesh(-4,0,0,0.4,0.2,colors[3])
    meshes.defaultTetrahedron = defaultTetrahedronMesh(4,0,0,1,colors[4])
    meshesArr = [meshes.defaultBox,meshes.defaultSphere,meshes.defaultTorus,meshes.defaultTorusKnot,meshes.defaultTetrahedron]
    scene.add(meshes.defaultBox,meshes.defaultSphere,meshes.defaultTorus,meshes.defaultTorusKnot,meshes.defaultTetrahedron)
    
    anim()
}

function anim(){
    let tick = clock.getElapsedTime()
    meshesArr.forEach((mesh)=>{
        mesh.position.y = Math.sin(tick*1.5+mesh.position.x/3)*constant
    })
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()