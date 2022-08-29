import React, { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";


import "./nav.css"

const Nav = () => {
    
    const prevScrollPos = useRef(0);
    const [visible, setVisibile] = useState(true);
    

    const handleScroll = debounce(() => {
        const currentScrollPos = window.scrollY;
        setVisibile(currentScrollPos < prevScrollPos.current);
        prevScrollPos.current = currentScrollPos;
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll])
    
    
    return (
    
    <nav id="nav" style={{top: visible ? '0' : document.getElementById('nav').clientHeight * -1 + 'px'}}>
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