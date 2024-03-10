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
    "https://i.imgur.com/T9U2pn8.jpg?1", //
    "https://i.imgur.com/LypqAyD.jpg", // Maria Bennet and I
  ]
  const text = [
    "My Name is Joshua Golonka, I was born and raised in Montpelier VT with my 4 siblings and two dogs, Calvin and Hobbes :)",
    "I'm currently obtaining my Bachelors Degree in Electrical And Computer Engineering from THE Ohio State University (Go Bucks)",
    "When I started college, I was convinced to join one of my schools Co-ed A Capella groups, The Ohio State of Mind, and I've been singing with them ever since! The group has been a huge part of my college experience and has introduced me to new and exciting experiences and people. Among these experience was the opportunity to compete in the Anual ICCA, which is the International Championship of Collegiate A Capella. My group has consistantly made it to the Midwest Seminfals and we are the current two time Semifinal Champions, which gave us the opportunity to compete in NYC against the top 10 a cappella groups in the US and Europe.",
    "lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quas cumque quasi hic, fuga saepe voluptatum architecto! Autem, id ipsa! Ad, eos ipsum nemo eaque voluptas modi sit ducimus eveniet."
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
        {/* <div className='socials'>
          <SocialIcon target="_blank" href="www.instagram.com/joshuagolonka25" url="www.instagram.com" bgColor="none" />
        </div> */}
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
