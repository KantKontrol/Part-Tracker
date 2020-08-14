import React from "react";


export default function TableRow(props){

    let { initials, quantity, id, modifyCurrentLog } = props;

    return (
        <>
            <tr>
                <td>{initials}</td>
                <td>{quantity}</td>
                <td><button data-target={`testModal`} className="btn modal-trigger" onClick={() => modifyCurrentLog(props)}>View Details</button></td>                
            </tr>
        </>
    );
}