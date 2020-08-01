import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


export default function LinkList(props){

    let { titleOne, refOne, titleTwo, refTwo } = props;

    return (
        <ul className="link-list">
            <li><Link to={refOne}>{titleOne}</Link></li>
            <li><Link to={refTwo}>{titleTwo}</Link></li>
        </ul>
    );
}