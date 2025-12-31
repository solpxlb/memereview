'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import { useKeyboardControls } from '@react-three/drei';
import { Controls } from '@/types';
import * as THREE from 'three';

export default function Player() {
    const { camera } = useThree();
    const [, get] = useKeyboardControls<Controls>();

    // Set initial camera position
    useEffect(() => {
        camera.position.set(0, 1.6, -22);
    }, [camera]);

    useFrame((state, delta) => {
        const { forward, backward, left, right } = get();

        // Get camera direction (forward vector)
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
        direction.y = 0; // Keep movement on horizontal plane
        direction.normalize();

        // Calculate side vector (perpendicular to forward)
        const sideVector = new THREE.Vector3();
        sideVector.crossVectors(camera.up, direction).normalize();

        const speed = 5 * delta;

        // Apply movement based on key presses
        if (forward) {
            camera.position.addScaledVector(direction, speed);
        }
        if (backward) {
            camera.position.addScaledVector(direction, -speed);
        }
        if (left) {
            camera.position.addScaledVector(sideVector, speed);
        }
        if (right) {
            camera.position.addScaledVector(sideVector, -speed);
        }

        // Constrain to corridor bounds
        camera.position.x = Math.max(-5, Math.min(5, camera.position.x));
        camera.position.z = Math.max(-24, Math.min(24, camera.position.z));
        camera.position.y = 1.6; // Keep at eye level
    });

    return (
        <PointerLockControls />
    );
}
