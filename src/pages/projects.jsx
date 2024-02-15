import '../styles/projects.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Theater from '../projectComponents/fgb';
import Capstone from '../projectComponents/capstone';

const cardVariants = {
  open: {
    opacity: 1,
    zIndex: 2,
    height: "50vh", // Change depending on # Of Items.
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
    }
  },
  closed: {
    scale: 1,
    zIndex: 0,
    transition: {
      type: 'spring',
    }
  }
}

const containerVariants = {
  open: {
    opacity: 1,
    zIndex: 2,
    height: "50vh", // Change depending on # Of Items.
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
    }
  },
  closed: {
    scale: 1,
    zIndex: 0,
    transition: {
      type: 'spring',
    }
  }
}

function Projects() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);


  /* Use Component Names For Items */
  const menuItems = [
    "Theater",
    "Capstone",
  ];

  /* Displayed Text */
  const menuItemNames = [
    "FGB Theaters Website Development",
    "ECE Capstone Design Project",
  ];
  return (
    <div className='projects'>
        <h1>My Projects</h1>
      {menuItems.map((item, index) => {
        return (
          <motion.div
            className='project-container'
            animate={show && selected === index ? 'open' : 'closed'}
            variants={containerVariants}

            key={index}
          >
            <div>
              <AnimatePresence>
                <motion.div
                  className='project'
                  animate={show && selected === index ? 'open' : 'closed'}
                  whileHover={() => {
                    if (!show) {
                      return { y: -10 };
                    }
                  }}
                  variants={cardVariants}
                  onClick={() => {
                    setShow(!show);
                    setSelected(index);
                  }}
                  exit={{ opacity: 0 }}
                  key={`content-${index}`}
                >
                  {show && selected === index ? (
                    <div>
                      <h2>{menuItemNames[index]}</h2>
                      {/* Trying To Make This Dynamic */}
                      {index === 0 ? <Theater /> : <Capstone />}
                    </div>
                  ) : (
                    <h2>{menuItemNames[index]}</h2>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )
      })}
    </div>
  );
}

export default Projects;