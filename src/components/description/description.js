import React from "react";
import "./description.css"

const Description = ({ img, children }) => {
  return (
    <section className="description">
      <div className="description-img">
        <img src={img} alt="italy"/>
      </div>

      <div className="description-text">{children}</div>
    </section>
  );
};

export default Description;
