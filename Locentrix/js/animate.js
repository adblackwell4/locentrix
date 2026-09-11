function animate() {
    requestAnimationFrame(animate);

    globe.rotation.y += 0.002;

    stars.rotation.x = mouseY * 0.05;
    stars.rotation.y = mouseX * 0.05;

    nebula.position.x = mouseX * -10;
    nebula.position.y = mouseY * -10;

    lx.position.y = 4 + Math.sin(Date.now() * 0.002) * 0.5;

    renderer.render(scene, camera);
}

animate();
