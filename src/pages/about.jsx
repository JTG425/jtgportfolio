import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import '../styles/about.css'



function About() {
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
    "lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quas cumque quasi hic, fuga saepe voluptatum architecto! Autem, id ipsa! Ad, eos ipsum nemo eaque voluptas modi sit ducimus eveniet.",
    "lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quas cumque quasi hic, fuga saepe voluptatum architecto! Autem, id ipsa! Ad, eos ipsum nemo eaque voluptas modi sit ducimus eveniet.",
    "lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quas cumque quasi hic, fuga saepe voluptatum architecto! Autem, id ipsa! Ad, eos ipsum nemo eaque voluptas modi sit ducimus eveniet.",
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
