import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const OrbitalHub3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Inner Core - Wireframe Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(2.8, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xadc6ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Inner Glowing Sphere
    const innerGeo = new THREE.SphereGeometry(2.0, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x2fd9f4,
      transparent: true,
      opacity: 0.25
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Orbital Ring 1 (Primary)
    const ring1Geo = new THREE.RingGeometry(4.8, 5.0, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x4d8eff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    ring1Mesh.rotation.y = Math.PI / 6;
    scene.add(ring1Mesh);

    // Orbital Ring 2 (Secondary)
    const ring2Geo = new THREE.RingGeometry(6.5, 6.7, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xd2bbff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.y = Math.PI / 3;
    scene.add(ring2Mesh);

    // Orbital Ring 3 (Outer Cyan)
    const ring3Geo = new THREE.RingGeometry(8.2, 8.35, 64);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x2fd9f4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25
    });
    const ring3Mesh = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3Mesh.rotation.x = Math.PI / 2.2;
    scene.add(ring3Mesh);

    // Satellite Nodes on Rings
    const nodeGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const nodesCount = 6;
    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < nodesCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      nodes.push(node);
      scene.add(node);
    }

    // Particle Stars Cloud around the hub
    const particlesCount = 240;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const r = 4.0 + Math.random() * 8.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      posArray[i] = r * Math.cos(theta) * Math.cos(phi);
      posArray[i + 1] = r * Math.sin(phi);
      posArray[i + 2] = r * Math.sin(theta) * Math.cos(phi);
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0xa2eeff,
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // Rotation speeds
      coreMesh.rotation.x = time * 0.2;
      coreMesh.rotation.y = time * 0.3;

      innerMesh.rotation.y = -time * 0.15;

      ring1Mesh.rotation.z = time * 0.12;
      ring2Mesh.rotation.z = -time * 0.18;
      ring3Mesh.rotation.z = time * 0.08;

      particlesMesh.rotation.y = time * 0.05;

      // Move satellite nodes along circular paths
      nodes.forEach((node, idx) => {
        const radius = idx % 2 === 0 ? 5.8 : 7.6;
        const speed = (idx + 1) * 0.4;
        const angle = time * speed * 0.5 + idx * ((Math.PI * 2) / nodesCount);

        node.position.x = Math.cos(angle) * radius;
        node.position.y = Math.sin(angle) * (radius * 0.4);
        node.position.z = Math.sin(angle) * (radius * 0.8);
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[420px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    />
  );
};
