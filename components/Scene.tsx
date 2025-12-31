'use client';

import { useFrame, useThree } from '@react-three/fiber';
import Corridor from './Corridor';
import Paintings from './Paintings';
import Player from './Player';
import Lighting from './Lighting';
import { MemeCoin } from '@/types';
import memecoinsData from '@/data/memecoins.json';
import * as THREE from 'three';

interface SceneProps {
    setActivePainting: (coin: MemeCoin | null) => void;
}

export default function Scene({ setActivePainting }: SceneProps) {
    const { camera } = useThree();
    const coins = memecoinsData as MemeCoin[];

    // Check proximity to paintings
    useFrame(() => {
        const cameraPos = camera.position;
        let nearestCoin: MemeCoin | null = null;
        let minDistance = Infinity;

        coins.forEach((coin, index) => {
            const isLeftWall = index % 2 === 0;
            const zPosition = -20 + (Math.floor(index / 2) * 8);
            const xPosition = isLeftWall ? -5.9 : 5.9;

            const paintingPos = new THREE.Vector3(xPosition, 2.5, zPosition);
            const distance = cameraPos.distanceTo(paintingPos);

            if (distance < 3 && distance < minDistance) {
                minDistance = distance;
                nearestCoin = coin;
            }
        });

        setActivePainting(nearestCoin);
    });

    return (
        <>
            <Lighting />
            <Corridor />
            <Paintings onActivePaintingChange={() => { }} />
            <Player />

            {/* Atmospheric fog for depth */}
            <fog attach="fog" args={['#c8c8c0', 15, 40]} />
        </>
    );
}
