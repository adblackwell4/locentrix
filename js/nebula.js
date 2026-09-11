const nebulaTexture = new THREE.TextureLoader().load("assets/nebula.jpg");

const nebulaMaterial = new THREE.SpriteMaterial({
    map: nebulaTexture,
    color: 0x4466ff,
    opacity: 0.35,
    transparent: true
});

const nebula = new THREE.Sprite(nebulaMaterial);
nebula.scale.set(200, 200, 1);
nebula.position.set(0, 0, -50);

scene.add(nebula);
