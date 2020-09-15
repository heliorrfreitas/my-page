import React from "react"
import { HashRouter, Link } from 'react-router-dom'
import "./styles.css"


function Home() {
    return (
        <div className="home">
            <h2>Welcome, I am Helio Rui Ramos Freitas!</h2>
            <p>You can check out somethings I have built on my free time or things that I did to study going to my projects page. 
                The About me page has a little bit more about me. </p>

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