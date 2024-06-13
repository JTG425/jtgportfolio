import me from "./assets/me.png";
import "./App.css";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import NavBar from "./components/navbar";
import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiAwslambda } from "react-icons/si";
import { SiAwsamplify } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { FaPython } from "react-icons/fa";

function App() {
  const [text, setText] = useState("");
  const [hoverShadow, setHoverShadow] = useState("");
  // 0 0px 10px 1px rgb(2, 81, 132, 0.5)
  const [page, setPage] = useState("Home");

  const skillComponents = [
    <FaReact  />,
    <IoLogoJavascript  />,
    <SiTypescript  />,
    <FaHtml5  />,
    <IoLogoCss3  />,
    <FaAws  />,
    <SiAwslambda  />,
    <SiAwsamplify  />,
    <SiFramer  />,
    <FaPython  />,
  ];

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

  // const handlePageChange = (page) => {
  //   setPage(page);
  //   console.log(page);
  // };

  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    setText(rootStyle.getPropertyValue("--copy").trim());
    setHoverShadow(rootStyle.getPropertyValue("--box-shadow").trim());
  }, []);

  return (
    <>
      <div className="App">
        <span className="intro">
          <motion.img
            className="me"
            src={me}
            alt="me"
            initial="notHovered"
            whileHover="hovered"
            variants={boxShadowVariants}
          />
          <span className="text-block">
            <h1>
              Hi, I'm <span>Joshua</span>
            </h1>

            <p>This Portfolio is under construction, </p>
            <p>In the Meantime, Check out my LinkedIn!</p>
            <a
              href="https://www.linkedin.com/in/joshua-golonka-7a71b230a"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button 
                className="link-button"
                initial="notHovered"
                whileHover="hovered"
                variants={boxShadowVariants}
                >
                <FaLinkedin />
                LinkedIn
              </motion.button>
            </a>
          </span>
          <div className="skills">
            {skillComponents.map((skill, index) => (
              <motion.div 
                key={`skill-${index}`} 
                className="skill"
                initial="notHovered"
                whileHover="hovered"
                variants={boxShadowVariants}
                >
                {skill}
              </motion.div>
            ))}
          </div>
        </span>
      </div>
    </>
  );
}

export default App;
