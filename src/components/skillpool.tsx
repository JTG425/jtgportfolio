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
  const boxShadowVariants: Variants = props.boxShadowVariants;


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
        variants={boxShadowVariants}
      >
        {skillComponents.map((skill, index) => (
          <motion.div
            key={`skill-${index}`}
            className="skill"
            initial="notHovered"
            whileHover="hovered"
            whileTap={{ scale: 0.96 }}
            variants={boxShadowVariants}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default SkillPool;
