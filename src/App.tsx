import "./App.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/navbar";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from "./home";
// import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Resume from "./pages/resume";


function App() {
  const [hoverShadow, setHoverShadow] = useState("");
  const [shadow, setShadow] = useState("");
  const [showNav, setShowNav] = useState(false);
  // 0 0px 10px 1px rgb(2, 81, 132, 0.5)
  const [page, setPage] = useState("Home");
  
  const boxShadowVariants = {
    hovered: {
      boxShadow: hoverShadow,
      transition: {
        duration: 0.25,
      },
    },
    notHovered: {
      boxShadow: shadow,
    },
  };


  const pageComponents = {
    "Home": <Home hoverShadow={hoverShadow} shadow={shadow} />,
    // "About Me": <About />,
    "My Projects": <Projects hoverShadow={hoverShadow} shadow={shadow} />,
    "My Resume": <Resume shadow={shadow} />,
    "Contact Me": <Contact hoverShadow={hoverShadow} shadow={shadow} />,
  };



  const navVariants = {
    open: {
      x: "-40%",
      transition: {
        duration: 0.25,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    closed: {
      x: "-110%",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const handlePageChange = (page) => {
    setPage(page);
    setShowNav(false);
  };

  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    setHoverShadow(rootStyle.getPropertyValue("--box-shadow").trim());
    setShadow(rootStyle.getPropertyValue("--shadow").trim());
  }, []);

  return (
    <>
      <div className="App">
        <p className="temp">{page}</p>
        <motion.button
          className="burger-menu-container"
          initial="notHovered"
          whileHover="hovered"
          whileTap={{ scale: 0.96 }}
          variants={boxShadowVariants}
          onClick={() => setShowNav(!showNav)}
          transition={{ duration: 0.25 }}
        >
          <GiHamburgerMenu className="burger" />
        </motion.button>
        <motion.div
          className="nav-container"
          initial="closed"
          animate={showNav ? "open" : "closed"}
          variants={navVariants}
        >
          <NavBar setPage={handlePageChange} hoverShadow={hoverShadow} showNav={showNav} />
        </motion.div>
        <AnimatePresence mode="popLayout">
          <motion.div
          key={page}
            className="page-container"
            initial={{ opacity: 0, x: 500}}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0, x: 500}}
          >
            {pageComponents[page]}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
