import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";


export default function Capstone(props) {
    const stackLogos = [
        'https://i.imgur.com/PghOkkB.png', // Python
        'https://i.imgur.com/O17QsIJ.png', // PyQT5
        'https://i.imgur.com/66jhGvG.png', // Raspberry Pi
    ]


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
        }
    }

    return (
        <div className="project-header">
            <h2>Technology Used</h2>
            <motion.div
                className='used-tech-stack'
                initial='hidden'
                animate='shown'
                variants={parentstackVariants}
            >
                {stackLogos.map((logo, index) => {
                    return (
                        <motion.div variants={stackItemsVariants}>
                            <motion.img
                                key={`project-tech-logo-cap-${index}`}
                                src={logo}
                                alt='tech-stack'
                                className='used-tech-stack-logo'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        </motion.div>
                    )
                })}
            </motion.div>
            <div className="project-content">
            <motion.div
                className="project-preview"
                key="project-preview-captone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <p>PlaceHolder</p>
                <p>(Will Be Screenshot of Site That Links to Demo)</p>
            </motion.div>
            <motion.div
                className="project-description"
                key="project-description-capstone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h3 className="project-description-title">What Is This?</h3>
                <p>
                    placeholder
                </p>
            </motion.div>
            </div>
        </div>
    );
}