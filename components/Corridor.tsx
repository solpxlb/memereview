'use client';

export default function Corridor() {
    return (
        <group>
            {/* Floor - Polished wood/marble effect */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[12, 50]} />
                <meshStandardMaterial
                    color="#8b7355"
                    roughness={0.4}
                    metalness={0.2}
                />
            </mesh>

            {/* Ceiling with uniform color */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 5, 0]}>
                <planeGeometry args={[12, 50]} />
                <meshStandardMaterial color="#ffffff" roughness={0.7} />
            </mesh>

            {/* Left Wall - Museum white */}
            <mesh position={[-6, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[50, 5]} />
                <meshStandardMaterial
                    color="#f8f8f5"
                    roughness={0.85}
                    metalness={0.05}
                />
            </mesh>

            {/* Left wall baseboard */}
            <mesh position={[-5.9, 0.15, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[50, 0.3, 0.15]} />
                <meshStandardMaterial color="#3a3530" roughness={0.6} metalness={0.1} />
            </mesh>

            {/* Left wall crown molding */}
            <mesh position={[-5.9, 4.85, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[50, 0.3, 0.15]} />
                <meshStandardMaterial color="#e8e8dc" roughness={0.7} />
            </mesh>

            {/* Right Wall - Museum white */}
            <mesh position={[6, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[50, 5]} />
                <meshStandardMaterial
                    color="#f8f8f5"
                    roughness={0.85}
                    metalness={0.05}
                />
            </mesh>

            {/* Right wall baseboard */}
            <mesh position={[5.9, 0.15, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <boxGeometry args={[50, 0.3, 0.15]} />
                <meshStandardMaterial color="#3a3530" roughness={0.6} metalness={0.1} />
            </mesh>

            {/* Right wall crown molding */}
            <mesh position={[5.9, 4.85, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <boxGeometry args={[50, 0.3, 0.15]} />
                <meshStandardMaterial color="#e8e8dc" roughness={0.7} />
            </mesh>

            {/* Back Wall */}
            <mesh position={[0, 2.5, -25]}>
                <planeGeometry args={[12, 5]} />
                <meshStandardMaterial color="#f8f8f5" roughness={0.85} />
            </mesh>

            {/* Back wall baseboard */}
            <mesh position={[0, 0.15, -24.85]}>
                <boxGeometry args={[12, 0.3, 0.15]} />
                <meshStandardMaterial color="#3a3530" roughness={0.6} metalness={0.1} />
            </mesh>

            {/* Front Wall */}
            <mesh position={[0, 2.5, 25]} rotation={[0, Math.PI, 0]}>
                <planeGeometry args={[12, 5]} />
                <meshStandardMaterial color="#f8f8f5" roughness={0.85} />
            </mesh>

            {/* Front wall baseboard */}
            <mesh position={[0, 0.15, 24.85]} rotation={[0, Math.PI, 0]}>
                <boxGeometry args={[12, 0.3, 0.15]} />
                <meshStandardMaterial color="#3a3530" roughness={0.6} metalness={0.1} />
            </mesh>

            {/* Ceiling light fixtures */}
            {Array.from({ length: 13 }).map((_, i) => (
                <group key={`fixture-${i}`} position={[0, 4.75, -24 + i * 4]}>
                    {/* Light housing */}
                    <mesh>
                        <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
                        <meshStandardMaterial color="#d4d4d0" metalness={0.8} roughness={0.2} />
                    </mesh>
                    {/* Light diffuser */}
                    <mesh position={[0, -0.06, 0]}>
                        <cylinderGeometry args={[0.25, 0.25, 0.02, 16]} />
                        <meshStandardMaterial
                            color="#fffffa"
                            emissive="#fff5e6"
                            emissiveIntensity={0.8}
                            transparent
                            opacity={0.9}
                        />
                    </mesh>
                </group>
            ))}
        </group>
    );
}
