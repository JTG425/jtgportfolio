import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    shown: {
        opacity: 1,
        transition: {
            duration: 0.25,
            staggerChildren: 0.25,
        }
    }
}

const backgroundVariants = {
    hidden: {
        opacity: 0,
    },
    shown: {
        opacity: 1,
        transition: {
            duration: 5,
        }
    }
}

const menuItem = {
    hidden: {
        opacity: 0,
    },
    shown: {
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }
}



export default function Dropdown({ home, about, contact, projects, resume, setHome, setAbout, setContact, setProjects, setResume, handleButtonClick }) {
    const [toggle, setToggle] = useState(false);
    const [page, setPage] = useState("Home");
    const menuOptions = ["home", "about", "resume", "projects", "contact"]
    const displayed = ["Home", "About Me", "Resume", "My Projects", "Contact Me"]

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
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
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