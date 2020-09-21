import React from "react"
import "./styles.css"

function Card(props) {
    return (
        <div className="card">
            <h4>{props.data.title}</h4>
            <img src={props.data.img} alt="" />
            <p className="short-description">{props.data.shortDescription}</p>
            <p className="tags">{props.data.tags.join(" ")}</p>
            <button>View</button>
        </div>
    )
}
export default Card;