import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModelForm from "../components/ModelForm";
import axios from "axios";
import M from "materialize-css";


class AddModel extends React.Component {

    constructor(){
        super();

        this.state = {
            model_name: "",
            part_name: "",
            part_quantity: 0,
            parts: [],
            multerImg: "",
            multerFormData: this.DefaultImg()
        }
    }

    DefaultImg = () => {
       let def = new FormData();
       def.append("imageName", 'cus-image' + Date.now());
       def.append("imageData", "/assets/images/chrome.jpg");
       return def;
    }

    handleStateChange = ({target}) => { //this handles state change for model name
        let { id, value } = target;

        this.setState({ ...this.state, [id]: value });
    }

    handleNumInput =({target}) => {
        let { value, max } = target;
     
        if(value.length > max){
            value = value.slice(0,max);
        }

        this.setState({ ...this.state, part_quantity: value})
    }

    updatePartQuantity = (direction) => {

        let q = this.state.part_quantity;

        if(direction === 1)
            q++;
        else if(direction === 0 && (q-1) >= 0)
            q--;

        this.setState({ part_quantity: q });
    }

    resetForm = () => {
        this.setState({
            model_name: "",
            part_name: "",
            part_quantity: 0,
            parts: [],
            multerImg: "",
            multerFormData: this.DefaultImg()
        });
    }

    addPart = () => {

        let title = this.state.part_name.trim();
        let quantity = this.state.part_quantity;

        if(title.length > 0){
            if(quantity.length === 0){
                quantity = "0";
                quantity = parseInt(quantity);
            }
            
            let part = {
                title: title,
                quantity: quantity
            }
    
            let updatedParts = this.state.parts;
    
            updatedParts.unshift(part);
    
            this.setState({ parts: updatedParts, part_name: "", part_quantity: 0 });

            M.toast({html: "Part added successfully!", classes: "toast-style-good"});
        }
        else {
            M.toast({html: "Part name must contain be at least 1 character", classes: "toast-style-bad"});
        }
    }

    removePart = (id) => {
        let currentParts = this.state.parts;

        currentParts.splice(id, 1);

        this.setState({ parts: currentParts });
    }

    processImage = (e) => { //this creates a formData object for our uploaded image

        let imageFormObj = new FormData();

        if(e.target.files[0]){
            
            imageFormObj.append("imageName", 'cus-image' + Date.now());
            imageFormObj.append("imageData", e.target.files[0]);
    
            this.setState({
                multerImg: URL.createObjectURL(e.target.files[0]),
                multerFormData: imageFormObj
            });
        }
        else {
            this.setState({
                multerImg: "none",
                multerFormData: this.DefaultImg()
            });
        }
    }

    addModel = () => {

        let modelName = this.state.model_name;

        if(modelName.trim().length === 0){
            M.toast({html: "Model name must contain at least 1 character", classes: "toast-style-bad"});
        }
        else {
            let newModel = {
                model_name: this.state.model_name,
                parts: this.state.parts
            }
    
            axios.post("/model", newModel).then(res => {
    
                M.toast({html: "Uploaded Model", classes: "toast-style-good"});
    
                let formData = this.state.multerFormData;

                console.log(formData)
            
                if(!formData.has("model_id")){ 
                    formData.append("model_id", res.data._id);
                }
    
                M.toast({html: "Uploading Image...", classes: "toast-style-good"});
            
                axios.post("/model/image", formData).then(res => {
                    M.toast({html: "Uploaded Image", classes: "toast-style-good"});
                    this.resetForm();
                }).catch(err => {
                    M.toast({html: "Error uploading image, contact an admin", classes: "toast-style-bad"});
                    console.log(`Contact an admin if problem persists: ${err}`);
                });
            });
        }
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
    
                        <div className="col s12 m8 l8">
                            <ModelForm 
                                state={this.state} 
                                addModel={this.addModel} 
                                processImage={this.processImage} 
                                stateChange={this.handleStateChange} 
                                handleNumInput={this.handleNumInput}
                                updatePartQuantity={this.updatePartQuantity}
                                addPart={this.addPart}
                                removePart={this.removePart}
                            />
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
