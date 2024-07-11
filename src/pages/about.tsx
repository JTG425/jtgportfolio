import "../styles/about.css";
import about1 from "../assets/aboutimages/1.png";
// import about2 from "../assets/aboutimages/2.png";
// import about3 from "../assets/aboutimages/3.png";
import {motion} from "framer-motion";

// import about4 from "../assets/aboutimages/4.png";

 function About() {
  const images = [about1];
  const text = [
    "Hello, I'm Joshua Golonka, a recent " + 
    "graduate of THE Ohio State University " +
    "with a Bachelors degree in Electrical and " + 
    "Computer Engineering.",
  ];


  return (
    <>
      <h2>About Me</h2>
      <div className="about-container">
        {images.map((image, index) => {
          return (
            <motion.div 
              key={`about-key-${index}`} 
              className="about-card-container"
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
