import React, { useEffect } from "react";
import M from "materialize-css";
import "./index.css";

import PartInput from "../PartInput";

export default function ModelForm(props){

    let { addModel, stateChange, processImage, updatePartQuantity, state } = props;

    useEffect(() => {
        let collapsible = document.querySelectorAll(".collapsible");
        M.Collapsible.init(collapsible, {});
    }, []);

    return (
        <div className="col s12 model-form-style">

            <div className="row">
                <div className="input-field col s7 m4 l4">
                    <input id="model_name" type="text" className="validate" value={state.model_name} onChange={stateChange} />
                    <label htmlFor="model_name">Model Name</label>
                </div>
                <div className="input-field col s12 m4 l4">
                    <input id="file_upload" type="file" accept="image/png, image/jpeg" onChange={(e) => processImage(e)}/>
                </div>
            </div>

            <h5 style={{ textAlign: "center" }}>Add Parts</h5>


            <div className="row">

            </div>

            <div className="row">
                <div className="col s12 m12 l12">
                    <PartInput part_name={state.part_name} part_quantity={state.part_quantity} updatePartQuantity={updatePartQuantity} stateChange={stateChange} />
                </div>
            </div>

            <div className="row">
                <div className="col s8"></div>
                <div className="col s4">
                    <button className="btn" style={{ float: "right" }} onClick={() => addModel()}>Add Model</button>
                </div>
            </div>
            
        </div>
    );
}