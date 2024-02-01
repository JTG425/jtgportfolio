import React, { useRef, useEffect, useState } from "react";
import * as THREE from 'three'
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Timeline } from "gsap/gsap-core";

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
  const { home, about, contact, projects, resume} = props;
  console.log(home, about, contact, projects, resume)

  const rocketRef = useRef();
  const camRef = useRef();
  const cameraPosition = new THREE.Vector3(0, 0, 40);
  const rocketPosition = new THREE.Vector3(0, 0, 0);
  const homePosition = [0, 0];
  const aboutPosition = [200, 0];
  const contactPosition = [-200, 0];
  const projectsPosition = [400, 0];
  const resumePosition = [-400, 0];
  const degree1 = 90;
  const degree2 = 180;
  const degree3 = 180;
  const degree4 = 180;
  //x1, y1, x2, y2, radius, clockwise, direction

  const navigateTo = (destination, startPosition, endPosition, degree, direction, d) => {
    setDestination(destination);
    animateRocketToPosition(startPosition[0], startPosition[1], endPosition[0], endPosition[1], degree, true, direction, d);
    setCurrentPlanet(destination);
  };


  useEffect(() => {
    try {
    switch (currentPlanet) {
      case "home":
        if (about) navigateTo("about", homePosition, aboutPosition, degree1, "right", 1);
        else if (contact) navigateTo("contact", homePosition, contactPosition, degree1, "left", 1);
        else if (projects) navigateTo("projects", homePosition, projectsPosition, degree2, "right", 2);
        else if (resume) navigateTo("resume", homePosition, resumePosition, degree2, "left", 2);
        break;
      case "about":
        if (home) navigateTo("home", aboutPosition, homePosition, degree1, "left", 1);
        else if (contact) navigateTo("contact", aboutPosition, contactPosition, degree2, "left", 2);
        else if (projects) navigateTo("projects", aboutPosition, projectsPosition, degree1, "right", 1);
        else if (resume) navigateTo("resume", aboutPosition, resumePosition, degree3, "left", 3);
        break;
      case "contact":
        if (home) navigateTo("home", contactPosition, homePosition, degree1, "right", 1);
        else if (about) navigateTo("about", contactPosition, aboutPosition, degree2, "right", 2);
        else if (projects) navigateTo("projects", contactPosition, projectsPosition, degree3, "right", 3);
        else if (resume) navigateTo("resume", contactPosition, resumePosition, degree1, "left", 1);
        break;
      case "projects":
        if (home) navigateTo("home", projectsPosition, homePosition, degree2, "left", 2);
        else if (about) navigateTo("about", projectsPosition, aboutPosition, degree1,"left", 1);
        else if (contact) navigateTo("contact", projectsPosition, contactPosition, degree3, "left", 3);
        else if (resume) navigateTo("resume", projectsPosition, resumePosition, degree4, "left", 4);
        break;
      case "resume":
        if (home) navigateTo("home", resumePosition, homePosition, degree2, "right", 2);
        else if (about) navigateTo("about", resumePosition, aboutPosition, degree3, "right", 3);
        else if (contact) navigateTo("contact", resumePosition, contactPosition, degree1, "right", 1);
        else if (projects) navigateTo("projects", resumePosition, projectsPosition, degree4, "right", 4);
        break;
      default:
        break;
    }
    } catch (error) {
      console.log(error)
    }
  }, [home, about, contact, projects, resume, currentPlanet]);

  const animateRocketToPosition = (x1, y1, x2, y2, radius, clockwise, direction, distance) => {
    const adjustedY1 = y1 + 5;
    const adjustedX1 = direction === "left" ? x1 - 5 : x1 + 5;
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    const path = createArcPath(adjustedX1, adjustedY1, x2, y2, radius, clockwise);
    var rotation = direction === "left" ? 1.57 : -1.57;



    tl.to(rocketRef.current.position, {
      duration: 2,
      ease: "expo.in",
      y: `+=5`,
      x: `+=${direction === "left" ? -5 : 5}`
    });

    // Rotate Toward Destination
    tl.to(rocketRef.current.rotation, {
      duration: 3,
      ease: "ease.in",
      z: rotation,
    }, 1);

    // Travel To Destination
    tl.to(rocketRef.current.position, {
      duration: 5,
      ease: "expoScale(0.5,7,none)",
      motionPath: {
        path: path,
        curviness: 1,
      },
    }, 2);

    // Rotate Away From Destination (For Landing)
    tl.to(rocketRef.current.rotation, {
      duration: 3,
      ease: "ease.inOut",
      z: 0,
    }, 3);
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
