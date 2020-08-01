import React from "react";
import VersionStamp from "../components/VersionStamp";
import PartSelectDisplay from "../components/PartSelectDisplay";
import { Link } from "react-router-dom";


export default function ChoosePart(){


    return (
        <div>
            <VersionStamp />
            <h4 style={{ width: "max-content", margin: "20px auto"}}>Choose a part to add to package...</h4>

            <div className="container ">
                <div className="row">
                    <div className="col s4">
                        <Link to="/" className="btn">{"<- Models"}</Link>
                    </div>
                    <div className="col s8"></div>
                </div>
                
                <div className="row">
                    <PartSelectDisplay id={1} title="Screen" model="Dell 3120"/>
                    <PartSelectDisplay id={2} title="Keyboard" model="Dell 3120"/>
                    <PartSelectDisplay id={3} title="Battery" model="Dell 3120"/>
                    <PartSelectDisplay id={4} title="Touchpad Cable" model="Dell 3120"/>
                    <PartSelectDisplay id={5} title="Charging Port" model="Dell 3120"/>
                    <PartSelectDisplay id={6} title="Screen" model="Dell 3120"/>
                </div>
            </div>
        </div>
    );
}