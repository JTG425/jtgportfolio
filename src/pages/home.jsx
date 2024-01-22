import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { motion, AnimatePresence } from 'framer-motion';



function Home() {
  const [show, setShow] = useState(true);

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
    <div className="Home">
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
      <p>Tech Stack</p>
    </div>

  )
}




export default Home;
