import React, { Suspense, useState, useRef, useEffect } from 'react'
//eslint-disable-next-line
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
//eslint-disable-next-line
import { motion as m } from 'framer-motion-3d' //3d Motion
import * as THREE from 'three'
import "./App.css"
import Rocket from './models/rocket'
import AboutModel from './models/aboutmePlanet'
import ContactModel from './models/contactPlanet'
import HomeModel from './models/homePlanet'
import ProjectsModel from './models/projectsPlanet'
import ResumeModel from './models/resumePlanet'
import Stars from './components/stars'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Resume from './pages/resume'



function App() {
  //eslint-disable-next-line
  const [launch, setLaunch] = useState(false)
  const [pageLoad, setPageLoad] = useState(false)
  const [transition, setTransition] = useState(true)
  const [home, setHome] = useState(true)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)
  const [projects, setProjects] = useState(false)
  const [resume, setResume] = useState(false)
  const [cx, setCX] = useState(0);
  const [cy, setCY] = useState(0);
  const [cz, setCZ] = useState(0);
  const [r, setR] = useState(0);
  //eslint-disable-next-line
  const homePosition = new THREE.Vector3(0, -10.35, 0);
  const rocketRef = useRef();
  const [currentPage, setCurrentPage] = useState("home"); // Track the current page

  const pageVariants = {
    fadein: { opacity: 1 },
    fadeout: { opacity: 0 }
  }


  const numStars = 200;

  useEffect(() => {
    setCX(Array.from({ length: numStars }, () => Math.floor(Math.random() * 201) - 100));
    setCY(Array.from({ length: numStars }, () => Math.floor(Math.random() * 201) - 100));
    setCZ(Array.from({ length: numStars }, () => Math.floor(Math.random() * 201) - 100));
    setR(Array.from({ length: numStars }, () => Math.random() * 0.05));
  }, []);

  const handleButtonClick = (page) => {
    // Update current page and trigger fade-out animation
    setCurrentPage(page);
    setTransition(false);
    setTimeout(() => {
      // After 3 seconds, trigger fade-in animation with the proper page content
      setTransition(true);
    }, 3000);
  };

  return (
    <div className="App">
      <motion.div
        className='page'
        initial={{ opacity: 0 }}
        animate={transition ? "fadein" : "fadeout"}
        variants={pageVariants}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='navigation'
        >
          <motion.button
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='homeButton'
            onClick={() => {
              handleButtonClick("home");
              setHome(true)
              setAbout(false)
              setContact(false)
              setProjects(false)
              setResume(false)
            }}
          >
            <span className='button-text'>Home</span>
          </motion.button>
          <motion.button
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='aboutButton'
            onClick={() => {
              handleButtonClick("about");
              setLaunch(true)
              setAbout(true)
              setContact(false)
              setProjects(false)
              setResume(false)
              setHome(false)
            }}
          >
            <span className='button-text'>About Me</span>
          </motion.button>
          <motion.button
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='contactButton'
            onClick={() => {
              handleButtonClick("contact");
              setAbout(false)
              setContact(true)
              setProjects(false)
              setResume(false)
              setHome(false)
            }}
          >
            <span className='button-text'>Contact Me</span>
          </motion.button>
          <motion.button
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='projectsButton'
            onClick={() => {
              handleButtonClick("projects");
              setAbout(false)
              setContact(false)
              setProjects(true)
              setResume(false)
              setHome(false)
            }}
          >
            <span className='button-text'>My Projects</span>
          </motion.button>
          <motion.button
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='resumeButton'
            onClick={() => {
              handleButtonClick("resume");
              setAbout(false)
              setContact(false)
              setProjects(false)
              setResume(true)
              setHome(false)
            }}
          >
            <span className='button-text'>Resume</span>
          </motion.button>

        </motion.div>

        {home && <Home key="home" />}
          {about && <About key="about" />}
          {contact && <Contact key="contact" />}
          {projects && <Projects key="projects" />}
          {resume && <Resume key="resume" />}
      </motion.div>
      <Canvas className='canvas'>
        {/* <axesHelper args={[100]} /> */}
        <Suspense fallback={null}>
          <Rocket
            position={[0, 0, 0]}
            scale={0.5}
            ref={rocketRef}
            resume={resume}
            about={about}
            contact={contact}
            projects={projects}
            home={home}
          />
          <HomeModel position={[0, -10.35, 0]} />
          <OrbitControls
            enableZoom={true}
            minDistance={20}
            maxDistance={200}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 2}
          />
          <AboutModel position={[50, 25, -25]} />
          <ContactModel position={[-50, -10, 40]} />
          <ProjectsModel position={[50, -25, 40]} />
          <ResumeModel position={[-65, -25, -50]} />
          {Array.from({ length: numStars }, (_, index) => (
            <Stars r={r} position={[cx[index], cz[index], cy[index]]} scale={0.1} />
          ))}

          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  )
}




export default App;
