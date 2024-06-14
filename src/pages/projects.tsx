import "../styles/projects.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiAwslambda } from "react-icons/si";
import { SiAwsamplify } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import {motion} from 'framer-motion'

function Projects(props) {
  const hoverShadow = props.hoverShadow;
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

  const boxShadowVariants = {
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

  return (
    <>
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>FGB Theaters Website Development</h3>
          <h4>December 2023 - May 2024</h4>
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
            the showtimes XML File generated and parsed daily. The site
            functionally works as intentended, and is currently in the final
            stages of development and testing before being deploye. TO DO List
            includes: Styling.
          </p>
          </span>
        </div>
        <div className="project">
          <h3>ECE Senior Capstone Design Project</h3>
          <p>Project 2 description</p>
        </div>
      </div>
    </>
  );
}

export default Projects;
