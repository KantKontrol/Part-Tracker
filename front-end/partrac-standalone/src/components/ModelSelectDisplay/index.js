import React from "react";
import "./index.css";

export default function ModelSelectDisplay(){


    return (
        <div className="col s4" >
            <div className="picture-cover" style={{ backgroundImage: "url(https://via.placeholder.com/250)"}} onClick={() => console.log("Clicked a model!")}></div>
        </div>
    );
}