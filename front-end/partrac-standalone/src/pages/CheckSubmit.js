import React, { useContext } from "react";
import { Link } from "react-router-dom";
import VersionStamp from "../components/VersionStamp";
import GContext from "../utils/GContext";

export default function CheckSubmit(props){

    const {initials, setInitials } = useContext(GContext);

    return (
        <div>
            <VersionStamp />

            <h1 style={{ width: "max-content", margin: "20px auto"}}>Verify your items...</h1>
            <div className="container">

                <div className="row">
                    <div className="col s4">
                        <Link to="/" className="btn">{"<- Models"}</Link>
                    </div>
                    <div className="col s8"></div>
                </div>


                <div className="row">
                    <div className="col s9"></div>
                    <div className="col s1">
                        <input placeholder="Initials" type="text" className="validate" maxLength="2" onChange={setInitials} value={initials} />
                    </div>
                    <div className="col s2">
                        <button className={initials.length < 2 ? "btn disabled" : "btn"} >Submit items</button>
                    </div>
                </div>
            </div>
        </div>
    );
}