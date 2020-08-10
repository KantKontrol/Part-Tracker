import React from "react";


export default function TableRow(props){

    let { initials, numParts, id, setCurrentLog } = props;

    return (
        <>
            <tr>
                <td>{initials}</td>
                <td>{numParts}</td>
                <td><button data-target={`#${id}`} className="btn modal-trigger" onClick={() => setCurrentLog(props)}>View Details</button></td>                
            </tr>
        </>
    );
}