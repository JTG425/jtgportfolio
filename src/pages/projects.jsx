import '../styles/projects.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Theater from '../projectComponents/fgb';
import Capstone from '../projectComponents/capstone';
import ComponentLibrary from '../projectComponents/componentLibrary';

const cardVariants = {
  open: {
    opacity: 1,
    zIndex: 2,
    height: "550px", // Change depending on # Of Items.
    paddingBottom: "10px",
    scale: 1,
    transition: {
      duration: 1,
    }
  },
  closed: {
    scale: 1,
    zIndex: 0,
    height: "50px", // Change depending on # Of Items.
    transition: {
      duration: 1,
    }
  }
}

const containerVariants = {
  open: {
    opacity: 1,
    zIndex: 2,
    height: "550px", // Change depending on # Of Items.
    scale: 1,
    transition: {
      duration: 1,
    }
  },
  closed: {
    scale: 1,
    zIndex: 0,
    height: "50px", // Change depending on # Of Items.
    transition: {
      duration: 1,
    }
  }
}

const headerVariants = {
  open: {
    marginTop: "10px",
    background: "linear-gradient(0deg, rgba(255, 255, 255, 0.2) 12%, rgba(255, 255, 255, 0.1) 77%)",
  },
  closed: {
    background: "rgba(255, 255, 255, 0)",
  }
}

function Projects() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);


  /* Use Component Names For Items */
  const menuItems = [
    "Theater",
    "Capstone",
    "ComponentLibrary"
  ];

  /* Displayed Text */
  const menuItemNames = [
    "FGB Theaters Website Development",
    "ECE Capstone Design Project",
    "Component Library Development"
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
                  // whileHover={() => {
                  //   if (!show) {
                  //     return { y: -5 };
                  //   }
                  // }}
                  variants={cardVariants}
                  exit={{ opacity: 0 }}
                  key={`content-${index}`}
                >
                  {show && selected === index ? (
                    <div>
                      <motion.div
                        className='project-open'
                        animate={show && selected === index ? 'open' : 'closed'}
                        variants={headerVariants}
                        onClick={() => {
                          setShow(!show);
                          setSelected(index);
                        }}
                        key={`content-header-${index}`}
                      >
                        <h2>{menuItemNames[index]}</h2>
                      </motion.div>

                      {/* Trying To Make This Dynamic */}
                      {index === 0 ? <Theater /> : index === 1 ? <Capstone /> : <ComponentLibrary />}
                    </div>
                  ) : (
                    <motion.div
                      className='project-open'
                      animate={show && selected === index ? 'open' : 'closed'}
                      variants={headerVariants}
                      onClick={() => {
                        setShow(!show);
                        setSelected(index);
                      }}
                    >
                      <h2>{menuItemNames[index]}</h2>
                    </motion.div>
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