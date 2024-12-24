import * as THREE from 'three';

const size = {
    width: 800,
    heigh: 600
}

const mainCanvas = document.querySelector('canvas#main-canvas');

// Scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 'magenta'});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// The mesh can be updated after it has been added to the scene but BEFORE the scene is rendered
mesh.position.set(2,-1,-0.5);

// Get the length of the Vector (distance between mesh position and origin (0,0,0))
console.log(mesh.position.length());

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width/size.heigh);
camera.position.z = 3;

scene.add(camera);

// Get the distance between two Objects (mesh and camera) Muste be AFTER camera initialization
const distanceFromCamera = mesh.position.distanceTo(camera.position);

// Get the distance between two Objects (mesh and instanciate Vector)
const distanceFromVector = mesh.position.distanceTo(new THREE.Vector3(0,2,5));

console.log(distanceFromCamera);
console.log(distanceFromVector);

// normalize() adjusts the vector so its length becomes 1, keeping its direction unchanged

mesh.position.normalize();

console.log(mesh.position.length()); // equals 1

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: mainCanvas
});

renderer.setSize(size.width, size.heigh);

renderer.render(scene, camera);