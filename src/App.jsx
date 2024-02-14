import React, { Suspense, useState, useRef, useEffect } from 'react'
//eslint-disable-next-line
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
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
import Stars from './components/stars'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Resume from './pages/resume'



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
  const [cx, setCX] = useState(0);
  const [cy, setCY] = useState(0);
  const [cz, setCZ] = useState(0);
  const [r, setR] = useState(0);
  //eslint-disable-next-line
  const homePosition = new THREE.Vector3(0, -10.35, 0);
  const rocketRef = useRef();
  const resumeRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const projectsRef = useRef();
  const homeRef = useRef();

  //eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState("home"); // Track the current page
  const [expanded, setExpanded] = useState(false);

  const loadVariants = {
    fadein: {
      opacity: 1,
    },
    fadeout: {
      opacity: 0,
      zIndex: -1,
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
      height: "10vh",
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    },
    expand: {
      height: "fit-content",
      transition: {
        duration: 3,
        ease: "easeInOut",
      }
    }

  }

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  const numStars = 2000;


  /* Shrink / Expand Timing */
  useEffect(() => {
    setTimeout(() => {
      setExpanded(true);
    }, 3000);
  }, [expanded]);

  useEffect(() => {
    setCX(Array.from({ length: numStars }, () => Math.floor(Math.random() * 1001) - 500));
    setCY(Array.from({ length: numStars }, () => Math.floor(Math.random() * 1001) - 500));
    setCZ(Array.from({ length: numStars }, () => Math.floor(Math.random() * 201) - 100));
    setR(Array.from({ length: numStars }, () => Math.random() * 0.05));
    setTimeout(() => {
      setTransition(true);
    }, 3000);
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
      <AnimatePresence>
        <motion.div
          className='loading'
          initial={{ opacity: 1 }}
          animate={transition ? "fadeout" : "fadein"}
          variants={loadVariants}
        >
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              variants={draw}
              custom={1}
            >
            </motion.circle>
          </motion.svg>
          <p className='loading-text'>Loading</p>
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        key="dropdown"
        animate={transition ? "fadein" : "fadeout"}
        variants={loadVariants}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
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
      <Canvas className='canvas'>
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
            enableZoom={false}
            minDistance={20}
            maxDistance={200}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI - Math.PI / 2}
            maxAzimuthAngle={0}
            minAzimuthAngle={0}
          />
          <AboutModel position={[200, -10.35, 0]} />
          <ContactModel position={[-200, -10.35, 0]} />
          <ProjectsModel position={[400, -10.35, 0]} />
          <ResumeModel position={[-400, -8, 0]} />
          {Array.from({ length: numStars }, (_, index) => (
            <Stars r={r} position={[cx[index], cz[index], cy[index]]} scale={0.1} />
          ))}

          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div >
  )
}




export default App;
