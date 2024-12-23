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
const material = new THREE.MeshBasicMaterial({color: 'red'});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width/size.heigh);
camera.position.z = 5;

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: mainCanvas
});

renderer.setSize(size.width, size.heigh);

renderer.render(scene, camera);