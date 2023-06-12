import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Timeline } from 'gsap/gsap-core';

//Scene
const scene = new THREE.Scene();

//my sphere
const Geometry = new THREE.SphereGeometry(3, 64, 64);

//my material
const material = new THREE.MeshStandardMaterial({ color: "#00ff83" });

//my mesh
const mesh = new THREE.Mesh(Geometry, material);

//add mesh to scene
scene.add(mesh);

// sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

//light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);


// camera 

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 20;
scene.add(camera);


//renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

// resize 

window.addEventListener("resize", () => {
    //update sizes
    controls.update();
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //update camera
    camera.updateProjectionMatrix();
    camera.aspect = sizes.width / sizes.height;
    renderer.setSize(sizes.width, sizes.height);
}
)

const loop = () => {
    // mesh.position.x += 0.2 ;
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop();


// Timeline magic 

const ti