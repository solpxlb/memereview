'use client';

import { useRef } from 'react';
import { Mesh, TextureLoader } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { MemeCoin } from '@/types';

interface PaintingProps {
    coin: MemeCoin;
    position: [number, number, number];
    rotation?: [number, number, number];
    onEnter: () => void;
    onLeave: () => void;
}

export default function Painting({ coin, position, rotation = [0, 0, 0], onEnter, onLeave }: PaintingProps) {
    const meshRef = useRef<Mesh>(null);

    // Load texture with proper error handling
    const texture = useLoader(TextureLoader, coin.image);

    return (
        <group position={position} rotation={rotation}>
            {/* Main painting plane */}
            <mesh ref={meshRef}>
                <planeGeometry args={[2, 2]} />
                <meshStandardMaterial map={texture} />
            </mesh>

            {/* Gold frame */}
            {/* Top */}
            <mesh position={[0, 1.05, -0.02]}>
                <boxGeometry args={[2.1, 0.1, 0.05]} />
                <meshStandardMaterial color="#d4af37" metalness={0.7} roughness={0.3} />
            </mesh>

            {/* Bottom */}
            <mesh position={[0, -1.05, -0.02]}>
                <boxGeometry args={[2.1, 0.1, 0.05]} />
                <meshStandardMaterial color="#d4af37" metalness={0.7} roughness={0.3} />
            </mesh>

            {/* Left */}
            <mesh position={[-1.05, 0, -0.02]}>
                <boxGeometry args={[0.1, 2, 0.05]} />
                <meshStandardMaterial color="#d4af37" metalness={0.7} roughness={0.3} />
            </mesh>

            {/* Right */}
            <mesh position={[1.05, 0, -0.02]}>
                <boxGeometry args={[0.1, 2, 0.05]} />
                <meshStandardMaterial color="#d4af37" metalness={0.7} roughness={0.3} />
            </mesh>

            {/* Month label */}
            <Text
                position={[0, -1.5, 0]}
                fontSize={0.2}
                color="#000000"
                anchorX="center"
                anchorY="middle"
                fontWeight={700}
            >
                {coin.month.toUpperCase()}
            </Text>
        </group>
    );
}
