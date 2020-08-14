import React, { useState, useEffect } from "react";
import VersionStamp from "../components/VersionStamp";
import ModelSelectDisplay from "../components/ModelSelectDisplay";
import { Link } from "react-router-dom";
import API from "../utils/API";

export default function ChooseModel(){

    const [models, setModels] = useState([]);


    const getModels = () => {
        API.getModels().then(res => {
            console.log(res.data)
            setModels(res.data);
        });
    }

    useEffect(() => {
        getModels();
    }, []);

    
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
                    { models ? models.map(e => {
                        return <ModelSelectDisplay key={e} title={e}/>;
                    }) : <h1>No Models Found</h1>}
                </div>
            </div>
        </div>
    );
}