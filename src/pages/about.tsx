import "../styles/about.css";
import about1 from "../assets/aboutimages/1.png";
import about2 from "../assets/aboutimages/2.png";
import about3 from "../assets/aboutimages/3.png";
import {motion} from "framer-motion";

// import about4 from "../assets/aboutimages/4.png";

function About() {
  const images = [about1, about2, about3];
  const text = [
    "Hello, I'm Joshua Golonka, a recent " + 
    "graduate of THE Ohio State University " +
    "with a Bachelors degree in Electrical and " + 
    "Computer Engineering.",
    "My passions, in addition to software development, " +
    "can be seen as broad, potentially too broad to be honest. " +
    "In my five year tenure at OSU, I was an active member of The Ohio State of Mind (tOSM), " +
    "A student led competitive A Cappella group (Think Pitch Perfect, but way less cool). " +
    "This group was a huge part of my college experience, and gave me an amazing creative outlet while I diligently (and sometimes not so diligently) worked towards my degree in STEM.",
    "My Group and I were honored to compete yearly in the International Championship of Collegiate A Cappella (ICCA). " +
    "Broken down into 10 subregions across the US and UK, tOSM has held the Midwest Champion title for the past 3 years in row, " +
    "and have had the opportunity to compete in the ICCA Finals on broadway against the other top 10 groups in the world.",
  ];


  // Slide Each Card Up when in view
  const cardVariants = {
    notInView: { 
      opacity: 0, 
      x: -50,
    },
    inView: { 
      opacity: 1, 
      x: 0,
    },
  };




  return (
    <>
      <h2>About Me</h2>
      <div className="about-container">
        {images.map((image, index) => {
          return (
            <motion.div 
              key={`about-key-${index}`} 
              className="about-card-container"
              initial="notInView"
              animate="inView"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              >
              <img src={image} alt={text[index]} />
              <p>{text[index]}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default About;
