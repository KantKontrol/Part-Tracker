import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function ModelSelectDisplay(){


    return (
        <div className="col s4">
            <Link to="/choosepart"><div className="picture-cover" style={{ backgroundImage: "url(https://via.placeholder.com/250)"}}></div></Link>
        </div>
    );
}