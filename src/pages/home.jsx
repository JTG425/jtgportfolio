
import React, { useState } from 'react'
import anime from "animejs";
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import '../styles/home.css'


function Home() {

  const handleStackLogoClick = (e, index) => {
    anime({
      targets: '.tech-stack-logo-div',
      scale: [
        { value: 1.01, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.02, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.03, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.04, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.05, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.06, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.07, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.08, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.09, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.10, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.09, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.08, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.07, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.06, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.05, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.04, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.03, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.02, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1.01, easing: 'spring(1, 80, 10, 0)', duration: 50 },
        { value: 1, easing: 'spring(1, 80, 10, 0)', duration: 50 },
      ],
      delay: anime.stagger(250, { from: index })
    });
  }





  const stackLogos = [
    'https://i.imgur.com/FsACRhX.png', // React.js
    'https://i.imgur.com/vlOBr4X.png', // Framer Motion
    'https://i.imgur.com/jNNE26t.png', // Node.js
    'https://i.imgur.com/u3y6ijb.png', // Three.js
    'https://i.imgur.com/ylyoerF.png', // HTML5
    'https://i.imgur.com/XFReta1.png', // CSS3
    'https://i.imgur.com/QurGWvg.png', // Talwind CSS
  ]


  const parentstackVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        delay: 3,
        when: 'beforeChildren',
        staggerChildren: 0.25,
        duration: 1,
      }
    }
  }

  const stackItemsVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
    },
    hovered: {
    }
  }


  return (

    <motion.div
      className="Home"
      key="home-container-key"
    >
      <h1>Hello, My Name Is Joshua</h1>
      <h2>An Aspiring Web Developer</h2>
      <AnimatePresence>
        <motion.div
          className='tech-stack'
          initial='hidden'
          animate='shown'
          key="home-tech-stack-key"
          variants={parentstackVariants}
        >
          {stackLogos.map((logo, index) => {
            return (
              <motion.div
                className='tech-stack-logo-div'
                key={`home-tech-stack-logo-div-${index}`}
                onClick={(e) => handleStackLogoClick(e, index)}
                variants={stackItemsVariants}
              >
                <motion.img
                  key={`home-tech-stack-logo-${index}`}
                  src={logo}
                  draggable='false'
                  alt='tech-stack'
                  whileTap={{ scale: 0.9 }}
                  className='tech-stack-logo'
                />
              </motion.div>
            )
          })}
        </motion.div>
        <div>
          <p>Site Still Under Construction</p>
        </div>
      </AnimatePresence >
    </motion.div >
  )
}




export default Home;