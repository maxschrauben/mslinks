// © Max!!! Schrauben Alle Links v1.2.6

import * as THREE from 'https://content.maxschrauben.de/mslinks/js/three/v1.2/pkg2/three.module.js';

const canvas = document.getElementById('particle-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 50;

const particlesGeometry = new THREE.BufferGeometry();
const particleCount = 200;
const positions = new Float32Array(particleCount * 3);
const originalPositions = new Float32Array(particleCount * 3);
const currentOffsets = new Float32Array(particleCount * 3);
const offsetVelocities = new Float32Array(particleCount * 3);
const velocities = [];

for (let i = 0; i < particleCount * 3; i += 3) {
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    const z = (Math.random() - 0.5) * 100;

    positions[i]     = originalPositions[i]     = x;
    positions[i + 1] = originalPositions[i + 1] = y;
    positions[i + 2] = originalPositions[i + 2] = z;

    velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03
    });
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
    color: window.themeParticleColor ? new THREE.Color(window.themeParticleColor).getHex() : (window.themeIsLiquid ? 0xffffff : 0x667eea),
    size: 0.8,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
});

window.particlesMaterial = particlesMaterial;

const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particleSystem);

const mouse = new THREE.Vector2(9999, 9999);
const mouse3D = new THREE.Vector3();
const smoothMouse3D = new THREE.Vector3(9999, 9999, 0);

const REPULSE_RADIUS   = 18;
const REPULSE_STRENGTH = 2.2;
const MOUSE_SMOOTH     = 0.08;
const SPRING           = 0.045;
const DAMPING          = 0.78;

window.addEventListener('mousemove', (e) => {
    mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('mouseleave', () => {
    mouse.set(9999, 9999);
});

function updateMouse3D() {
    const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    mouse3D.copy(camera.position).addScaledVector(dir, distance);

    smoothMouse3D.x += (mouse3D.x - smoothMouse3D.x) * MOUSE_SMOOTH;
    smoothMouse3D.y += (mouse3D.y - smoothMouse3D.y) * MOUSE_SMOOTH;
}

function animate() {
    if (window.bgparticlesOff) return;

    requestAnimationFrame(animate);
    updateMouse3D();

    const pos = particleSystem.geometry.attributes.position.array;
    const rotY = particleSystem.rotation.y;

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        originalPositions[i3]     += velocities[i].x;
        originalPositions[i3 + 1] += velocities[i].y;
        originalPositions[i3 + 2] += velocities[i].z;

        if (Math.abs(originalPositions[i3])     > 50) velocities[i].x *= -1;
        if (Math.abs(originalPositions[i3 + 1]) > 50) velocities[i].y *= -1;
        if (Math.abs(originalPositions[i3 + 2]) > 50) velocities[i].z *= -1;

        const wx = originalPositions[i3] * Math.cos(rotY) + originalPositions[i3 + 2] * Math.sin(rotY);
        const wy = originalPositions[i3 + 1];

        const dx = wx - smoothMouse3D.x;
        const dy = wy - smoothMouse3D.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let forceX = 0;
        let forceY = 0;

        if (dist < REPULSE_RADIUS && dist > 0.001) {
            const falloff = (Math.cos((dist / REPULSE_RADIUS) * Math.PI) + 1) * 0.5;
            const strength = falloff * REPULSE_STRENGTH * REPULSE_RADIUS;
            forceX = (dx / dist) * strength;
            forceY = (dy / dist) * strength;
        }

        offsetVelocities[i3]     += (forceX - currentOffsets[i3])     * SPRING;
        offsetVelocities[i3 + 1] += (forceY - currentOffsets[i3 + 1]) * SPRING;

        offsetVelocities[i3]     *= DAMPING;
        offsetVelocities[i3 + 1] *= DAMPING;

        currentOffsets[i3]     += offsetVelocities[i3];
        currentOffsets[i3 + 1] += offsetVelocities[i3 + 1];

        pos[i3]     = originalPositions[i3]     + currentOffsets[i3];
        pos[i3 + 1] = originalPositions[i3 + 1] + currentOffsets[i3 + 1];
        pos[i3 + 2] = originalPositions[i3 + 2];
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.rotation.y += 0.001;

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
});

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}