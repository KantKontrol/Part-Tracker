import React from "react";
import Header from "../components/Header";
import LinkList from "../components/LinkList";
import Footer from "../components/Footer";

export default function AdminLanding(){

    return (
        <div>
            <Header />
            

            <div className="container">
                <div className="row">
                    <div className="col s4">

                        <div className="section">
                            <div className="header-title">Manage Data</div>
                            <LinkList titleOne="View Inventory" refOne="/viewinventory"  titleTwo="View Activiy Log"  refTwo="/log"/>
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

            <Footer />
        </div>
    );
}