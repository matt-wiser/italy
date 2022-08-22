import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
    <nav>
        <Link to="/">
            <h2>Discover Italy</h2>
        </Link>
        
        <Link to="/cities">
            <h2>Cities</h2>
        </Link>
    </nav>
    )
}

export default Nav;