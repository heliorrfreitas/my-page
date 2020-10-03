import React from "react"
import { HashRouter, Link } from 'react-router-dom'
import "./styles.css"


function Home() {

    const showThisContent = false

    return (
        <div className="home">
            <h2>Welcome, I am Helio Rui Ramos Freitas!</h2>
            <p>The Projects page has a list of some things I have built either on my own, or following some class or tutorial. </p>
            
            {showThisContent ? <p>The About me page has a little bit more about me. </p> : <p></p>}
            

            <HashRouter basename="/">                
                <div className="other-pages">
                    <Link to="/projects">Projects</Link>                    
                </div>
                {showThisContent ? <div className="other-pages">
                    <Link to="/about-me">About Me</Link>
                </div>
                : <div></div> }
            </HashRouter>
                
        </div>
    )
}

export default  Home

