const lxTexture = new THREE.TextureLoader().load(
    "https://dummyimage.com/300x300/00aaff/ffffff&text=LX"
);

const lxMaterial = new THREE.SpriteMaterial({
    map: lxTexture,
    color: 0x00aaff,
    opacity: 0.8,
    transparent: true
});

const lx = new THREE.Sprite(lxMaterial);
lx.scale.set(4, 4, 1);
lx.position.set(0, 4, 0);

scene.add(lx);
