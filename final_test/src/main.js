import * as THREE from "three"
import {basicMesh,standardMesh,phongMesh,lambertMesh,physicalMesh} from "./defaultMeshes.js"
import {pointLight,directionalLight} from "./light.js"
import Model from "./model.js"
import { texture } from "three/tsl"
import { LoadingManager } from "three";
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias:true})
const cam = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,0.1,1000)
cam.position.set(0,0,5)
let clock = new THREE.Clock()
const loadingManager = new LoadingManager()
const modelLoader = new FBXLoader(loadingManager);
const meshes = {}
const lights = {}
const mixers = []

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    // meshes.limbBones = []
    modelLoader.load("/testLimb.fbx",(loaded)=>{
        meshes.limb = loaded
        meshes.limb.scale.set(0.3,0.3,0.3)
        meshes.limb.rotation.y = 1.57
        meshes.limbBones = [meshes.limb.children[0],meshes.limb.children[0].children[0],meshes.limb.children[0].children[0].children[0]]
        meshes.limbBones[1].rotation.z = 1.57
        const helper = new THREE.SkeletonHelper(meshes.limb)
        scene.add(meshes.limb,helper)
        console.log("fbx ready")
    })
    
    lights.key = directionalLight({x:5,y:5,z:5})
    scene.add(lights.key)
    // instances()
    loadingManager.onLoad = ()=>{console.log("loaded");anim()}
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
    // flowers.init()
}

function anim(){
    const delta = clock.getDelta()
    for (const mixer of mixers){
        mixer.update(delta)
    }
    meshes.limbBones[1].rotation.z = Math.sin(clock.getElapsedTime()*3)*1.57
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()