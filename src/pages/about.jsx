import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { SocialIcon } from 'react-social-icons/component'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import 'react-social-icons/instagram'
import '../styles/about.css'



function About() {
  const [showNotation, setShowNotation] = useState(false)
  const { scrollYProgress } = useScroll()
  const cardVarients = {
    focused: {
      scale: 1.1,
      transition: {
        duration: 0.5
      }
    },
    notFocused: {
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }


  const images = [
    "https://i.imgur.com/7nSCuwh.jpg", // Portrait
    "https://i.imgur.com/LypqAyD.jpg", // Maria Bennet and I
    "https://i.imgur.com/T9U2pn8.jpg?1", // ICCA 2022
  ]
  const text = [
    "My Name is Joshua Golonka, I was born and raised in Montpelier VT with my 4 siblings and two dogs, Calvin and Hobbes :). Throughout my life, I have had an affinity towards technology... whether it was taking apart the family VCR to fix it (I made it worse) or building my own computer in high school, I knew that I wanted to pursue a career in technology.",
    "I'm currently obtaining my Bachelors Degree in Electrical And Computer Engineering from THE Ohio State University (Go Bucks). Throughout my 5 years in college, I have fallen in love with Programming, specifically Front End Development, as I feel my creativity and problem solving skills excel within this field.",
    " In My Free time, I love to hang out with my friends, go to the gym, and listen to really sad music. When I started college, I was convinced to join one of my schools Co-ed A Capella groups, The Ohio State of Mind, and I've been singing with them ever since! The group has been a huge part of my college experience and has introduced me to new and exciting experiences and people. Among these experience was the opportunity to compete Anually in the Internation Competition of Collegiate A Cappella (ICCA). My group has consistently performaned well and have had the amazing opportunity to win the Midwest Semifinal Three Years in a row (2022, 2023, and 2024), earning us a ticket to compete in ICCA finals in NYC against the other top 10 groups in the US and UK out of around 600 other groups.",
  ]

  return (
    <div className="about">
      <h1>Some Background</h1>
      <motion.div
        className='about-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <>
        </>
        <div className='socials'>
        </div>
        {images.map((image, index) => {
          let classNames, imageClassName
          if (index % 2 === 0) {
            classNames = 'cardEven'
            imageClassName = 'imageEven'
          } else {
            classNames = 'cardOdd'
            imageClassName = 'imageOdd'
          }
          return (
            <motion.div
              className={classNames}
              key={`card-${index}`}
              whileInView="focused"
              whileOutOfView="notFocused"
              variants={cardVarients}
            >
              <motion.img
                className={imageClassName}
                key={`image-${index}`}
                src={images[index]}
                alt="Me"
              />
              <div>
                <p>
                  {text[index]}
                </p>
              </div>
            </motion.div>
          );
        })
        }
      </motion.div>
    </div>

  )
}




export default About;
