import React from "react";
import "./index.css";

export default function ModelSelectDisplay(props){



    return (
        <div className="col s12 m6 xl4" style={{ position: "relative" }}>
            <div className="picture-cover">
            <img className="image-inside" src={props.image} alt="cb" />
                <div className="overlay">
                    <div className="text">
                        {props.title}
                    </div>
                </div>
            </div>
        </div>
    );
}