import React from "react";

import AnimatedWords from "../animated-words/animated-words";

import "./dividers.css"

const DividerText = ({text}) => {    

    
    return (
        <section className="divider-text">
            <AnimatedWords text={text}/>
        </section>
    )
}

const DividerSmall = ({img, alt}) => {
    return (
        <section className="divider-small">
            <img src={img} alt={alt}></img>
        </section>
    )
}

const DividerLarge = ({ img, alt }) => {
    return (
        <section className="divider-large">
            <img src={img} alt={alt}></img>
        </section>
    )
}

export {DividerText, DividerSmall, DividerLarge};