import me from "./assets/me.png";
import './App.css'
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import NavBar from "./components/navbar";
import { useState } from 'react';

function App() {
  const background = "rgb(33, 39, 44)";
  const primary = 'rgb(2, 81, 132)';
  const buttonBorder ='rgb(54, 66, 73)'
  const text = 'rgb(251, 251, 252)'
  // 0 0px 10px 1px rgb(2, 81, 132, 0.5)
  const [page, setPage] = useState("Home");

  const shadowVariants = {
    notHovered: {
      background: background,
      color: text,
      border: `2px solid ${buttonBorder}`,
      boxShadow: "none",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    hovered: {
      background: background,
      color: text,
      border: `2px solid ${primary}`,
      boxShadow: "0 0px 10px 1px rgba(2, 81, 132, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    pressed: {
      background: background,
      color: primary,
      border: `2px solid ${buttonBorder}`,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  }

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  }



  return (
    <>
      <div className="App">
        <NavBar setPage={handlePageChange} />
        <motion.img 
          className="me" 
          src={me} 
          alt="me" 
          initial="notHovered"
          whileHover="hovered"
          whileTap="pressed"
          variants={shadowVariants}
          />
        <motion.span 
        className="text-block"
        initial="notHovered"
        whileHover="hovered"
        whileTap="pressed"
        variants={shadowVariants}
        >
          <h1>
            Hi, I'm <span>Joshua</span>
          </h1>

        <p>This Portfolio is under construction, </p>
        <p>In the Meantime, Check out my LinkedIn!</p>
        </motion.span>
      </div>
    </>
  );
}

export default App;
