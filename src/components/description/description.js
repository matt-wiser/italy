import React from "react";
import { motion } from "framer-motion";

import "./description.css"

const Description = ({ img, children }) => {
  return (
    <section className="description">
      <motion.div className="description-img"
        initial={{ x: "-100%", opacity:0 }}
        whileInView={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: .75 }}>
        <img src={img} alt="italy"/>
      </motion.div>

      <div className="description-text">{children}</div>
    </section>
  );
};

export default Description;
