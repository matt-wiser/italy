import React from "react";
import { motion } from "framer-motion";

const AnimatedWords = ({ text }) => {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.05 },
    },
  };
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 25,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const words = text.split(" ");

  return (
    <motion.h2
      className="divider-text-header"
      variants={headerVariants}
      initial={"hidden"}
      animate={"visible"}
    >
      {words.map((word, index) => {
        return (
          <motion.span key={index} variants={wordVariants}>
            {word + "\u00A0"}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};

export default AnimatedWords;
