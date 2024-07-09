import "./App.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/navbar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from "./home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";




function App() {
  const [showNav, setShowNav] = useState(false);
  const [theme, setTheme] = useState('light');
  // 0 0px 10px 1px rgb(2, 81, 132, 0.5)
  const [page, setPage] = useState("Home");

  const notHovered = "0 0px 5px 0px rgba(251, 251, 251, 0.75)"
  const hovered = "0 0px 5px 0px rgba(3, 112, 182, 0.75)";
  
  const boxShadowVariants = {
    hovered: {
      boxShadow: hovered,
      transition: {
        duration: 0.25,
      },
    },
    notHovered: {
      boxShadow: notHovered,
    },
  };


  const pageComponents = {
    "Home": <Home hoverShadow={hovered} shadow={notHovered} />,
    "About Me": <About />,
    "My Projects": <Projects hoverShadow={hovered} shadow={notHovered} />,
    "My Resume": <Resume shadow={notHovered} />,
    "Contact Me": <Contact hoverShadow={hovered} shadow={notHovered} />,
  };



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
      x: "105%",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const backgroundVariants = {
    open: {
      opacity: [0,0,1],
      x: "0%",
      transition: {
        duration: 0.25,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
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


  return (
    <>
      <div className="App">
        <p className="temp">{page}</p>
        <div className="menu-buttons">
        <motion.button
          className="menu-button"
          initial="notHovered"
          whileHover="hovered"
          whileTap={{ scale: 0.96 }}
          variants={boxShadowVariants}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          transition={{ duration: 0.25 }}
        >
          {theme === "light" ? <LuSun className="theme-icon" /> : <LuMoon className="theme-icon" />}
        </motion.button>
        <motion.button
          className="menu-button"
          initial="notHovered"
          whileHover="hovered"
          whileTap={{ scale: 0.96 }}
          variants={boxShadowVariants}
          onClick={() => setShowNav(!showNav)}
          transition={{ duration: 0.25 }}
        >
          <GiHamburgerMenu className="burger" />
        </motion.button>
        </div>
        <motion.div
          className="nav-container"
          initial="closed"
          animate={showNav ? "open" : "closed"}
          variants={navVariants}
        >
          <NavBar setPage={handlePageChange} hoverShadow={hovered} showNav={showNav} />
        </motion.div>
        <motion.div
        className="blurred-background"
        initial="closed"
        animate={showNav ? "open" : "closed"}
        onClick={() => setShowNav(!showNav)}
        variants={backgroundVariants}
        >
        </motion.div>
        <AnimatePresence mode="popLayout">
          <motion.div
          key={page}
            className="page-container"
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{ 
              duration: 0.15,
              type: "spring",
              stiffness: 260,
              damping: 20,

            }}
            exit={{ opacity: 0, y: 100}}
          >
            {pageComponents[page]}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
