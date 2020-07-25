import React from "react";
import VersionStamp from "../components/VersionStamp";

export default function CheckSubmit(){


    return (
        <div>
            <VersionStamp />

            <h1>Verify your items...</h1>
            <div className="container">


                <div className="row">
                    <div className="col s2">
                        <button>Submit items</button>
                    </div>
                    <div className="col s10"></div>
                </div>
            </div>
        </div>
    );
}