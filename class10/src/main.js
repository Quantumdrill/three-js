import * as THREE from "three"
import {basicMesh,standardMesh,phongMesh,lambertMesh,physicalMesh} from "./defaultMeshes.js"
import {pointLight,directionalLight} from "./light.js"
import Model from "./model.js"
import { texture } from "three/tsl"
import {manager} from "./manager.js"
import {InteractionManager} from "three.interactive"
import {gsap} from "gsap"
 
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias:true})
const cam = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,0.1,1000)
cam.position.set(0,0,5)
let clock = new THREE.Clock()
const loadingManager = manager()
const meshes = {}
const lights = {}
const mixers = []

const interactionManager = new InteractionManager(renderer,cam,renderer.domElement)

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    meshes.default1 = basicMesh()
    meshes.standard = standardMesh({x:2})
    lights.key = directionalLight({x:5,y:5,z:5})
    scene.add(lights.key)
    instances()
    anim()
    interactions()
}

function interactions(){
    interactionManager.add(meshes.flower)
    meshes.flower.addEventListener("click",(event)=>{
        gsap.to(event.target.scale,{
            x:4,
            y:4,
            z:4,
            duration:2
        })
    })
}

function instances(){
    const flowers = new Model({
        url: "flowers.glb",
        name: "flower",
        scene: scene,
        meshes: meshes,
        scale: new THREE.Vector3(2,2,2),
        position: new THREE.Vector3(0,-0.8,3),
        animationState: true,
        mixers: mixers,
        manager: loadingManager
    })
    flowers.init()
}

function anim(){
    interactionManager.update()
    const delta = clock.getDelta()
    for (const mixer of mixers){
        mixer.update(delta)
    }
    
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()