import * as THREE from "three"
import {basicMesh,standardMesh,phongMesh,lambertMesh,physicalMesh} from "./defaultMeshes.js"
import {pointLight,directionalLight} from "./light.js"
import Model from "./model.js"
import {HDRI} from "./domeLight.js"
import { texture } from "three/tsl"
import {manager} from "./manager.js"
import {WheelAdaptor} from "three-story-controls"
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
scene.background = HDRI()
scene.environment = HDRI()
const wheel = new WheelAdaptor({type:"discrete"})
wheel.connect()
wheel.addEventListener("trigger",()=>{
    if (currentCar<carTotalCount){
        currentCar ++
    } else {
        currentCar = 1
    }
    gsap.to(cam.position,{
        x: -6+currentCar*2,
        duration:0.2,
        ease:"back.inOut",
    })
})
const carTotalCount = 5
let currentCar = 3

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    lights.key = directionalLight({x:2,y:2,z:2})
    lights.key2 = directionalLight({x:-2,y:2,z:2})
    scene.add(lights.key,lights.key2)
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
        position: new THREE.Vector3(-1,-0.8,3),
        animationState: true,
        mixers: mixers,
        manager: loadingManager
    })
    // flowers.init()
    const honda = new Model({
        url: "honda.glb",
        name: "honda",
        scene: scene,
        meshes: meshes,
        scale: new THREE.Vector3(80,80,80),
        position: new THREE.Vector3(-2,-0.35,0),
        manager: loadingManager
    })
    honda.init()
    const cadillac = new Model({
        url: "cadillac.glb",
        name: "cadillac",
        scene: scene,
        meshes: meshes,
        scale: new THREE.Vector3(0.0067,0.0067,0.0067),
        position: new THREE.Vector3(-4,-0.35,0),
        manager: loadingManager
    })
    cadillac.init()
    const ds = new Model({
        url: "ds.glb",
        name: "ds",
        scene: scene,
        meshes: meshes,
        scale: new THREE.Vector3(0.5,0.5,0.5),
        manager: loadingManager
    })
    ds.init()
    const gmc = new Model({
        url: "gmc.glb",
        name: "gmc",
        scene: scene,
        meshes: meshes,
        scale: new THREE.Vector3(0.42,0.42,0.42),
        position: new THREE.Vector3(4,0,0),
        manager: loadingManager
    })
    gmc.init()
    const volkswagen = new Model({
        url: "volkswagen.glb",
        name: "volkswagen",
        scene: scene,
        meshes: meshes,
        scale: new THREE.Vector3(100,100,100),
        position: new THREE.Vector3(2,-0.35,0),
        manager: loadingManager
    })
    volkswagen.init()
}

function anim(){
    const delta = clock.getDelta()
    for (const mixer of mixers){
        mixer.update(delta)
    }
    
    renderer.render(scene,cam)
    requestAnimationFrame(anim)
}

init()