import React, { useContext } from "react";
import "./index.css";
import PartModal from "../PartModal";
import GContext from "../../utils/GContext";

export default function PartSelectDisplay(props){

    let { id, title, model } = props;
    let { addPart } = useContext(GContext);

    return (
        <div>
            <a className="modal-trigger " href={`#${id}`}>
                <div className="col s6" style={{marginTop: "10px"}}>
                    <div className="part-center">
                        <div className="part-image" style={{ backgroundImage: "url(https://via.placeholder.com/150)"}}></div>
                        <h4 className="part-style">{ title ? title : "Part Title"}</h4>
                    </div>
                </div>
            </a>
            <PartModal id={id} title={title} model={model} addPart={addPart}/>
        </div>
    );
}