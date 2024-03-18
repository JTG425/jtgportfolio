import React, { useRef } from "react";
import { useFrame, extend } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

extend({ MeshStandardMaterial });


export default function SunModel(props) {
  const sunRef = useRef();


  return (
    <group {...props} dispose={null} ref={sunRef}>
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
    </group>
  );
}

