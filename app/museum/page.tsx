'use client';

import { Suspense, useState, useMemo, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei';
import Scene from '@/components/Scene';
import Instructions from '@/components/UI/Instructions';
import Crosshair from '@/components/UI/Crosshair';
import Overlay from '@/components/UI/Overlay';
import { Controls, MemeCoin } from '@/types';

export default function Home() {
  const [isLocked, setIsLocked] = useState(false);
  const [activePainting, setActivePainting] = useState<MemeCoin | null>(null);

  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW', 'w'] },
      { name: Controls.backward, keys: ['ArrowDown', 'KeyS', 's'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA', 'a'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD', 'd'] },
    ],
    []
  );

  // Listen for pointer lock changes
  useEffect(() => {
    const handlePointerLockChange = () => {
      setIsLocked(document.pointerLockElement !== null);
    };

    document.addEventListener('pointerlockchange', handlePointerLockChange);
    document.addEventListener('pointerlockerror', () => {
      console.error('Pointer lock error');
    });

    return () => {
      document.removeEventListener('pointerlockchange', handlePointerLockChange);
    };
  }, []);

  return (
    <KeyboardControls map={map}>
      <main className="main-container">
        <Instructions isLocked={isLocked} />
        <Crosshair />
        {activePainting && <Overlay coin={activePainting} />}

        <Canvas
          camera={{ fov: 75, position: [0, 1.6, -22] }}
        >
          <Suspense fallback={null}>
            <Scene setActivePainting={setActivePainting} />
          </Suspense>
        </Canvas>
      </main>
    </KeyboardControls>
  );
}
