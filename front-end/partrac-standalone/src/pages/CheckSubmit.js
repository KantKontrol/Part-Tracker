import React from "react";
import { Link } from "react-router-dom";
import VersionStamp from "../components/VersionStamp";

export default function CheckSubmit(){


    return (
        <div>
            <VersionStamp />

            <h1>Verify your items...</h1>
            <div className="container">

                <div className="row">
                    <div className="col s4">
                        <Link to="/" className="btn">{"<- Models"}</Link>
                    </div>
                    <div className="col s8"></div>
                </div>


                <div className="row">
                    <div className="col s2">
                        <button >Submit items</button>
                    </div>
                    <div className="col s10"></div>
                </div>
            </div>
        </div>
    );
}