import React from "react";
import VersionStamp from "../components/VersionStamp";
import ModelSelectDisplay from "../components/ModelSelectDisplay";

export default function ChooseModel(){



    return (
        <div>
            <VersionStamp />
            <h1 style={{ width: "max-content", margin: "20px auto"}}>Choose a Model...</h1>

            <div className="container">
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