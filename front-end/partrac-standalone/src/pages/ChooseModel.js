import React from "react";
import ModelSelectDisplay from "../components/ModelSelectDisplay";

export default function ChooseModel(){



    return (
        <div>
            <h1>Choose Model</h1>

            <div className="container" style={{ flex: "1 0 auto"}}>
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