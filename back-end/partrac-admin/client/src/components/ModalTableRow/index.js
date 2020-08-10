import React from "react";


export default function TableRow(props){

    let { initials, numParts, id, modifyCurrentLog } = props;

    return (
        <>
            <tr>
                <td>{initials}</td>
                <td>{numParts}</td>
                <td><button data-target={`testModal`} className="btn modal-trigger" onClick={() => modifyCurrentLog(props)}>View Details</button></td>                
            </tr>
        </>
    );
}