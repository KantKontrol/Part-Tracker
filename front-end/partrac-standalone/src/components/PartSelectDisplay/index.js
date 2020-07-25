import React from "react";
import "./index.css";
import PartModal from "../PartModal";

export default function PartSelectDisplay(props){

    let { id, title, model } = props;

    return (
        <div>
            <a className="modal-trigger" href={`#${id}`}>
                <div className="col s6" style={{marginTop: "10px"}}>
                    <div className="part-center">
                        <div className="part-image" style={{ backgroundImage: "url(https://via.placeholder.com/150)"}}></div>
                        <h4 className="part-style">{ title ? title : "Part Title"}</h4>
                    </div>
                </div>
            </a>
            <PartModal id={id} title={title} model={model}/>
        </div>
    );
}