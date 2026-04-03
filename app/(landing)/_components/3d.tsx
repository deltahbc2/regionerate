"use client";

import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Model() {
    const { scene } = useGLTF('/arbol.glb');
    const ref = useRef<any>('');

    useFrame(()=>{
        if(ref.current){
            ref.current.rotation.y += 0.01;
        }
    })

    return <primitive ref={ref} object={scene}/>
}

const Objeto3d = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1.1] }}>
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

            <Model />

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
    );
}
 
export default Objeto3d;