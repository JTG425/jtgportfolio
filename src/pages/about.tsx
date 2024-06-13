import '../styles/about.css'
import { motion } from 'framer-motion'

function About() {
  const background = "rgb(33, 39, 44)";
  const primary = 'rgb(2, 81, 132)';
  const buttonBorder ='rgb(54, 66, 73)'
  const text = 'rgb(251, 251, 252)'

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



  return (
      <div className="about-me">
        
      </div>
  );
}

export default About;
