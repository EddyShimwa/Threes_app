import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//my sphere
const Geometry = new THREE.SphereGeometry(3, 64, 64);

//my material
const material = new THREE.MeshStandardMaterial({ color: "#00ff83" });

//my mesh
const mesh = new THREE.Mesh(Geometry, material);