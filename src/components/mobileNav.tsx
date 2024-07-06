import '../styles/mobilenavbar.css'
import { AnimatePresence } from 'framer-motion'
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiNewspaper } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

function MobileNavBar(props) {
  const setPage = props.setPage
  const pages = ["Home", "My Projects", "My Resume", "Contact Me"]
  const pageIcons = [<FaHome />, <FaQuestionCircle />, <GrProjects />, <HiNewspaper />, <MdEmail />]
    

  return (
      <div className="mobile-navbar">
        <AnimatePresence>
          {pages.map((page, index) => (
            <button
              key={index}
              className="mobile-nav-link"
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

export default MobileNavBar;
