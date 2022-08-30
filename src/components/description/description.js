import React from 'react';
import { motion } from 'framer-motion';

import './description.css';

const Description = ({ img, children }) => {
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section className="description">
      <motion.div
        className="description-img"
        variants={descriptionVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ ease: 'easeOut', duration: 0.75 }}
      >
        <img src={img} alt="italy" />
      </motion.div>

      <div className="description-text">{children}</div>
    </section>
  );
};

export default Description;
