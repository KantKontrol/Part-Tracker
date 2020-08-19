import React from "react";
import QuantityModule from "../QuantityModule";

export default function PartInput(props){

    let { part_name, part_quantity, updatePartQuantity, handleNumInput, addPart, stateChange } = props;

    return (
        <div className="row">
            <div className="col s12 m12 l4">
                <div className="input-field">
                    <input id="part_name" type="text" className="validate" value={part_name} onChange={stateChange} />
                    <label htmlFor="part_name">Part Name</label>
                </div>
            </div>
            <div className="col s12 m6 l4">
                <QuantityModule quantity={part_quantity} updatePartQuantity={updatePartQuantity} handleNumInput={handleNumInput}/>
            </div>
            <div className="col s12 m6 l4" style={{ marginTop: "15px"}}>
                <button className="btn" style={{ margin: 0 + ' auto', display: "block"}} onClick={() => addPart()}>Add a Part</button>
            </div>
        </div>
    );
}