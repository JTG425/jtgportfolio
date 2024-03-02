import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";


const Theater = React.memo(function Theater(props) {
    const projectIndex = props.projectIndex;
    const stackLogos = [
        'https://i.imgur.com/FsACRhX.png', // React.js
        'https://i.imgur.com/vlOBr4X.png', // Framer Motion
        'https://i.imgur.com/jNNE26t.png', // Node.js
        'https://i.imgur.com/ylyoerF.png', // HTML5
        'https://i.imgur.com/XFReta1.png', // CSS3
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
                        <motion.div
                            variants={stackItemsVariants}
                            key={`project-${projectIndex}-stack-logo-fgb-${index}`}
                        >
                            <motion.img
                                key={`project-${projectIndex}-tech-logo-fgb-${index}`}
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
                    key="project-preview-fgb"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <p>PlaceHolder</p>
                    <p>(Will Be Screenshot of Site That Links to Live Site)</p>
                </motion.div>
                <motion.div
                    className="project-description"
                    key="project-description-fgb"
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
});

export default Theater;