import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/resume.css'

function Resume() {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="Home">
      <motion.div
        className="resume-container"
      >
        <motion.div
          className="resume"
        >
          <motion.div
            className='resume-header'
          >
            <h2>Joshua Golonka</h2>
            <p>Columbus, OH, 43201</p>
          </motion.div>

          <motion.div
            className='resume-content'
          >
            <h3>Education</h3>
            <span className='education-date'>
              <p><b>Bachelor of Science: Electrical and Computer Engineering</b></p>
              <p>Expected in May 2024</p>
            </span>
            <span className='education-location'>
              <p>The Ohio State University</p>
              <p>Columbus, OH</p>
            </span>
          </motion.div>

          <motion.div
            className='resume-content'
          >
            <h3>Professional Summary</h3>
            <span className='summary'>
              <p>
                Ambitious Electrical and Computer Engineering student pursuing a Bachelor of Science degree, with a
                minor in Creative Writing. Extensive experience collaborating with teammates to design and implement
                robust projects. Meticulous and detail-oriented with excellent observational, organizational, and
                communication skills. Looking for job opportunities beginning in May 2024, particularly within front end
                software development
              </p>
            </span>
          </motion.div>

          <motion.div
            className='resume-content'
          >
            <h3>Technical Qualifications</h3>
            <span className='qualifications'>
              <p>
                <ul>
                  <li>
                    Programming languages: Proficient in HTML, CSS, JavaScript, React, Node, Java, C, C++,
                    Python, and VHDL, demonstrating versatile coding capabilities.
                  </li>
                  <li>
                    Adept at applying software engineering principles in real-world scenarios.
                  </li>
                  <li>
                    Skilled with constructed circuits, continuous and discrete signals and systems, microcontroller-
                    based systems, electronic schematics, filter implementation, and frequency domain analysis.
                  </li>
                  <li>
                    Coursework: Software I, II; Fund. of Engineering I, II; Intro Digital Logic; Fund. of Digital Sys
                    Design; Eng. Statistics; Intro Electronics/Lab; Adv. Digital Design; Eng. Econ, Ethics; Comp
                    Arch/Design, Systems and Signals, Intro Cybersecurity, Parallel Computing.
                  </li>
                </ul>
              </p>
            </span>
          </motion.div>

          <motion.div
            className='resume-content'
          >
            <h3>Academic Engineering Projects</h3>
            <span className='resume-projects'>
              <p>
                <ul>
                  <p><b>Simon Game Design Project, August-December 2021</b></p>
                  <li>
                    Programmed DE2 using VHDL, Quartus Prime, and ModelSIM software to develop a working
                    Simon Game with four colored buttons.
                  </li>
                  <li>
                    Required weekly and thorough lab reports documenting progress made throughout the semester.
                  </li>
                  <p>---</p>
                  <p><b>ECE Capstone Gas Sensor Calibration Chamber, August 2023 – Present</b></p>
                  <li>
                    Team Member for senior capstone project working with Marathon Gas Company to develop a
                    containment chamber for harmful gases.
                  </li>
                  <li>
                  Tasked with designing and implementing the Human Machine Interface to control the system.
                  </li>
                </ul>
              </p>
            </span>
          </motion.div>

        </motion.div>

      </motion.div>
    </div>

  )
}




export default Resume;
