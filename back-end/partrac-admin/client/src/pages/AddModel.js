import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModelForm from "../components/ModelForm";
import axios from "axios";


class AddModel extends React.Component {

    constructor(){
        super()

        this.state = {
            model_name: "",
            parts: [],
            keyboard_quantity: 0,
            screen_quantity: 0,
            battery_quantity: 0,
            mobo_quantity: 0,
            multerImg: "",
            multerFormData: new FormData()
        }
    }

    handleStateChange = ({target}) => {
        let { id, value } = target;

        if(id !== "model_name"){ //this works for now but kinda looks nasty
            if(value >= 0)
                this.setState({ ...this.state, [id]: parseInt(value) });
        }
        else
            this.setState({ ...this.state, [id]: value });
    }

    processImage = (e) => {

        let imageFormObj = new FormData();
        imageFormObj.append("imageName", 'cus-image' + Date.now());
        imageFormObj.append("imageData", e.target.files[0]);

        this.setState({
            multerImg: URL.createObjectURL(e.target.files[0]),
            multerFormData: imageFormObj
        });


      //  console.log(this.state.multerFormData.get('imageName'))
    }

    addModel = () => {
        axios.post("/model", this.state).then(res => {
            console.log(res.data._id);

            console.log(res.data)

            let formData = this.state.multerFormData;
            console.log(formData.has("model_id"));
            if(!formData.has("model_id")){
                formData.append("model_id", res.data._id);
            }
        
            axios.post("/model/image", formData).then(res => {
                console.log(res);
            });
        })
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
                            <ModelForm state={this.state} addModel={this.addModel} processImage={this.processImage} stateChange={this.handleStateChange}/>
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
