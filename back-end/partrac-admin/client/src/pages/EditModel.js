import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/API";
import axios from "axios";
import M from "materialize-css";


class EditModel extends React.Component {

    constructor(){
        super();

        this.state = {
            models: []
        }
    }

    componentDidMount = () => {
        this.getModels();
    }

    getModels = () => {
        API.getModels().then(res => {
            this.setState({ models: res.data });
        });
    }

    handleStateChange = ({target}) => { //this handles state change for model name
        let { id, value } = target;

        this.setState({ ...this.state, [id]: value });
    }

    render(){
        return (
            <>
                <Header />
    
                <main className="container push-footer">
    
                    <h3 style={{ textAlign: "center" }}>Edit a Model</h3>
    
                    <div className="row">
                        <div className="col s4">
                            <Link to="/home" className="btn">Back</Link>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col s2 m2 l2"></div>
    
                        <div className="col s12 m8 l8">

                        </div>
    
                        <div className="col s2 m2 l2"></div>
                    </div>
    
                </main>
    
                <Footer />
            </>
        );
    }

}

export default EditModel;
