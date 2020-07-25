import React from "react";
import "./index.css";

export default function PartModal(props){

    let { id, title, image } = props;

    return (
        <div id={id} className="modal">
            <div className="modal-content">
                <img className="modal-image" src="https://via.placeholder.com/150" alt="..."></img>
                <h4>{title}</h4>
                <p>Enter the quantity</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
    );
}