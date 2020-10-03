import React from 'react';
import { HashRouter,  Link } from "react-router-dom"
import './style.css'

function Header() {
    const showThisContent = false

    return (        
        <HashRouter basename="/">
        <div className="header">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/projects">Projects</Link>
            {showThisContent ? <Link className="link" to="/about-me">About Me</Link> : "" }
        </div> 
        </HashRouter>  
    )
}

export default Header