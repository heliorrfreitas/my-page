import React from "react"

import Card from "../Card"
import projects from "./dataProjects"

import "./styles.css"

function Projects() {
    return(
        <div className="page">
            <h2>Projects</h2>
            <p>This is a list of projects I have built either on my own to try something, learn something, explore something, 
                or as part of a class.  </p>
            <div className="projects-list">
                {projects.map(project => (
                    <Card data={project} />
                ))}    
            </div>
        </div>
    )
}

export default Projects