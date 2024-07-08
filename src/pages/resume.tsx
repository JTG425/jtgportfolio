import "../styles/resume.css";
import resume from "../assets/resume.png";
import { motion } from "framer-motion";

function Resume(props) {
  const boxShadow = props.shadow;

  return (
    <>
      <h2>My Resume</h2>
      <div className="resume-container">
        <div className="resume">
          <motion.img
            src={resume}
            alt="resume"
            style={{ boxShadow: boxShadow }}
          />
        </div>
      </div>
    </>
  );
}

export default Resume;
