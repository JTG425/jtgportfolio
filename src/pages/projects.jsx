import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TheaterHidden from '../projectComponents/fgbhidden';
import Theater from '../projectComponents/fgb';
import Capstone from '../projectComponents/capstone';
import CapstoneHidden from '../projectComponents/capstonehidden';
import '../styles/projects.css';

function Projects() {
  const [project, setProject] = useState(null);
  const [showProject, setShowProject] = useState(false);

  function handleProjectClick(projectNumber) {
    setProject(projectNumber);
    setShowProject(true);
  }

  const showProjectVariants = {
    show: {
      opacity: 1,
      height: "80vh",
      y: "-17vh",
      transition: {
        duration: 1,
        type: "spring",
      }
    },
    hide: {
      y: 0,
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
      }
    },
  }



  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p>Click A Card For More Information</p>
      <AnimatePresence>
        <motion.div
          className='projects-container'
        >
          <motion.div
            key="theater"
            initial="hide"
            className='project'
            animate={showProject && project === 1 ? "show" : "hide"}
            variants={showProjectVariants}
            onClick={() => {
              setShowProject(!showProject)
              setProject(1)
            }}
          >
            {showProject && project === 1 ? (
              <Theater />
            ) : (
              <TheaterHidden
                key="fgbhidden"
              />
            )}
          </motion.div>
        </motion.div>
        <motion.div
          className='projects-container'
        >
          <motion.div
            key="capstone"
            initial="hide"
            className='project'
            animate={showProject && project === 2 ? "show" : "hide"}
            variants={showProjectVariants}
            onClick={() => {
              setShowProject(!showProject)
              setProject(2)
            }}
          >
            {showProject && project === 2 ? (
              <Capstone />
            ) : (
              <CapstoneHidden
                key="fgbhidden"
              />
            )}
          </motion.div>
        </motion.div>
        <motion.div
          className='projects-container'
        >
          <motion.div
            key="capstone"
            initial="hide"
            className='project'
            animate={showProject && project === 3 ? "show" : "hide"}
            variants={showProjectVariants}
            onClick={() => {
              setShowProject(!showProject)
              setProject(3)
            }}
          >
            {showProject && project === 3 ? (
              <Capstone />
            ) : (
              <CapstoneHidden
                key="fgbhidden"
              />
            )}
          </motion.div>
        </motion.div>
        <motion.div
          className='projects-container'
        >
          <motion.div
            key="capstone"
            initial="hide"
            className='project'
            animate={showProject && project === 4 ? "show" : "hide"}
            variants={showProjectVariants}
            onClick={() => {
              setShowProject(!showProject)
              setProject(4)
            }}
          >
            {showProject && project === 4 ? (
              <Capstone />
            ) : (
              <CapstoneHidden
                key="fgbhidden"
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Projects;
