import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/home.css'



function Home() {
  const [show, setShow] = useState(true);

  const stackLogos = [
    'https://i.imgur.com/FsACRhX.png', // React.js
    'https://i.imgur.com/vlOBr4X.png', // Framer Motion
    'https://i.imgur.com/jNNE26t.png', // Node.js
    'https://i.imgur.com/u3y6ijb.png', // Three.js
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
        repeat={0}
        onComplete={() => setShow(true)}
      >
      </TypeAnimation>
      <motion.div
        className='tech-stack'
      >
        {stackLogos.map((logo, index) => {
          return (
            <motion.img
              key={index}
              src={logo}
              alt='tech-stack'
              className='tech-stack-logo'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          )
        })}


      </motion.div>
    </motion.div>
  )
}




export default Home;
