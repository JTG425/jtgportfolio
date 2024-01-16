import React, { useRef } from "react";
import * as THREE from 'three'
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })


export default function Stars(props) {
  const starsRef = useRef();
  return (
    <group {...props} dispose={null} ref={starsRef}>
      <mesh
        visible
        rotation={[Math.PI / 2, 0, 0]}
      >
        <sphereGeometry attach="geometry" />
        <meshStandardMaterial emissive={glowBlue} emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </group>
  );
}