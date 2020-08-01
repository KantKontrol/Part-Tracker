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
                            <h1>Test</h1>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h1>Test 2</h1>
                        </div>
                    </div>
                    <div className="col s8">

                    </div>
                </div>
            </div>
        </div>
    );
}