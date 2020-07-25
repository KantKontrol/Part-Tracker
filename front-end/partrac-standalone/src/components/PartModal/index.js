import React from "react";
import "./index.css";

export default function PartModal(props){

    let { id, title, model } = props;

    return (
        <div id={id} className="modal">
            <div className="modal-content">
                <img className="modal-image" src="https://via.placeholder.com/150" alt="..."></img>
                <h4>{title + " - " + model}</h4>
                <p>Enter the quantity...</p>
                <div className="col s4">
                    <div className="input-field inline">
                        <input placeholder="0" id="quantity_inline" type="number" className="validate" />
                    </div>
                    pc/pcs.
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Submit</a>
            </div>
        </div>
    );
}