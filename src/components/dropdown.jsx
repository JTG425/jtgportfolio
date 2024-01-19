import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { button } from "leva";

const containerVariants = {
    hidden: {
        opacity: 0,
        zIndex: -2,
        transition: {
            duration: 2,
            when: "afterChildren"
        }
    },
    shown: {
        opacity: 1,
        transition: {
            duration: 0.25,
            staggerChildren: 0.25,
            when: "beforeChildren",
        }
    }
}

const backgroundVariants = {
    hidden: {
        opacity: 0,
        zIndex: -2,
        transition: {
            duration: 5,
        }
    },
    shown: {
        opacity: 1,
        transition: {
            duration: 5,
        }
    },

}

//https://codesandbox.io/p/sandbox/framer-motion-mouse-position-2b4sd?file=%2Fsrc%2FApp.js%3A40%2C1-69%2C2
function getRelativeCoordinates(event, referenceElement) {
    const position = {
        x: event.pageX,
        y: event.pageY
    };

    const offset = {
        left: referenceElement.offsetLeft,
        top: referenceElement.offsetTop,
        width: referenceElement.clientWidth,
        height: referenceElement.clientHeight
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
        offset.left += reference.offsetLeft;
        offset.top += reference.offsetTop;
        reference = reference.offsetParent;
    }

    return {
        x: position.x - offset.left,
        y: position.y - offset.top,
        width: offset.width,
        height: offset.height,
        centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
        centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
    };
}


const menuItem = {
    hidden: {
        opacity: 0,
    },
    shown: {
        opacity: 1,
        scale: 1.1,
        transition: {
            type: "spring",
            duration: 2,
        },
    },
}




export default function Dropdown({ home, about, contact, projects, resume, setHome, setAbout, setContact, setProjects, setResume, handleButtonClick }) {
    const [toggle, setToggle] = useState(false);
    const [page, setPage] = useState("Home");
    const [i, setI] = useState(0);
    const menuOptions = ["home", "about", "resume", "projects", "contact"]
    const displayed = ["Home", "About Me", "Resume", "My Projects", "Contact Me"]
    const [mousePosition, setMousePosition] = useState({});
    const buttonRef0 = useRef();
    const buttonRef1 = useRef();
    const buttonRef2 = useRef();
    const buttonRef3 = useRef();
    const buttonRef4 = useRef();

    const handleMouseMove = e => {
        if (i === 0) {
            setMousePosition(getRelativeCoordinates(e, buttonRef0.current));
        } else if (i === 1) {
            setMousePosition(getRelativeCoordinates(e, buttonRef1.current));
        } else if (i === 2) {
            setMousePosition(getRelativeCoordinates(e, buttonRef2.current));
        } else if (i === 3) {
            setMousePosition(getRelativeCoordinates(e, buttonRef3.current));
        } else if (i === 4) {
            setMousePosition(getRelativeCoordinates(e, buttonRef4.current));
        }
    };

    const handleDropdownClick = (page, i) => {
        return () => {
            handleButtonClick(page);
            setPage(displayed[i]);
            setToggle(false);
        };
    };

    return (
        <AnimatePresence>
            <motion.div
                className="dropdown-container"
                initial={{ opacity: 1 }}
            >
                <motion.button
                    className="dropdown-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 1 }}
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    {page}
                </motion.button>
                <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0 }}
                    animate={toggle ? "shown" : "hidden"}
                    variants={containerVariants}
                >
                    {menuOptions.map((option, index) => {
                        return (
                            <motion.div variants={menuItem}>
                                <motion.button
                                    className="dropdown-item"
                                    ref={index === 0 ? buttonRef0 : index === 1 ? buttonRef1 : index === 2 ? buttonRef2 : index === 3 ? buttonRef3 : buttonRef4}
                                    key={index}
                                    initial={{ scale: 0.9 }}
                                    onHoverStart={() => setI(index)}
                                    onMouseMove={e => handleMouseMove(e)}
                                    whileHover={{
                                        scale: 0.95,
                                        background: `radial-gradient(circle at ${mousePosition.centerX * 100}% ${mousePosition.centerY * 100}%, #1a148c 0%, #2b2b2b 100%)`,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleDropdownClick(option, index)}
                                >
                                    <span className="button-text">{displayed[index]}</span>
                                </motion.button>
                            </motion.div>
                        );
                    })}

                </motion.div>
                <motion.div
                    className="blurred-background"
                    initial={{ opacity: 0 }}
                    animate={toggle ? "shown" : "hidden"}
                    variants={containerVariants}
                >
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}