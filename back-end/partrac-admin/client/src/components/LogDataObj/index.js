import React from "react";

export default function LogDataObj(props){

    const { title, parts } = props;

    return (
    <>
            <div>{ title.length > 0 ? title : "No Title"}</div>
            <ul>
                {
                    parts ? parts.map(e => {
                        return <li>{e.title}: {e.quantity}</li>
                    }) : <li>No Parts</li>
                }
            </ul> 
        </>
    );
}