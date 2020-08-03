import React from "react";
import Header from "../components/Header";
import LinkList from "../components/LinkList";
import Footer from "../components/Footer";

export default function AdminLanding(){

    return (
        <>
            <Header />
            
            <main className="container push-footer">
                    <div className="row">

                        <div className="col s12 m12 l6">

                            <div className="section">
                                <div className="header-title">Manage Data</div>
                                <LinkList titleOne="View Inventory" refOne="/viewinventory"  titleTwo="View Activiy Log"  refTwo="/log"/>
                            </div>

                            <div className="divider"></div>

                            <div className="section">
                                <div className="header-title">Manage Chromebooks</div>
                                <LinkList titleOne="Add a Model" refOne="/addmodel"  titleTwo="Edit a Model"  refTwo="/home"/>
                            </div>

                        </div>
                        
                    </div>
            </main>

            <Footer />
        </>
    );
}