import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";


export default function Theater(props) {

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
        >
            <p>Test</p>
        </motion.div>
    );
}