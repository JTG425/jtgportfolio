import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";


export default function Capstone(props) {

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
        >
            <h2>ECE Capstone Design Project</h2>
            <p>HMI</p>
        </motion.div>
    );
}