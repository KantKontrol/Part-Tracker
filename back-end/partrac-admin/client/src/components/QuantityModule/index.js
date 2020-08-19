import React from "react";
import "./index.css";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function QuantityModule(props){

    let { quantity, updatePartQuantity, handleNumInput } = props;

    return (
        <div className="row quantity-module">
            <i className="material-icons prefix showSelect" onClick={() => updatePartQuantity(1)} style={{ float: "left", marginTop: "0px"}}><ArrowDropUpIcon style={{ fontSize: "40px",  cursor: "pointer", textAlign: "center", color: "#26a69a"}}/></i>
            <input type="number" max="4" className="quantity-text" style={{ float: "left", width: "40%", textAlign: "center"}} value={quantity} onChange={handleNumInput}/>
            <i className="material-icons prefix showSelect" onClick={() => updatePartQuantity(0)} style={{ float: "left", marginTop: "0px"}}><ArrowDropDownIcon style={{ fontSize: "40px", cursor: "pointer", textAlign: "center", color: "#26a69a"}}/></i>
        </div>
    );
}