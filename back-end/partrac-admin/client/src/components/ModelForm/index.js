import React, { useEffect } from "react";
import M from "materialize-css";
import "./index.css";

export default function ModelForm(props){

    let { addModel, stateChange, state } = props;


    useEffect(() => {
        let collapsible = document.querySelectorAll(".collapsible");
        let label = document.querySelectorAll("label");

        M.Collapsible.init(collapsible, {});
        
    }, []);

    return (
        <div className="col s12 model-form-style">

            <div className="row">
                <div className="input-field col s4">
                    <input id="model_name" type="text" className="validate" value={state.model_name} onChange={stateChange} />
                    <label htmlFor="model_name">Model Name</label>
                </div>
            </div>

            <h5 style={{ textAlign: "center" }}>Enter Part Quantity</h5>

            <div className="row">
                <div className="input-field col s4">
                        <input id="keyboard_quantity" type="number" min="0" className="validate" value={state.keyboard_quantity} onChange={stateChange} />
                        <label htmlFor="keyboard_quantity"  className="active">Keyboard Quantity</label>
                </div>
                <div className="input-field col s4">
                        <input id="screen_quantity" type="number" min="0" className="validate" value={state.screen_quantity} onChange={stateChange}/>
                        <label htmlFor="screen_quantity"  className="active">Screen Quantity</label>
                </div>
                <div className="input-field col s4">
                        <input id="battery_quantity" type="number" min="0" className="validate" value={state.battery_quantity} onChange={stateChange}/>
                        <label htmlFor="battery_quantity"  className="active">Battery Quantity</label>
                </div>
            </div>

            
            <div className="row">
                <div className="input-field col s4">
                        <input id="mobo_quantity" type="number" min="0" className="validate" value={state.mobo_quantity} onChange={stateChange}/>
                        <label htmlFor="mobo_quantity"  className="active">Mobo Quantity</label>
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