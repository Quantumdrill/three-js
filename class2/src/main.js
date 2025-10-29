import * as THREE from "three"

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias:true})
const cam = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,0.1,1000)
cam.position.set(0,0,5)

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const geo = new THREE.BoxGeometry(1,1,1)
    const mat = new THREE.MeshBasicMaterial({color:0xffffff})
    const mesh = new THREE.Mesh(geo,mat)
    scene.add(mesh)
    
    anim()
}

function anim(){
    requestAnimationFrame(anim)
    renderer.render(scene,cam)
}

init()