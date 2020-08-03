import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModelForm from "../components/ModelForm";


class AddModel extends React.Component {

    constructor(){
        super()

        this.state = {
            model_name: "",
            keyboard_quantity: 0,
            screen_quantity: 0,
            battery_quantity: 0,
            mobo_quantity: 0
        }
    }

    handleStateChange = ({target}) => {
        let { id, value } = target;

        if(id != "model_name"){
            if(value >= 0)
            this.setState({ ...this.state, [id]: value });
        }
        else
            this.setState({ ...this.state, [id]: value });
        
        console.log(this.state)
    }


    render(){
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
                            <ModelForm state={this.state} addModel={function(){}} stateChange={this.handleStateChange}/>
                        </div>
    
                        <div className="col s2 m2 l2"></div>
                    </div>
    
    
                </main>
    
                <Footer />
            </>
        );
    }

}

export default AddModel;
