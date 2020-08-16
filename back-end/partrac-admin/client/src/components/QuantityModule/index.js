import React from "react";
import "./index.css";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function QuantityModule(props){

    let { quantity, updatePartQuantity } = props;

    return (
        <div className="row quantity-module">
            <i className="material-icons prefix" onClick={() => updatePartQuantity(1)} style={{ float: "left", marginTop: "0px"}}><ArrowDropUpIcon style={{ fontSize: "40px",  cursor: "pointer", textAlign: "center", color: "#26a69a"}}/></i>
            <div className="quantity-text "  style={{ float: "left"}}>{quantity}</div>
            <i className="material-icons prefix" onClick={() => updatePartQuantity(0)}  style={{ float: "left", marginTop: "0px"}}><ArrowDropDownIcon style={{ fontSize: "40px", cursor: "pointer", textAlign: "center", color: "#26a69a"}}/></i>
        </div>
    );
}