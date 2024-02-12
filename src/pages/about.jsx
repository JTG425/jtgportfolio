import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/about.css'



function About() {

  return (
    <div className="about">
      <h1>Some Background</h1>
      <motion.div
        className='about-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='card1'
        >
          <motion.img
            className='portrait'
            src="https://i.imgur.com/7nSCuwh.jpg"
            alt="Me"
          />
          <p>My name is Joshua Golonka, I was born and raised in Montpelier, VT</p>

        </motion.div>




      </motion.div>
    </div>

  )
}




export default About;
