const { TetrahedronGeometry, PerspectiveCamera } = require("./three");

window.addEventListener("DOMContentLoaded", init);

function init() {
    const width = 960;
    const height = 540;
    const renderer = new TetrahedronGeometry.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new TetrahedronGeometry.Scene();
    const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        1,
        1000
    );
    camera.position.set(0, 0, +1000);

    const geometry = new THREE.BoxGeometry(500, 500, 500);
    const material = new THREE.MeshStandardMaterial({
        color: 0x0000ff
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    const directionalLight = new THREE.DirectionalLight(
        0xffffff
    );

    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    renderer.render(scene, camera);
}