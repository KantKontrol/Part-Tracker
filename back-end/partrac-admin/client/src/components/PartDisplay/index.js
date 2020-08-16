import React from "react";
import "./index.css";

export default function PartDisplay(props){

    let { title, quantity } = props;

    return (
        <div className="row part-display">
            <div className="part-display-text">{title}: {quantity}</div>
            <div className="part-remove-button"><button className="btn">Remove Part</button></div>
        </div>
    );
}