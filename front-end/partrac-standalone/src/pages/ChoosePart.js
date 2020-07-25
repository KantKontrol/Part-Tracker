import React from "react";
import VersionStamp from "../components/VersionStamp";
import PartSelectDisplay from "../components/PartSelectDisplay";


export default function ChoosePart(){


    return (
        <div>
            <VersionStamp />

            <div className="container">
                <PartSelectDisplay />

            </div>
        </div>
    );
}