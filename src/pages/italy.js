import React from "react";
import { Link } from "react-router-dom";

const Italy = () => {
    return (
        <>
        <h1>Italy!</h1>
        <Link to="/cities">
            <h2>Cities</h2>
        </Link>
        </>
    )
}

export default Italy;