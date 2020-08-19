import React from "react";
import "./index.css";

export default function ModelSelectDisplay(props){



    return (
        <div className="col s12 m6 xl4">
            <div className="picture-cover " style={{ backgroundImage: "url(https://via.placeholder.com/250)"}}>
                <div className="overlay">
                    <div className="text">
                        {props.title}
                    </div>
                </div>
            </div>
        </div>
    );
}