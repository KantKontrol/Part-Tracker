import React from "react";
import "./index.css";


export default function LinkList(props){

    let { titleOne, refOne, titleTwo, refTwo } = props;

    return (
        <ul className="link-list">
            <li><a href={refOne}>{titleOne}</a></li>
            <li><a href={refTwo}>{titleTwo}</a></li>
        </ul>
    );
}