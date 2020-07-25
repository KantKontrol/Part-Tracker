import React from "react";
import VersionStamp from "../components/VersionStamp";
import PartSelectDisplay from "../components/PartSelectDisplay";


export default function ChoosePart(){


    return (
        <div>
            <VersionStamp />
            <h4 style={{ width: "max-content", margin: "20px auto"}}>Choose a part to add to package...</h4>

            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <a href="/models" className="btn">{"<- Models"}</a>
                    </div>
                    <div className="col s8"></div>
                </div>
                
                <div className="row">
                    <PartSelectDisplay id={1} title="Screen"/>
                    <PartSelectDisplay id={2} title="Keyboard"/>
                    <PartSelectDisplay id={3} title="Battery"/>
                    <PartSelectDisplay id={4} title="Touchpad Cable"/>
                    <PartSelectDisplay id={5} title="Charging Port"/>
                    <PartSelectDisplay id={6} title="Screen"/>
                </div>
            </div>
        </div>
    );
}