import React from "react"
import { HashRouter, Link } from 'react-router-dom'
import "./styles.css"


function Home() {
    return (
        <div className="home">
            <h2>Welcome, I am Helio Rui Ramos Freitas!</h2>
            <p>The Projects page has a list of some things I have built either on my own, or following some class or tutorial. </p>
            <p>The About me page has a little bit more about me. </p>

            <HashRouter basename="/">                
                <div className="other-pages">
                    <Link to="/projects">Projects</Link>                    
                </div>
                <div className="other-pages">
                    <Link to="/about-me">About Me</Link>
                </div>
            </HashRouter>
                
        </div>
    )
}

export default  Home