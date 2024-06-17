import "../styles/skillpool.css";
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
import { motion, Variants } from "framer-motion";
// import { IoClose } from "react-icons/io5";

function SkillPool(props) {
  const hoverShadow = props.hoverShadow;


  const skillPoolVariants: Variants = {
    hovered: {
      boxShadow: hoverShadow,
      transition: {
        duration: 0.25,
      },
    },
    notHovered: {
      boxShadow: "0px 0px 0px 0px rgb(0, 0, 0, 0)",
    },
    normal: {
      width: "80%",
      position: "relative",
      display: "flex",
      height: "fit-content",
    },
    pool: {
      y: -260,
      width: "100%",
      height: "300px",
    },
  };

  const iconVariants: Variants = {
    initial: {
      borderRadius: "0.375rem",
      x: 0,
      y: 0,
    },
    pool: {
      borderRadius: "50%",
      transition: {
        duration: 0.5,
      },
    },
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

  const skillComponents = [
    <FaReact />,
    <IoLogoJavascript />,
    <SiTypescript />,
    <FaHtml5 />,
    <IoLogoCss3 />,
    <FaAws />,
    <SiAwslambda />,
    <SiAwsamplify />,
    <SiFramer />,
    <FaPython />,
  ];


  return (
    <>
      <motion.div
        className="skills"
        variants={skillPoolVariants}
      >
        {skillComponents.map((skill, index) => (
          <motion.div
            key={`skill-${index}`}
            className="skill"
            initial="initial"
            whileHover="hovered"
            whileTap={{ scale: 0.96 }}
            variants={iconVariants}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default SkillPool;
