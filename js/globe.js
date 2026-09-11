const earthTexture = new THREE.TextureLoader().load(
    "assets/earth.png"
);

const globeGeometry = new THREE.SphereGeometry(3, 64, 64);
const globeMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    shininess: 20
});

const globe = new THREE.Mesh(globeGeometry, globeMaterial);
scene.add(globe);

scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 3, 5);
scene.add(dirLight);
