"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";

function Model() {
    const { scene } = useGLTF('/arbol.glb');
    const model = useMemo(() => scene.clone(), [scene]);
    const ref = useRef<Group | null>(null);

    useFrame(()=>{
        if(ref.current){
            ref.current.rotation.y += 0.01;
        }
    })

    return <primitive ref={ref} object={model} dispose={null}/>
}

const Objeto3d = () => {
    return (
        <Canvas
            className="h-full w-full"
            camera={{ position: [0, 0, 1.1] }}
            dpr={[1, 1.5]}
            gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        >
            <ambientLight intensity={0.6} />

            <directionalLight
                position={[2, 2, 2]}
                intensity={3}
            />
            <directionalLight
                position={[-2, -2, -2]}
                intensity={5}
            />
            <directionalLight
                position={[-3, 2, 0]}
                intensity={5}
            />
            <directionalLight
                position={[5, 2, 1]}
                intensity={5}
            />

            <Suspense fallback={null}>
                <Model />
            </Suspense>

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
    );
}
 
export default Objeto3d;
