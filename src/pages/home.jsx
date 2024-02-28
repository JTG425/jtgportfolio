
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import '../styles/home.css'

//https://codesandbox.io/p/sandbox/framer-motion-mouse-position-2b4sd?file=%2Fsrc%2FApp.js%3A40%2C1-69%2C2
function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  const startX = (position.x - offset.left) / offset.width;
  const startY = (position.y - offset.top) / offset.height;

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    // width: offset.width,
    // height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2) - 0.5,
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2) - 0.5,
    startX: startX,
    startY: startY,
  };
}

function Home() {
  const [i, setI] = useState(-1);
  const [wave, setWave] = useState(false);
  const imgRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const stackLogos = [
    'https://i.imgur.com/FsACRhX.png', // React.js
    'https://i.imgur.com/vlOBr4X.png', // Framer Motion
    'https://i.imgur.com/jNNE26t.png', // Node.js
    'https://i.imgur.com/u3y6ijb.png', // Three.js
    'https://i.imgur.com/ylyoerF.png', // HTML5
    'https://i.imgur.com/XFReta1.png', // CSS3
    'https://i.imgur.com/QurGWvg.png', // Talwind CSS
  ]


  const handleMouseMove = e => {
    if (imgRefs[i] === undefined) return;
    if (wave) return;
    const mousePos = getRelativeCoordinates(e, imgRefs[i].current);
    imgRefs[i].current.style.transform = `translate(${mousePos.centerX}px, ${mousePos.centerY}px)`;
  };

  const handleClickWave = () => {
    if (i < 0 || i >= imgRefs.length) return; // Check if 'i' is within bounds
    const widthX = 0;
    const heightY = -50;
    const slightDropY = 20; // Slightly lower position before going back

    for (let j = 0; j < imgRefs.length; j++) {
      const delay = Math.abs(j - i) * 150; // Calculate delay based on distance from clicked ref 'i'

      setTimeout(() => {
        if (imgRefs[j].current) { // Check if ref exists
          imgRefs[j].current.style.transform = `translate(${widthX}px, ${heightY}px)`;
          imgRefs[j].current.style.transition = 'transform 0.5s ease-in-out';

          const handleTransitionEnd = () => {
            imgRefs[j].current.style.transform = `translate(${widthX}px, ${slightDropY}px)`;
            imgRefs[j].current.style.transition = 'transform 0.75s ease-in-out';

            const handleSlightDropEnd = () => {
              imgRefs[j].current.style.transform = ''; // Revert to original position
              imgRefs[j].current.removeEventListener('transitionend', handleSlightDropEnd); // Clean up the event listener for slight drop
            };

            imgRefs[j].current.addEventListener('transitionend', handleSlightDropEnd);
            imgRefs[j].current.removeEventListener('transitionend', handleTransitionEnd); // Clean up the event listener for initial transition
          };

          imgRefs[j].current.addEventListener('transitionend', handleTransitionEnd);
        }
      }, delay);
    }

    setTimeout(() => {
      setWave(false); // Assuming 'setWave' is a state setter to control the wave animation
    }, imgRefs.length * 150 + 500); // Wait for the last animation to finish + 0.5s buffer
  };


  const handleMouseLeave = () => {
    setI(-1);
    for (let i = 0; i < imgRefs.length; i++) {
      imgRefs[i].current.style.background = '';
    }
  };

  const parentstackVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        delay: 4.75,
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
                ref={imgRefs[index]}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
                onHoverStart={() => setI(index)}
                //onMouseMove={handleMouseMove}
                //onMouseLeave={handleMouseLeave}
                variants={stackItemsVariants}
              >
                <motion.img
                  key={`home-tech-stack-logo-${index}`}
                  src={logo}
                  draggable='false'
                  alt='tech-stack'
                  className='tech-stack-logo'
                  onTap={handleClickWave}
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