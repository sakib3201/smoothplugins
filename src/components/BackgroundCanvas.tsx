import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundCanvas: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const count = 1000;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            size: 0.02,
            color: '#9D8DF1',
            transparent: true,
            opacity: 0.5,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        camera.position.z = 5;

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        const animate = () => {
            requestAnimationFrame(animate);
            points.rotation.y += 0.001;
            points.rotation.x += 0.0005;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            containerRef.current?.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }} />;
};

export default BackgroundCanvas;
