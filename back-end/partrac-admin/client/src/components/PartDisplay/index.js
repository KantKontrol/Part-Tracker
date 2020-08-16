import React from "react";
import "./index.css";

export default function PartDisplay(props){

    let { id, title, quantity, removePart } = props;

    return (
        <div className="row part-display">
            <div className="part-display-text">{title}: {quantity}</div>
            <div className="part-remove-button"><button className="btn" onClick={() => removePart(id)}>Remove Part</button></div>
        </div>
    );
}