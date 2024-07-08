import '../styles/navbar.css'
import {motion, AnimatePresence } from 'framer-motion'
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiNewspaper } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

function NavBar(props) {
  const setPage = props.setPage
  const showNav = props.showNav
  const pages = ["Home", "About Me", "My Projects", "My Resume", "Contact Me"]
  const pageIcons = [<FaHome />, <FaQuestionCircle />, <GrProjects />, <HiNewspaper />, <MdEmail />]


    

  return (
      <div className="navbar">
        <AnimatePresence mode='popLayout'>
          {pages.map((page, index) => (
            <motion.button
              key={`nav-button-${index}`}
              className="nav-link"
              initial={{ opacity: 0 }}
              animate={showNav ? { opacity: 1 } : { opacity: 0 }}
              onClick={() => setPage(page)}
            >
              {pageIcons[index]}
              {page}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
  );
}

export default NavBar;
