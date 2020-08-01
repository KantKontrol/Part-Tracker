import React from "react";
import Header from "../components/Header";
import LinkList from "../components/LinkList";

export default function AdminLanding(){

    return (
        <div>
            <Header />
            

            <div className="container">
                <div className="row">
                    <div className="col s4">

                        <div className="section">
                            <div className="header-title">Manage Data</div>
                            <LinkList titleOne="View Inventory" refOne="/home"  titleTwo="View Activiy Log"  refTwo="/home"/>
                        </div>

                        <div className="divider"></div>

                        <div className="section">
                            <div className="header-title">Manage Chromebooks</div>
                            <LinkList titleOne="Add a Model" refOne="/home"  titleTwo="Edit a Model"  refTwo="/home"/>
                        </div>

                    </div>

                    <div className="col s8"></div>
                </div>
            </div>
        </div>
    );
}