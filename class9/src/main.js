import * as THREE from "three"
import {basicMesh,standardMesh,phongMesh,lambertMesh,physicalMesh} from "./defaultMeshes.js"
import {pointLight,directionalLight} from "./light.js"
import Model from "./model.js"
import { texture } from "three/tsl"
import {manager} from "./manager.js"
import {postProcessing} from "./postProcessing.js"
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
let composer

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    composer = postProcessing(scene,cam,renderer)
    // window.addEventListener("click",()=>{
    //     gsap.set(composer.pixel,{
    //         pixelSize: 30,
    //         duration: 2
    //     })
    // })
    meshes.default1 = basicMesh()
    meshes.standard = standardMesh({x:2})
    lights.key = directionalLight({x:2,y:2,z:2})
    scene.add(lights.key)
    instances()
    anim()
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
    const delta = clock.getDelta()
    for (const mixer of mixers){
        mixer.update(delta)
    }
    
    composer.composer.render()
    requestAnimationFrame(anim)
}

init()