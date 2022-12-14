import React from "react";
import { Link } from "react-router-dom";
import './cities.css'

const Cities = () => {
    return (

        <>
        <h1 className="city-title">Cities!</h1>
        
        <Link to="milano">
            <h2>Milano</h2>
        </Link>
        
        <Link to="roma">
            <h2>Roma</h2>
        </Link>

        <Link to="napoli">
            <h2>Napoli</h2>
        </Link>
        </>
    )
}

export default Cities;