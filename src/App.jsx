import React, { Suspense, useState, useRef, useEffect } from 'react'
//eslint-disable-next-line
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf' // Performance Monitor

//eslint-disable-next-line
import { motion as m } from 'framer-motion-3d' //3d Motion
import * as THREE from 'three'
import "./App.css"
import Dropdown from './components/dropdown'
import Rocket from './models/rocket'
import AboutModel from './models/aboutmePlanet'
import ContactModel from './models/contactPlanet'
import HomeModel from './models/homePlanet'
import ProjectsModel from './models/projectsPlanet'
import ResumeModel from './models/resumePlanet'
import SunModel from './models/sunModel'
import Stars from './components/stars'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Resume from './pages/resume'
import { set } from 'animejs'





function App() {
  //eslint-disable-next-line
  const [launch, setLaunch] = useState(false)
  //eslint-disable-next-line
  const [transition, setTransition] = useState(false)
  const [home, setHome] = useState(true)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)
  const [projects, setProjects] = useState(false)
  const [resume, setResume] = useState(false)
  const [quality, setQuality] = useState("Low")
  const [cx, setCX] = useState(0);
  const [cy, setCY] = useState(0);
  const [cz, setCZ] = useState(0);
  const [r, setR] = useState(0);
  //eslint-disable-next-line
  const homePosition = new THREE.Vector3(0, -10.35, 0);

  // Menu Button refs - Delete Later
  const resumeRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const projectsRef = useRef();
  const homeRef = useRef();

  // Planet Refs
  const homePlanetRef = useRef();
  const aboutPlanetRef = useRef();
  const contactPlanetRef = useRef();
  const projectsPlanetRef = useRef();
  const resumePlanetRef = useRef();


  //eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState("home"); // Track the current page
  const [expanded, setExpanded] = useState(false);

  const enableOrbit = false;





  const loadVariants = {
    fadein: {
      opacity: 1,
    },
    fadeout: {
      opacity: 0,
      transition: {
        duration: 3,
      }
    }
  }


  const pageVariants = {
    fadein: {
      opacity: 1,
      transition: {

      }
    },
    fadeout: {
      opacity: 0,
      zIndex: -1,
    }
  }

  const smoothPageVariants = {
    shrink: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    },
    expand: {
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      }
    }

  }


  const numStars = 500;


  /* Shrink / Expand Timing */
  useEffect(() => {
    setTimeout(() => {
      setExpanded(true);
    }, 2000);
  }, [expanded]);

  useEffect(() => {
    setCX(Array.from({ length: numStars }, () => Math.floor(Math.random() * 501) - 250));
    setCY(Array.from({ length: numStars }, () => Math.floor(Math.random() * 501) - 250));
    setCZ(Array.from({ length: numStars }, () => Math.floor(Math.random() * 201) - 100));
    setR(Array.from({ length: numStars }, () => Math.random() * 0.1));
    setTimeout(() => {
      setTransition(true);
    }, 1000);
    //eslint-disable-next-line
  }, []);


  const handleButtonClick = (page, currentPage) => {
    setCurrentPage(page);
    switch (page) {
      case "home":
        setHome(true)
        setAbout(false)
        setContact(false)
        setProjects(false)
        setResume(false)
        setExpanded(false)
        break;
      case "about":
        setHome(false)
        setAbout(true)
        setContact(false)
        setProjects(false)
        setResume(false)
        setExpanded(false)
        break;
      case "contact":
        setHome(false)
        setAbout(false)
        setContact(true)
        setProjects(false)
        setResume(false)
        break;
      case "projects":
        setHome(false)
        setAbout(false)
        setContact(false)
        setProjects(true)
        setResume(false)
        setExpanded(false)
        break;
      case "resume":
        setHome(false)
        setAbout(false)
        setContact(false)
        setProjects(false)
        setResume(true)
        setExpanded(false)
        break;
      default:
        break;
    }
  };


  return (
    <div className="App">
      <motion.button
        className='qualityToggle'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setQuality(quality === "High" ? "Low" : "High") }}
      >
        <span className='qbuttontext'>{quality} Quality</span>
      </motion.button>

      <Dropdown
        home={home}
        about={about}
        contact={contact}
        projects={projects}
        resume={resume}
        setHome={setHome}
        setAbout={setAbout}
        setContact={setContact}
        setProjects={setProjects}
        setResume={setResume}
        currentPage={currentPage}
        expanded={expanded}
        setExpanded={setExpanded}
        handleButtonClick={handleButtonClick}
      />
      <motion.div
        className='pagebackground'
        initial={{ opacity: 1 }}
        animate={expanded ? "expand" : "shrink"}
        variants={smoothPageVariants}
      >
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
              whileTap={{ scale: 0.9 }}
              className='resumeButton'
              ref={resumeRef}
              whileHover={{
                scale: 1.1,
              }}
              onClick={() => {
                handleButtonClick("resume", currentPage);
                setExpanded(false);
              }}
            >
              <span className='button-text'>Resume</span>
            </motion.button>
            <motion.button
              initial={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              className='contactButton'
              ref={contactRef}
              whileHover={{
                scale: 1.1,
              }}
              onClick={() => {
                handleButtonClick("contact", currentPage);
                setExpanded(false);
              }}
            >
              <span className='button-text'>Contact Me</span>
            </motion.button>
            <motion.button
              initial={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              className='homeButton'
              ref={homeRef}
              whileHover={{
                scale: 1.1,
              }}
              onClick={() => {
                handleButtonClick("home", currentPage);
                setExpanded(false);
              }}
            >
              <span className='button-text'>Home</span>
            </motion.button>
            <motion.button
              initial={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              className='aboutButton'
              ref={aboutRef}
              whileHover={{
                scale: 1.1,
              }}
              onClick={() => {
                handleButtonClick("about", currentPage);
                setExpanded(false);
              }}
            >
              <span className='button-text'>About Me</span>
            </motion.button>
            <motion.button
              initial={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              className='projectsButton'
              ref={projectsRef}
              whileHover={{
                scale: 1.1,
              }}
              onClick={() => {
                handleButtonClick("projects", currentPage);
                setExpanded(false);
              }}
            >
              <span className='button-text'>My Projects</span>
            </motion.button>
          </motion.div>
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {home && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ...(about || contact || projects || resume ? { delay: 1.5 } : {}),
                }}
                exit={{ opacity: 0 }}
              >
                <Home />
              </motion.div>
            )}
            {about && (
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ...(home || resume || contact || projects ? { delay: 1.5 } : {}),
                }}
                exit={{ opacity: 0 }}
              >
                <About />
              </motion.div>
            )}
            {contact && (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ...(home || resume || about || projects ? { delay: 1.5 } : {}),
                }}
                exit={{ opacity: 0 }}
              >
                <Contact />
              </motion.div>
            )}
            {projects && (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ...(home || resume || about || contact ? { delay: 1.5 } : {}),
                }}
                exit={{ opacity: 0 }}
              >
                <Projects />
              </motion.div>
            )}
            {resume && (
              <motion.div
                key="resume"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ...(home || projects || about || contact ? { delay: 1.5 } : {}),
                }}
                exit={{ opacity: 0 }}
              >
                <Resume />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <motion.div
        className='scene'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Canvas className='canvas'>
          <Suspense fallback={null}>
            <OrbitControls
              enableZoom={true}
              minDistance={20}
              maxDistance={1000}
            />
            <Perf className="perf" deepAnalyze={true} />
            <Rocket
              position={[0, 0, 100]}
              scale={0.5}
              resume={resume}
              about={about}
              contact={contact}
              projects={projects}
              home={home}
              homeRef={homePlanetRef}
              aboutRef={aboutPlanetRef}
              contactRef={contactPlanetRef}
              projectsRef={projectsPlanetRef}
              resumeRef={resumePlanetRef}
            />
            {/* Sun, Reusing About */}
            <SunModel position={[0, 0, 0]} scale={3} />


            <HomeModel position={[0, -10.35, 100]} orbitRadius={100} initialAngle={270} enableOrbit={enableOrbit} />
            <AboutModel position={[-175, -10.35, -100]} orbitRadius={175} initialAngle={180} enableOrbit={enableOrbit} />
            <ContactModel position={[0, -10.35, -250]} orbitRadius={250} initialAngle={90} enableOrbit={enableOrbit} />
            <ProjectsModel position={[325, -10.35, 0]} orbitRadius={325} initialAngle={0} enableOrbit={enableOrbit} />
            <ResumeModel position={[100, -10.35, 400]} orbitRadius={400} initialAngle={270} enableOrbit={enableOrbit} />
            {/* {Array.from({ length: numStars }, (_, index) => (
            <Stars key={`star-${cx[index]}-${cy[index]}-${cz[index]}`} r={r} position={[cx[index], cz[index], cy[index]]} scale={r[index]} />
          ))} */}
            {quality === "High" && (
              <EffectComposer>
                <Bloom
                  intensity={0.75}
                  luminanceThreshold={0.5}
                  luminanceSmoothing={0.3}
                  exposure={1.5}
                  radius={1}
                />
                <ToneMapping
                  adaptive={true}
                  averageLuminance={0.5}
                  middleGrey={0.25}
                  maxLuminance={16.0}
                  adaptationRate={1.0}
                ></ToneMapping>
              </EffectComposer>
            ) || (
                <EffectComposer>
                  <Bloom
                    intensity={0}
                    luminanceThreshold={0}
                    luminanceSmoothing={0}
                    exposure={0}
                    radius={0}
                  />
                </EffectComposer>
              )}
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </motion.div>
    </div >
  )
}




export default App;
