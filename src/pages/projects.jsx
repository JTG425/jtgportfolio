import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/projects.css'


function Projects() {
  const [project, setProject] = useState(0)

  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 2,
        when: "afterChildren",
      }
    },
    shown: {
      opacity: 1,
      transition: {
        duration: 5,
        staggerChildren: 0.5,
        when: "beforeChildren",
      }
    }
  }

  const projectVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      height: '25vh',
      transition: {
        duration: 2,
      }
    }
  }

  return (
    <div className="Home">
      <h1>My Projects</h1>
      <AnimatePresence>
        <motion.div
          className='projects-container'
          variants={containerVariants}
          initial="hidden"
          animate="shown"
          exit="hidden"
        >
          <motion.div
            className='project'
            variants={projectVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setProject(1)}
          >
            <h2>FGB Theaters Website Development</h2>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/JTG425/jtgportfolio"
              target="_blank"
            >
              Github
            </motion.a>
            <p>Project 1 Description</p>
          </motion.div>


          <motion.div
            className='project'
            variants={projectVariants}
          >
            <h2>Capstone HMI Development</h2>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/JTG425/jtgportfolio"
              target="_blank"
            >
              Github
            </motion.a>
            <p>Project 2 Description</p>
          </motion.div>

          <motion.div
            className='project'
            variants={projectVariants}
          >
            <h2>This Website</h2>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/JTG425/jtgportfolio"
              target="_blank"
            >
              Github
            </motion.a>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>

  )
}




export default Projects;
