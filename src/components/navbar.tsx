import "../styles/navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiNewspaper } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import Wave from 'react-wavify';

function NavBar(props) {
  const setPage = props.setPage;
  const showNav = props.showNav;
  const pages = ["Home", "About Me", "My Projects", "My Resume", "Contact Me"];
  const pageIcons = [
    <FaHome />,
    <FaQuestionCircle />,
    <GrProjects />,
    <HiNewspaper />,
    <MdEmail />,
  ];

  const navVariants = {
    open: {
      x: "40%",
      transition: {
        duration: 0.25,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    closed: {
      x: "200%",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const navButtonVariants = {
    closed: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.3,
      },
    },
    open: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1,
      },
    }),
  };


  return (
    <motion.div
      className="nav-container"
      initial="closed"
      animate={showNav ? "open" : "closed"}
      variants={navVariants}
    >
      <Wave fill='rgba(2,81,132,0.75)'
        paused={false}
        style={{ 
          display: 'flex',
          justifySelf: 'center',
          alignSelf: 'center',
          transform: 'rotate(270deg)',
          zIndex: '-1',
          width: '150vh',
          height: '600px',
        }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
      />
      <Wave fill='rgb(3, 112, 182, 0.75)'
        paused={false}
        style={{ 
          display: 'flex',
          transform: 'rotate(270deg)',
          zIndex: '-1',
          width: '150vh',
          height: '600px',
          justifySelf: 'center',
          alignSelf: 'center',
          marginTop: '-500px',
        }}
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.15,
          points: 5
        }}
      />
      <div className="navbar">
        <AnimatePresence>
          {showNav &&
            pages.map((page, index) => (
              <motion.button
                key={`nav-button-${index}`}
                className="nav-link"
                custom={index}
                initial="closed"
                animate="open"
                exit="closed"
                variants={navButtonVariants}
                onClick={() => setPage(page)}
              >
                {pageIcons[index]}
                {page}
              </motion.button>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default NavBar;
