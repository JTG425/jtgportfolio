import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/home.css'



function Home() {
  const stackLogos = [
    'https://i.imgur.com/FsACRhX.png', // React.js
    'https://i.imgur.com/vlOBr4X.png', // Framer Motion
    'https://i.imgur.com/jNNE26t.png', // Node.js
    'https://i.imgur.com/u3y6ijb.png', // Three.js
    'https://i.imgur.com/ylyoerF.png', // HTML5
    'https://i.imgur.com/XFReta1.png', // CSS3
    'https://i.imgur.com/QurGWvg.png', // Talwind CSS

  ]

  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }

  const parentstackVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        delay: 6,
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
      transition: {
        duration: 1,
      }
    }
  }



  return (

    <motion.div
      className="Home">
      <TypeAnimation
        className='type-animation'
        sequence={[
          3000,
          'Hello, My Name is Joshua',
        ]}
        wrapper='h1'
        cursor={false}
        speed={50}
        repeat={1}
      />
      <TypeAnimation
        className='type-animation'
        sequence={[
          5000,
          'An Aspiring Web Developer',
        ]}
        wrapper='h2'
        cursor={false}
        speed={50}
        repeat={1}
      >
      </TypeAnimation>
      <AnimatePresence>
          <motion.div
            className='tech-stack'
            initial={'hidden'}
            animate={'shown'}
            variants={parentstackVariants}
          >
            {stackLogos.map((logo, index) => {
              return (
                <motion.img
                  key={index}
                  src={logo}
                  variants={stackItemsVariants}
                  alt='tech-stack'
                  className='tech-stack-logo'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              )
            })}
          </motion.div>
      </AnimatePresence >
    </motion.div >
  )
}




export default Home;
