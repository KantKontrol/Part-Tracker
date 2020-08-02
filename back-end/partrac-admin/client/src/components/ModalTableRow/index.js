import React from "react";
import LogModal from "../LogModal";


export default function TableRow(props){

    let { initials, numParts, id } = props;

    return (
        <>
            <tr>
                <td>{initials}</td>
                <td>{numParts}</td>
                <td><a className="modal-trigger" href={`#${id}`}>View Details</a></td>                
            </tr>
        </>
    );
}