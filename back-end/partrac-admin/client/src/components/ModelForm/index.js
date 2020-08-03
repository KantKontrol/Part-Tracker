import React from "react";
import "./index.css";

export default function ModelForm(props){


    let { addModel } = props;

    return (
        <div className="col s12 model-form-style">

            <div className="row">
                <div className="input-field col s4">
                    <input id="model_name" type="text" className="validate" />
                    <label htmlFor="model_name">Model Name</label>
                </div>
            </div>

            <h5 style={{ textAlign: "center" }}>Enter Part Quantity</h5>

            <div className="row">
                <div className="input-field col s4">
                        <input id="keyboard_quantity" type="number" className="validate" />
                        <label htmlFor="keyboard_quantity">Keyboard Quantity</label>
                </div>
                <div className="input-field col s4">
                        <input id="screen_quantity" type="number" className="validate" />
                        <label htmlFor="screen_quantity">Screen Quantity</label>
                </div>
                <div className="input-field col s4">
                        <input id="battery_quantity" type="number" className="validate" />
                        <label htmlFor="battery_quantity">Battery Quantity</label>
                </div>
            </div>

            
            <div className="row">
                <div className="input-field col s4">
                        <input id="mobo_quantity" type="number" className="validate" />
                        <label htmlFor="mobo_quantity">Mobo Quantity</label>
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