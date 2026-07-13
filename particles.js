// © Max!!! Schrauben Alle Links v1.3.0

import * as THREE from 'https://content.maxschrauben.de/mslinks/js/three/v1.2/pkg2/three.module.js';

const canvas = document.getElementById('particle-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 50;

const particlesGeometry = new THREE.BufferGeometry();
const particleCount = 500;
const positions = new Float32Array(particleCount * 3);
const ambientPositions = new Float32Array(particleCount * 3);
const displayPositions = new Float32Array(particleCount * 3);
const velocities = [];

for (let i = 0; i < particleCount * 3; i += 3) {
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    const z = (Math.random() - 0.5) * 100;

    positions[i] = ambientPositions[i] = displayPositions[i] = x;
    positions[i + 1] = ambientPositions[i + 1] = displayPositions[i + 1] = y;
    positions[i + 2] = ambientPositions[i + 2] = displayPositions[i + 2] = z;

    velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03
    });
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
    color: window.themeParticleColor ? new THREE.Color(window.themeParticleColor).getHex() : (window.themeIsLiquid ? 0xffffff : 0x667eea),
    size: 0.5,
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
let firstMove = true;

const HOLE_RADIUS = 23;
const MOUSE_SMOOTH = 0.10;
const LERP_SPEED = 0.27;

window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    if (firstMove) {
        firstMove = false;
        const v = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        v.unproject(camera);
        const d = v.sub(camera.position).normalize();
        const dist = -camera.position.z / d.z;
        smoothMouse3D.copy(camera.position).addScaledVector(d, dist);
    }
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
    const cosR = Math.cos(rotY);
    const sinR = Math.sin(rotY);

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        ambientPositions[i3] += velocities[i].x;
        ambientPositions[i3 + 1] += velocities[i].y;
        ambientPositions[i3 + 2] += velocities[i].z;

        if (Math.abs(ambientPositions[i3]) > 50) velocities[i].x *= -1;
        if (Math.abs(ambientPositions[i3 + 1]) > 50) velocities[i].y *= -1;
        if (Math.abs(ambientPositions[i3 + 2]) > 50) velocities[i].z *= -1;

        const lx = ambientPositions[i3];
        const ly = ambientPositions[i3 + 1];
        const lz = ambientPositions[i3 + 2];

        const wx = lx * cosR + lz * sinR;
        const wy = ly;

        const dx = wx - smoothMouse3D.x;
        const dy = wy - smoothMouse3D.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = lx;
        let targetY = ly;
        let targetZ = lz;

        if (dist < HOLE_RADIUS && dist > 0.001) {
            const pushAmount = HOLE_RADIUS - dist;
            const nx = dx / dist;
            const ny = dy / dist;

            targetX += nx * pushAmount * cosR;
            targetY += ny * pushAmount;
            targetZ += nx * pushAmount * sinR;
        }

        displayPositions[i3] += (targetX - displayPositions[i3]) * LERP_SPEED;
        displayPositions[i3 + 1] += (targetY - displayPositions[i3 + 1]) * LERP_SPEED;
        displayPositions[i3 + 2] += (targetZ - displayPositions[i3 + 2]) * LERP_SPEED;

        pos[i3] = displayPositions[i3];
        pos[i3 + 1] = displayPositions[i3 + 1];
        pos[i3 + 2] = displayPositions[i3 + 2];
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