import './style.css'
//IMPORT THREE.JS SO WE CAN ACCESS IT
import * as THREE from 'three'
//IMPORT OUR ADD DEFAULT MESHES FUNCTION FROM OUR EXTERNAL JS FILE
import { addDefaultMeshes, addStandardMesh } from './addDefaultMeshes'
import { addLight } from './addLight'
import Model from './model'
import { manager } from './manager'
import gsap from 'gsap'

//SET UP OUR ESSENTIALS SCENE, CAMERA, RENDERER
const scene = new THREE.Scene()

//THE FOUR PARAMETERS TO OUR PERSPECTIVE CAMERA ARE: (FOV, ASPECT RATIO, NEAR FRUSTUM, FAR FRUSTUM)
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)
const renderer = new THREE.WebGLRenderer({ antialias: true })

//SET THE CAMERA Z POSITION TO 5 SO THAT WE'RE NOT ON TOP OF ALL OUR MESHES BY DEFAULT
camera.position.set(0, 0, 5)

//CREATE A GLOBALLY ACCESSIBLE OBJECT TO HOLD ONTO ALL OF OUR MESHES
const meshes = {}
const lights = {}
const mixers = []

const clock = new THREE.Clock()
const loadingManager = manager()

//CALL OUR INIT FUNCTION, OUR SETUP BASICALLY
init()
function init() {
	//DEFAULT SETTINGS FOR OUR RENDERER, WE WANT TO SET THE SIZE OF OUR RENDERER OUTPUT TO BE THE SAME SIZE AND RATIO AS OUR WINDOW
	//WE ALSO WANT OUR RENDERER TO OUTPUT TO OUR WEBPAGE
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	//WE WILL ADD ANY AND ALL 3D MESHES TO OUR GLOBAL MESHES OBJECT HERE

	//Lights
	lights.default = addLight()

	//HERE WE'LL ADD EACH OBJECT TO OUR SCENE AS WELL

	scene.add(lights.default)

	//START OUR ANIMATION LOOP
	gsapStuff
	instances()
	animate()
}

/*------------------------------
OUR BUTTONS AND INTERACTION SECTION
------------------------------*/
function gsapStuff() {
	const LEFT_BUTTON = document.querySelector('.left')
	const RIGHT_BUTTON = document.querySelector('.right')
	const ANIMATE_BUTTON = document.querySelector('.animate')
	const COLOR_BUTTON = document.querySelector('.color')
	LEFT_BUTTON.addEventListener('click', () => {
		gsap.to(meshes.flower.position, {
			x: meshes.flower.position.x - 0.5,
			duration: 1,
			ease: 'power1',
		})
	})
	RIGHT_BUTTON.addEventListener('click', () => {
		gsap.to(meshes.flower.position, {
			x: meshes.flower.position.x + 0.5,
			duration: 1,
			ease: 'power1',
		})
	})
	ANIMATE_BUTTON.addEventListener('click', () => {
		gsap.to(meshes.flower.position, {
			x: meshes.flower.position.y + 0.5,
			duration: 1,
			ease: 'power1',
		})
		gsap.to(meshes.flower.scale, {
			x: 2,
			y: 2,
			z: 2,
			duration: 1,
			ease: 'power1',
			delay: 1,
		})
		gsap.to(meshes.flower.rotation, {
			x: Math.PI * 2,
			y: Math.PI * 2,
			z: Math.PI * 2,
			duration: 0.5,
			ease: 'power2.inOut',
		})
	})
}

function instances() {
	const flower = new Model({
		name: 'flower',
		url: 'flowers.glb',
		scene: scene,
		meshes: meshes,
		animationState: true,
		mixers: mixers,
		scale: new THREE.Vector3(1, 1, 1),
		position: new THREE.Vector3(0, -0.8, 3),
		replace: true,
		replaceURL: 'gold.png',
		manager: loadingManager,
	})
	flower.init()
}

function animate() {
	//EVERY FRAME WE UPDATE THE POSITION OF OUR meshes.default, meshes.copy, meshes.copy2
	const delta = clock.getDelta()
	for (const mixer of mixers) {
		mixer.update(delta)
	}

	if (meshes.flower) {
		meshes.flower.rotation.y -= 0.01
	}

	//RE-START THE LOOP
	requestAnimationFrame(animate)

	//RENDER OUR SCENE VIA CAMERA VIEW TO SCREEN
	renderer.render(scene, camera)
}
