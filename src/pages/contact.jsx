import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contact.css'



function Contact() {
  const [state, handleSubmit] = useForm("xeqyelkj");
  const [fade, setFade] = useState(false);
  if (state.succeeded) {
    return (
      <motion.div
        className="confirmation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2>Thanks for reaching out!</h2>
        <p>I'll get back to you as soon as I can.</p>
      </motion.div>
    );
  }
  const socialLinks = [
    'https://www.instagram.com/joshuagolonka25/', // Instagram
  ]

  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }

  const parentstackVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.25,
        duration: 1,
      }
    }
  }

  const stackItemsVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }

  return (
    <motion.div className="contact">
      <h1>Let's Get In Touch</h1>
      <AnimatePresence>
        <motion.div
          initial={'shown'}
          animate={fade ? 'hidden' : 'shown'}
          variants={contentVariants}
        >
          <motion.div
            className='contact-content'
            initial={'hidden'}
            animate={'shown'}
            variants={parentstackVariants}
          >
            <motion.form
              className='contact-form'
              action='https://formspree.io/f/xeqyelkj'
              method='POST'
              onSubmit={handleSubmit}
              variants={stackItemsVariants}
            >
              <motion.span
                className='contact-info'
              >
                <motion.input
                  placeholder="Your Name"
                  id="Name"
                  type="text"
                  name="Name"
                />
                <motion.input
                  placeholder="Your Email"
                  id="email"
                  type="email"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </motion.span>
              <motion.textarea
                placeholder="Your Message"
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setFade(true)}
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </AnimatePresence >
    </motion.div>

  )
}




export default Contact;
