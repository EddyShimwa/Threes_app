import * as THREE from 'three';

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








// resize 

window.addEventListener("resize", () => {
    //update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // //update camera
    // camera.aspect = sizes.width / sizes.height;
    // camera.updateProjectionMatrix();

    // //update renderer
    // renderer.setSize(sizes.width, sizes.height);
    // renderer.render(scene, camera);
}
)