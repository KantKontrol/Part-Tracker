import React from "react";


export default function TableRow(props){

    let { model, part, quantity } = props;

    return (
        <tr>
            <td>{model}</td>
            <td>{part}</td>
            <td>{quantity}</td>
        </tr>
    );
}