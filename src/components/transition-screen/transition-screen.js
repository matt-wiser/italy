import React from "react";
import { motion, useIsPresent } from "framer-motion";
import './transition-screen.css'

const TransitionScreen = () => {
    const isPresent = useIsPresent();
    return(
        <motion.div 
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 1 : 0 }}
        className='transition-screen' />
    )
}

export default TransitionScreen