import React, { useRef, Memo } from "react";
import { useFrame, extend } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';
import { SelectiveBloom } from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize } from "postprocessing";
import { SpotLight } from "@react-three/drei";

extend({ MeshStandardMaterial });


export default function SunModel(props) {
  const sunRef = useRef();
  const spotlightRef1 = useRef();
  const spotlightRef2 = useRef();



  return (

    <group {...props} dispose={null} ref={sunRef}>
      <group>
        <mesh
          visible
          rotation={[Math.PI / 2, 0, 0]}
        >
          <sphereGeometry args={[12, 15, 10]} />
          <meshStandardMaterial
            emissive={'#ffff00'}
            emissiveIntensity={0.80}

          />
        </mesh>
        <group>
          <SpotLight
            ref={spotlightRef1}
            position={[0, 100, 0]}
            target={sunRef.current}
            angle={0}
            penumbra={0.2}
            intensity={1}
            distance={100}
            decay={2}
            castShadow
          />
          <SpotLight
            ref={spotlightRef1}
            position={[0, -100, 0]}
            target={sunRef.current}
            angle={0}
            penumbra={0.2}
            intensity={1}
            distance={100}
            decay={2}
            castShadow
          />
        </group>
      </group>
    </group>
  );
}

