import React from "react";
import "./index.css";

export default function PartSelectDisplay(props){

    let { title } = props;

    return (
            <div className="col s6" style={{marginTop: "10px"}} onClick={() => console.log("Clicked a part!")}>
                <div className="part-center">
                    <div className="part-image" style={{ backgroundImage: "url(https://via.placeholder.com/150)"}}></div>
                    <h4 className="part-style">{ title ? title : "Part Title"}</h4>
                </div>
            </div>
    );
}