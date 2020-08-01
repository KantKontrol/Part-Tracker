import React from "react";
import VersionStamp from "../components/VersionStamp";
import ModelSelectDisplay from "../components/ModelSelectDisplay";
import { Link } from "react-router-dom";

export default function ChooseModel(){

    return (
        <div>
            <VersionStamp />
            <h1 style={{ width: "max-content", margin: "20px auto"}}>Choose a Model...</h1>
            

            <div className="container ">
                <div className="row">
                    <div className="col s12">
                        <Link to="/checksubmit" className="btn check-sub-button">Check Items and Submit</Link>
                    </div>
                </div>
                <div className="row">
                    <ModelSelectDisplay />
                    <ModelSelectDisplay />
                    <ModelSelectDisplay />
                    <ModelSelectDisplay />
                    <ModelSelectDisplay />
                    <ModelSelectDisplay />
                </div>
            </div>
        </div>
    );
}