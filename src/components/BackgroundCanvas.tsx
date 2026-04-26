import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

const BackgroundCanvas: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const materialRef = useRef<THREE.PointsMaterial | null>(null);
    const frameRef = useRef<number>(0);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    const newTheme = document.documentElement.getAttribute('data-theme');
                    setTheme(newTheme as 'light' | 'dark');
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        setTheme(document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light');

        return () => observer.disconnect();
    }, []);

    const updateMaterial = useCallback((t: 'light' | 'dark') => {
        if (!materialRef.current) return;
        materialRef.current.color.set(t === 'dark' ? '#B8A9FF' : '#9D8DF1');
        materialRef.current.opacity = t === 'dark' ? 0.3 : 0.5;
    }, []);

    useEffect(() => {
        if (theme) updateMaterial(theme);
    }, [theme, updateMaterial]);

    useEffect(() => {
        if (!containerRef.current) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

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

        materialRef.current = material;
        updateMaterial(theme);

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
            frameRef.current = requestAnimationFrame(animate);
            points.rotation.y += 0.001;
            points.rotation.x += 0.0005;
            renderer.render(scene, camera);
        };

        if (!prefersReducedMotion) {
            animate();
        } else {
            renderer.render(scene, camera);
        }

        return () => {
            cancelAnimationFrame(frameRef.current);
            window.removeEventListener('resize', handleResize);
            if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            rendererRef.current = null;
            materialRef.current = null;
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

export default BackgroundCanvas;
