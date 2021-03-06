import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/API";
import axios from "axios";
import M from "materialize-css";
import ModelSelectDisplay from "../components/ModelSelectDisplay";


class EditModel extends React.Component {

    CancelToken = axios.CancelToken;
    source = this.CancelToken.source();

    constructor(){
        super();



        this.state = {
            models: [],
            currentEdit: {}
        }
    }

    componentDidMount = () => {
        this.getModels();
    }

    componentWillUnmount = () => {
        this.source.cancel();
    }

    getModels = () => {
        API.getModels(this.source).then(res => {
            console.log(res.data)
            this.setState({ models: res.data });
        });
    }

    setCurrentEditModel = () => {

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
                        
                        { this.state.models.length > 0 ? this.state.models.map((e,i) => {
                                return <ModelSelectDisplay key={i} title={e.name} image={e.imageData}/>
                        }) : <div></div> }
                       
                    </div>
    
                </main>
    
                <Footer />
            </>
        );
    }

}

export default EditModel;
