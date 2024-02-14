import { motion, AnimatePresence, useMotionValue } from "framer-motion";


export default function CapstoneHidden(props) {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
        >
            <h2>ECE Capstone Design Project</h2>
        </motion.div>
    );
}