import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModelForm from "../components/ModelForm";

export default function AddModel(){


    return (
        <>
            <Header />



            <main className="container push-footer">

                <h3 style={{ textAlign: "center" }}>Add a Model</h3>

                <div className="row">
                    <div className="col s4">
                        <Link to="/home" className="btn">Back</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col s2 m2 l2"></div>

                    <div className="col s8 m8 l8">
                        <ModelForm />
                    </div>

                    <div className="col s2 m2 l2"></div>
                </div>


            </main>


            <Footer />
        </>
    );
}