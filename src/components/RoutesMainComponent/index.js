import React from "react"
import { HashRouter, Route } from 'react-router-dom'

import Home from '../Home'
import Projects from '../Projects'
import AboutMe from '../AboutMe'

function RoutesMainComponent() {
    return (
        <HashRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about-me" component={AboutMe} />
        </HashRouter>
    )
}

export default RoutesMainComponent