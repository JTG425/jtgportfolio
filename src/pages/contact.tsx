import "../styles/contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { FaRegPaperPlane } from "react-icons/fa";


function Contact(props) {
  const hoverShadow = props.hoverShadow;
  const shadow = props.shadow;
  const [state, handleSubmit] = useForm("xeqyelkj");

  const boxShadowVariants = {
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

  if (state.succeeded) {
    return (
      <>
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-confirmation">
            <p>Thanks for reaching out. I'll reply as soon as possible!</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
    <span className="contact-header-text">
      <h2>Contact Me</h2>
      <p>Any Questions? Ideas? Send me a message below!</p>
    </span>
      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <span className="contact-header">
              <input
                id="name"
                type="name"
                name="name"
                placeholder="Your Name"
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </span>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <motion.button
              type="submit"
              disabled={state.submitting}
              initial="notHovered"
              whileHover="hovered"
              variants={boxShadowVariants}
            >
              <FaRegPaperPlane />
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
