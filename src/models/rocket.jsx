import React, { useRef, useEffect, useState } from "react";
import * as THREE from 'three'
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Rocket(props) {
  const { nodes, materials } = useGLTF("models/rocket.glb");
  const [currentPlanet, setCurrentPlanet] = useState("home");

  const rocketRef = useRef();
  const camRef = useRef();
  const cameraPosition = new THREE.Vector3(0, 0, 40);
  const rocketPosition = new THREE.Vector3(0, 0, 0);

  useEffect(() => {
    if (props.home && currentPlanet !== "home") {
      animateRocketToPosition(0, 0, 0, "home");
      setCurrentPlanet("home");
    } else if (props.about && currentPlanet !== "about") {
      animateRocketToPosition(50, 35.5, -25, "about");
      setCurrentPlanet("about");
    } else if (props.contact && currentPlanet !== "contact") {
      animateRocketToPosition(-50, 0, 40, "contact");
      setCurrentPlanet("contact");
    } else if (props.projects && currentPlanet !== "projects") {
      animateRocketToPosition(50, -15, 40, "projects");
      setCurrentPlanet("projects");
    } else if (props.resume && currentPlanet !== "resume") {
      animateRocketToPosition(-65, -17, -50, "resume");
      setCurrentPlanet("resume");
    }
  }, [props.home, props.about, props.contact, props.projects, props.resume, currentPlanet]);

  const animateRocketToPosition = (x, y, z) => {
    gsap.to(rocketRef.current.position, {
      duration: 2,
      ease: "none",
      motionPath: {
        path: [
          { x: x - 1, y: y + 1, z: z },
          { x, y, z },
        ],
        curviness: 5,
      },
    });
  };
  useFrame((state, delta) => {
    rocketPosition.setFromMatrixPosition(rocketRef.current.matrixWorld);
    state.camera.lookAt(rocketPosition);
    state.camera.updateProjectionMatrix();
  });



  return (
    <group {...props} dispose={null} ref={rocketRef}>
      <group>
        <group
          position={[0, 1.673, 0.663]}
          rotation={[1.394, 0, 0]}
          scale={0.431}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.purple2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials.bLUE}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCircle.geometry}
          material={materials.purple2}
          position={[-0.274, -0.239, 0.158]}
          rotation={[1.346, -0.368, -0.566]}
          scale={0.852}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCircle001.geometry}
          material={materials.purple2}
          position={[0, -0.239, -0.316]}
          rotation={[1.999, 0, 1.57]}
          scale={0.852}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCircle002.geometry}
          material={materials.purple2}
          position={[0.274, -0.239, 0.158]}
          rotation={[1.346, 0.368, -2.577]}
          scale={0.852}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.White}
        />
      </group>
      <group>
        <PerspectiveCamera
          makeDefault
          fov={75}
          position={cameraPosition}
          useRef={camRef}
        >
        </PerspectiveCamera>
      </group>
    </group>
  );
}

useGLTF.preload("models/rocket.glb");
