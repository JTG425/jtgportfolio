import "../styles/projects.css";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiAwslambda } from "react-icons/si";
import { SiAwsamplify } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { IoClose } from "react-icons/io5";

function FGB(props) {
  const hoverShadow = props.hoverShadow;
  const [open, setOpen] = useState(false);
  const skillComponents = [
    <FaReact />,
    <IoLogoJavascript />,
    <FaHtml5 />,
    <IoLogoCss3 />,
    <FaAws />,
    <SiAwslambda />,
    <SiAwsamplify />,
    <FaPython />,
  ];

  const boxShadowVariants: Variants = {
    hovered: {
      boxShadow: hoverShadow,
      transition: {
        duration: 0.25,
      },
    },
    notHovered: {
      boxShadow: "0px 0px 0px 0px rgb(0, 0, 0, 0)",
    },
  };

  const containerVariants: Variants = {
    closed: {
      y: 0,
      width: "75%",
      height: "85px",
      zIndex: 2,
      borderRadius: "0.375rem",
      overflowY: "hidden",
    },
    open: {
      y: -20,
      width: "93%",
      height: "75vh",
      zIndex: 5,
      borderRadius: "0",
      overflowY: "scroll",
      boxShadow: hoverShadow,
    },
  };

  return (
    <>
    {open ? (
        <motion.button
          key="fgb-close-button"
          className="close-button"
          whileTap={{ scale: 0.96 }}
          animate={open ? { opacity: 1, zIndex:101 } : { opacity: 0, zIndex: -1}}
          variants={boxShadowVariants}
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </motion.button>
      ) : null}
      <motion.div
        className="project"
        initial="closed"
        animate={open ? "open" : "closed"}
        onClick={() => setOpen(true)}
        variants={containerVariants}
      >
        <h3>FGB Theaters Website Development</h3>
        <h4>December 2023 - May 2024</h4>
        {open ? ( 
        <>

        <span className="project-stack-container">
          {skillComponents.map((skill, index) => (
            <motion.div
              key={`project-stack-${index}`}
              className="skill"
              initial="notHovered"
              whileHover="hovered"
              whileTap={{ scale: 0.96 }}
              variants={boxShadowVariants}
            >
              {skill}
            </motion.div>
          ))}
        </span>
        <a href="https://www.fgbtheaters.com" target="_blank">
          <motion.button
            className="project-button"
            initial="notHovered"
            whileHover="hovered"
            whileTap={{ scale: 0.96 }}
            variants={boxShadowVariants}
          >
            Live Site
          </motion.button>
        </a>
        <span className="project-description-container">
          <p>
            My Family owns and operate two small movie theaters in the Central
            Vermont area. As a side project for myself, I decided to develop a
            new website to replace the outdated site currently in use. The new
            site is designed to be more user-friendly and provide the user with
            a simple way to view the current and upcoming showtimes and allow
            them to purchase tickets online.
          </p>
          <p>
            The Site was built using React.js with the Vite framework. Amazon
            Web Services (AWS), specifically Amplify and S3, were used to host
            the site and store necessary information about each movie. For Back
            End, I created a python script that takes the showtimes XML file and
            parses it into a JSON file that is then uploaded to the S3 bucket,
            this JSON file includes all necessary information for each movie
            aswell as a direct link to the poster for clients to recieve.
          </p>
          <p>
            This website is now fully automatic and dynamically updates based on
            the showtimes XML File generated and parsed daily on the back-end.
            The site also includes a cache revalidation system that allows users
            to reuse site images/showtimes if the cached version is up to date.
          </p>
        </span>
        </> ) : null}
      </motion.div>
    </>
  );
}

export default FGB;
