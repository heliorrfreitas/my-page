import React from "react"
import "./styles.css"

import defaultImg from "../../assets/screenshots/defaultScreenshot.png"
import {screenshots} from "../../assets"

function Card(props) {



    return (
        <div className="card">
            <h4>{props.data.title}</h4> {console.log(screenshots.join(", "))}
            <img src={screenshots[props.data.id] ? screenshots[props.data.id] : defaultImg} alt="" />
            <p className="short-description">{props.data.shortDescription}</p>
            <p className="tags">Tags: {props.data.tags.join(", ")}</p>
            <a className="button-to-detail" href={props.data.linkToProject} >View More</a>
        </div>
    )
}
export default Card;