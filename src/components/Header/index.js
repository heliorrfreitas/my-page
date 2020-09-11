import React from 'react';
import { HashRouter,  Link } from "react-router-dom"
import './style.css'

function Header() {
    return (        
        <HashRouter basename="/">
        <div className="header">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/projects">Projects</Link></span>
            <span><Link to="/about-me">About Me</Link></span> 
        </div> 
        </HashRouter>  
    )
}

export default Header