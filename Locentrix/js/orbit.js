const ringGeometry = new THREE.RingGeometry(3.5, 3.7, 64);
const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x00aaff,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide
});

const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.rotation.x = Math.PI / 2;
scene.add(ring);
