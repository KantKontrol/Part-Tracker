import React from "react";
import QuantityModule from "../QuantityModule";

export default function PartInput(props){

    let { part_name, part_quantity, stateChange } = props;

    return (
        <div className="row" style={{ position: "relative"}}>
            <div className="col s8">
                <div className="input-field inline">
                    <input id="part_name" type="text" className="validate" value={part_name} onChange={stateChange} />
                    <label htmlFor="part_name">Part Name</label>
                </div>
            </div>
            <QuantityModule quantity={part_quantity}/>
        </div>
    );
}