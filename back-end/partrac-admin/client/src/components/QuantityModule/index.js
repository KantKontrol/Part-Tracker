import React from "react";
import "./index.css";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function QuantityModule(props){

    let { quantity } = props;

    return (
        <div className="col s4 m4 l4" style={{ marginTop: "15px"}}>
            <i className="material-icons prefix" style={{ float: "left", marginTop: "0px"}}><ArrowDropUpIcon style={{ fontSize: "32px",  cursor: "pointer"}}/></i>
        
            <div className="quantity-text"  style={{ float: "left"}}>{quantity}</div>
        
            <i className="material-icons prefix"  style={{ float: "left", marginTop: "0px"}}><ArrowDropDownIcon style={{ fontSize: "32px", cursor: "pointer"}}/></i>
        </div>
    );
}