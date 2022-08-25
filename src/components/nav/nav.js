import React from "react";
import { Link } from "react-router-dom";

import "./nav.css"

const Nav = () => {
    return (
    <nav>
        <Link to="/">
            <h2>Italy</h2>
        </Link>
        
        <Link to="/cities">
            <h2>Cities</h2>
        </Link>
    </nav>
    )
}

export default Nav;