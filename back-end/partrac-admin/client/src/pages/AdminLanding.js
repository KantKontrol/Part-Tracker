import React from "react";
import Header from "../components/Header";

export default function AdminLanding(){

    return (
        <div>
            <Header />
            

            <div className="container">
                <div className="row">
                    <div className="col s4">

                        <div className="section">
                            <div className="header-title">Manage Data</div>
                        </div>

                        <div className="divider"></div>

                        <div className="section">
                            <div className="header-title">Manage Chromebooks</div>
                        </div>

                    </div>

                    <div className="col s8"></div>
                </div>
            </div>
        </div>
    );
}