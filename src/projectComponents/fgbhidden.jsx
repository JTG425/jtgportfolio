import { motion, AnimatePresence, useMotionValue } from "framer-motion";


export default function TheaterHidden(props) {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
        >
            <h2>FGB Theaters Website Development</h2>
        </motion.div>
    );
}