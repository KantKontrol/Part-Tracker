import React from "react";
import "./index.css";

export default function PartSelectDisplay(props){

    let { title } = props;

    return (
        <div className="row">
            <div className="col s6" onClick={() => console.log("Clicked a part!")}>
                <div className="part-image" style={{ backgroundImage: "url(https://via.placeholder.com/150)"}} >
                </div>

                { title ? title : "Part Title"}
            </div>
        </div>
    );
}