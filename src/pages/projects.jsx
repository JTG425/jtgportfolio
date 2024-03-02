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
    height: "50vh", // Change depending on # Of Items.
    paddingBottom: "10px",
    scale: 1,
    transition: {
      duration: 1,
    }
  },
  closed: {
    scale: 1,
    zIndex: 0,
    overflow: "hidden",
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
    height: "50vh", // Change depending on # Of Items.
    scale: 1,
    transition: {
      duration: 1,
    }
  },
  closed: {
    scale: 1,
    zIndex: 0,
    overflow: "hidden",
    height: "50px", // Change depending on # Of Items.
    transition: {
      duration: 1,
    }
  }
}

const headerVariants = {
  open: {
    marginTop: "10px",
  },
  closed: {
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
                  variants={cardVariants}
                  exit={{ opacity: 0 }}
                  key={`content-${index}`}
                >
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
                    {index === 0 ? <Theater projectIndex={index} /> : index === 1 ? <Capstone projectIndex={index} /> : <ComponentLibrary projectIndex={index} />}
                  </div>
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