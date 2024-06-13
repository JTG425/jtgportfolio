import '../styles/navbar.css'
import { motion } from 'framer-motion'
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiNewspaper } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";






function NavBar(props) {
  const setPage = props.setPage
  const hoverShadow = props.hoverShadow
  const pages = ["Home", "About Me", "My Projects", "My Resume", "Contact Me"]
  const pageIcons = [<FaHome />, <FaQuestionCircle />, <GrProjects />, <HiNewspaper />, <MdEmail />]

  const boxShadowVariants = {
    hovered: {
      boxShadow: hoverShadow,
      transition: {
        duration: 0.25,
      }
    },
    notHovered: {
      boxShadow: "0px 0px 0px 0px rgb(0, 0, 0, 0)"
    }
  };

  return (
      <div className="navbar">
          {pages.map((page, index) => (
            <motion.button
              key={index}
              className="nav-link"
              initial="notHovered"
              whileHover="hovered"
              animate="notHovered"
              whileTap={{ scale: 0.98 }}
              variants={boxShadowVariants}
              onClick={() => setPage(page)}
            >
              {pageIcons[index]}
              {page}
            </motion.button>
          ))}
      </div>
  );
}

export default NavBar;
