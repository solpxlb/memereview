'use client';

import { useState } from 'react';
import Painting from './Painting';
import { MemeCoin } from '@/types';
import memecoinsData from '@/data/memecoins.json';

interface PaintingsProps {
    onActivePaintingChange: (coin: MemeCoin | null) => void;
}

export default function Paintings({ onActivePaintingChange }: PaintingsProps) {
    const coins = memecoinsData as MemeCoin[];

    // Arrange paintings: alternating left and right walls
    const paintingPositions = coins.map((coin, index) => {
        const isLeftWall = index % 2 === 0;
        const zPosition = -20 + (Math.floor(index / 2) * 8);

        if (isLeftWall) {
            return {
                position: [-5.9, 2.5, zPosition] as [number, number, number],
                rotation: [0, Math.PI / 2, 0] as [number, number, number],
            };
        } else {
            return {
                position: [5.9, 2.5, zPosition] as [number, number, number],
                rotation: [0, -Math.PI / 2, 0] as [number, number, number],
            };
        }
    });

    return (
        <>
            {coins.map((coin, index) => (
                <Painting
                    key={coin.name}
                    coin={coin}
                    position={paintingPositions[index].position}
                    rotation={paintingPositions[index].rotation}
                    onEnter={() => onActivePaintingChange(coin)}
                    onLeave={() => onActivePaintingChange(null)}
                />
            ))}
        </>
    );
}
