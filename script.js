import * as THREE from 'three';

const R = 2; // Rayon du cercle
let t = 0; // Angle initial (en radians)


function circleRev() {
    // Calcul de la position
    const x = R * Math.cos(t);
    const z = R * Math.sin(t);


    // Incrémenter l'angle pour avancer sur le cercle
    t += 0.05; // Ajuste la valeur pour modifier la vitesse
    if (t > 2 * Math.PI) {
        t -= 2 * Math.PI; // Remet à 0 après un tour complet
    }

    camera.position.set(x, 1, z);
    camera.lookAt(0, 0, 0); // Toujours regarder vers l'origine

    renderer.render(scene, camera); // Rendre la scène avec la caméra mise à jour
}

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
camera.position.z = 3;
camera.position.y = 2;
camera.position.x = 2;
camera.lookAt(0,0,0);

setInterval(circleRev, 50);

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: mainCanvas
});

renderer.setSize(size.width, size.heigh);

renderer.render(scene, camera);