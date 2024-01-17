import React, { useRef, useEffect, useState } from "react";
import * as THREE from 'three'
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

function createArcPath(x1, y1, x2, y2, radius, clockwise) {
  // Calculate the midpoint between the two points
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  // Calculate the distance between the two points
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Calculate the angle between the two points
  const angle = Math.atan2(dy, dx);

  // Calculate the control point for the arc
  const controlX = midX + radius * Math.cos(angle + (clockwise ? Math.PI / 2 : -Math.PI / 2));
  const controlY = midY + radius * Math.sin(angle + (clockwise ? Math.PI / 2 : -Math.PI / 2));

  // Construct the SVG path string
  const pathString = `M${x1},${y1} Q${controlX},${controlY} ${x2},${y2}`;

  return pathString;
}

export default function Rocket(props) {
  const { nodes, materials } = useGLTF("models/rocket.glb");
  const [currentPlanet, setCurrentPlanet] = useState("home");
  const [destination, setDestination] = useState("home");
  const [launch, setLaunch] = useState(false);

  const rocketRef = useRef();
  const camRef = useRef();
  const cameraPosition = new THREE.Vector3(0, 0, 40);
  const rocketPosition = new THREE.Vector3(0, 0, 0);
  const homePosition = [0, 0];
  const aboutPosition = [200, 0];
  const contactPosition = [-200, 0];
  const projectsPosition = [400, 0];
  const resumePosition = [-400, 0];
  const degree = 90;


  useEffect(() => {
    if (currentPlanet === "home") {
      if (props.about) {
        setDestination("about");
        animateRocketToPosition(homePosition[0], homePosition[1], aboutPosition[0], aboutPosition[1], degree, true, "right");
        setCurrentPlanet("about");
      } else if (props.contact) {
        setDestination("contact");
        animateRocketToPosition(homePosition[0], homePosition[1], contactPosition[0], contactPosition[1], degree, true, "left");
        setCurrentPlanet("contact");
      } else if (props.projects) {
        setDestination("projects");
        animateRocketToPosition(homePosition[0], homePosition[1], projectsPosition[0], projectsPosition[1], degree, true, "right");
        setCurrentPlanet("projects");
      } else if (props.resume) {
        setDestination("resume");
        animateRocketToPosition(homePosition[0], homePosition[1], resumePosition[0], resumePosition[1], degree, true, "left");
        setCurrentPlanet("resume");
      }
    } else if (currentPlanet === "about") {
      if (props.home) {
        setDestination("home");
        animateRocketToPosition(aboutPosition[0], aboutPosition[1], homePosition[0], homePosition[1], degree, true);
        setCurrentPlanet("home");
      } else if (props.contact) {
        setDestination("contact");
        animateRocketToPosition(aboutPosition[0], aboutPosition[1], contactPosition[0], contactPosition[1], degree, true);
        setCurrentPlanet("contact");
      } else if (props.projects) {
        setDestination("projects");
        animateRocketToPosition(aboutPosition[0], aboutPosition[1], projectsPosition[0], projectsPosition[1], degree, true);
        setCurrentPlanet("projects");
      } else if (props.resume) {
        setDestination("resume");
        animateRocketToPosition(aboutPosition[0], aboutPosition[1], resumePosition[0], resumePosition[1], degree, true);
        setCurrentPlanet("resume");
      }
    } else if (currentPlanet === "contact") {
      if (props.home) {
        setDestination("home");
        animateRocketToPosition(contactPosition[0], contactPosition[1], homePosition[0], homePosition[1], degree, true);
        setCurrentPlanet("home");
      } else if (props.about) {
        setDestination("about");
        animateRocketToPosition(contactPosition[0], contactPosition[1], aboutPosition[0], aboutPosition[1], degree, true);
        setCurrentPlanet("about");
      } else if (props.projects) {
        setDestination("projects");
        animateRocketToPosition(contactPosition[0], contactPosition[1], projectsPosition[0], projectsPosition[1], degree, true);
        setCurrentPlanet("projects");
      } else if (props.resume) {
        setDestination("resume");
        animateRocketToPosition(contactPosition[0], contactPosition[1], resumePosition[0], resumePosition[1], degree, true);
        setCurrentPlanet("resume");
      }
    } else if (currentPlanet === "projects") {
      if (props.home) {
        setDestination("home");
        animateRocketToPosition(projectsPosition[0], projectsPosition[1], homePosition[0], homePosition[1], degree, true);
        setCurrentPlanet("home");
      } else if (props.about) {
        setDestination("about");
        animateRocketToPosition(projectsPosition[0], projectsPosition[1], aboutPosition[0], aboutPosition[1], degree, true);
        setCurrentPlanet("about");
      } else if (props.contact) {
        setDestination("contact");
        animateRocketToPosition(projectsPosition[0], projectsPosition[1], contactPosition[0], contactPosition[1], degree, true);
        setCurrentPlanet("contact");
      } else if (props.resume) {
        setDestination("resume");
        animateRocketToPosition(projectsPosition[0], projectsPosition[1], resumePosition[0], resumePosition[1], degree, true);
        setCurrentPlanet("resume");
      }
    } else if (currentPlanet === "resume") {
      if (props.home) {
        setDestination("home");
        animateRocketToPosition(resumePosition[0], resumePosition[1], homePosition[0], homePosition[1], degree, true);
        setCurrentPlanet("home");
      } else if (props.about) {
        setDestination("about");
        animateRocketToPosition(resumePosition[0], resumePosition[1], aboutPosition[0], aboutPosition[1], degree, true);
        setCurrentPlanet("about");
      } else if (props.contact) {
        setDestination("contact");
        animateRocketToPosition(resumePosition[0], resumePosition[1], contactPosition[0], contactPosition[1], degree, true);
        setCurrentPlanet("contact");
      } else if (props.projects) {
        setDestination("projects");
        animateRocketToPosition(resumePosition[0], resumePosition[1], projectsPosition[0], projectsPosition[1], degree, true);
        setCurrentPlanet("projects");
      }
    }
  }, [props.home, props.about, props.contact, props.projects, props.resume, currentPlanet]);

  const animateRocketToPosition = (x1, y1, x2, y2, radius, clockwise, direction) => {
    const adjustedY1 = y1 + 5;
  
    gsap.to(rocketRef.current.position, {
      duration: 2,
      ease: "expo.in",
      y: `+=5`,
      onComplete: () => {
        const path = createArcPath(x1, adjustedY1, x2, y2, radius, clockwise);
        const rotation = clockwise ? 1.57 : -1.57;
        gsap.to(rocketRef.current.rotation, {
          duration: 2,
          ease: "expo.inOut",
          z: 0,
        });

        gsap.to(rocketRef.current.position, {
          duration: 5,
          ease: "expo.inOut",
          motionPath: {
            path: path,
            curviness: 1,
          },
        });
      },
    });
  };




  useFrame((state, delta) => {
    rocketPosition.setFromMatrixPosition(rocketRef.current.matrixWorld);
    state.camera.lookAt(rocketPosition);
    state.camera.rotation.x = 0;
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
