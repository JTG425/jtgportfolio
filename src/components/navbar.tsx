import '../styles/navbar.css'
import { AnimatePresence } from 'framer-motion'
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiNewspaper } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import animejs from 'animejs'
import { useEffect } from 'react';

function NavBar(props) {
  const setPage = props.setPage
  const showNav = props.showNav
  const pages = ["Home", "My Projects", "My Resume", "Contact Me"]
  const pageIcons = [<FaHome />, <FaQuestionCircle />, <GrProjects />, <HiNewspaper />, <MdEmail />]

  const toggleNav = () => {
    if (showNav) {
    animejs({
      targets: '.nav-link',
      translateX: [-100, 0],
      opacity: [0,1],
      duration: 250,
      easing: 'easeInOutSine',
      delay: animejs.stagger(100, {start: 200})
    })
  } else {
    animejs({
      targets: '.nav-link',
      translateX: [0, -100],
      opacity: [1,0],
      duration: 250,
      easing: 'easeInOutSine',
      delay: animejs.stagger(100)
    })
  }
  }

  useEffect(() => {
    toggleNav()
  }, [showNav])
    

  return (
      <div className="navbar">
        <AnimatePresence>
          {pages.map((page, index) => (
            <button
              key={index}
              className="nav-link"
              onClick={() => setPage(page)}
            >
              {pageIcons[index]}
              {page}
            </button>
          ))}
        </AnimatePresence>
      </div>
  );
}

export default NavBar;
