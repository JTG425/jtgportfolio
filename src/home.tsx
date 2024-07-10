import me from "./assets/me.png";
import "./App.css";
import { motion, Variants } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import SkillPool from "./components/skillpool";
import Blob from "./components/blob";

function Home(props) {
  const hoverShadow = props.hoverShadow;
  const shadow = props.shadow;

  const boxShadowVariants: Variants = {
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

  return (
    <>
      <span className="intro">
        <div className="blob-position">
          {/* <motion.img
            className="me"
            src={me}
            alt="me"
            initial="notHovered"
            whileHover="hovered"
            whileTap={{ scale: 0.96 }}
            variants={boxShadowVariants}
          /> */}
          <span className="blobs">
            <span className="blob1">
              <Blob
                width="350px"
                height="350px"
                color="#0370b6"
                style={{ opacity: 0.75, position: "absolute", top: 0, left: 0 }}
              />
            </span>
            <span className="blob2">
              <Blob
                width="325px"
                height="325px"
                color="#025184"
                style={{ opacity: 0.75, position: "absolute", top: 0, left: 0 }}
              />
            </span>
            <span className="blob3">
              <Blob
                width="300px"
                height="300px"
                color="#013252"
                style={{ opacity: 0.75, position: "absolute", top: 0, left: 0 }}
              />
            </span>
            <span className="blob4">
              <Blob
                image={me}
                width="250px"
                height="250px"
                color="#0370b6"
                style={{ opacity: 0.75, position: "absolute", top: 0, left: 0 }}
              />
            </span>
          </span>
        </div>


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
              whileTap={{ scale: 0.96 }}
              variants={boxShadowVariants}
            >
              <FaLinkedin />
              LinkedIn
            </motion.button>
          </a>
        </span>
        <SkillPool
          hoverShadow={hoverShadow}
          boxShadowVariants={boxShadowVariants}
        />
      </span>
    </>
  );
}

export default Home;
