'use client';

export default function Lighting() {
    return (
        <>
            {/* Enhanced ambient light for overall gallery illumination */}
            <ambientLight intensity={0.9} color="#ffffff" />


            {/* Main directional light simulating natural skylight */}
            <directionalLight
                position={[5, 10, 3]}
                intensity={0.8}
                color="#fff5e6"
                castShadow
            />

            {/* Fill light from opposite side */}
            <directionalLight
                position={[-5, 8, -3]}
                intensity={0.4}
                color="#e8e8dc"
            />

            {/* Focused spot lights on each painting - Left wall */}
            <spotLight position={[-4, 3.5, -20]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[-4, 3.5, -12]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[-4, 3.5, -4]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[-4, 3.5, 4]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[-4, 3.5, 12]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[-4, 3.5, 20]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />

            {/* Focused spot lights on each painting - Right wall */}
            <spotLight position={[4, 3.5, -18]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[4, 3.5, -10]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[4, 3.5, -2]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[4, 3.5, 6]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[4, 3.5, 14]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />
            <spotLight position={[4, 3.5, 22]} angle={0.5} penumbra={0.5} intensity={3} distance={6} color="#fff5e6" castShadow />

            {/* Ceiling recessed lights */}
            {Array.from({ length: 13 }).map((_, i) => (
                <pointLight
                    key={`ceiling-light-${i}`}
                    position={[0, 4.7, -24 + i * 4]}
                    intensity={0.8}
                    distance={8}
                    color="#fffffa"
                    decay={2}
                />
            ))}
        </>
    );
}
