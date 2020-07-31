import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./index.css";



class PartModal extends Component {

    constructor(props){
        super(props);

        console.log(props)

        this.state = {
          props,
          quantity: 0
        }

    }

  
    setQuantity = (event) => {
      let value = event.target.value;
      if(value >= 0)
        this.setState({...this.state, quantity: value });
    }

    componentDidMount() {
      const options = {
        onOpenStart: () => {
          console.log("Open Start");
        },
        onOpenEnd: () => {
          console.log("Open End");
        },
        onCloseStart: () => {
          console.log("Close Start");
        },
        onCloseEnd: () => {
          console.log("Close End");
        },
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: false,
        startingTop: "4%",
        endingTop: "10%"
      };
      M.Modal.init(this.Modal, options);
      // If you want to work on instance of the Modal then you can use the below code snippet 
      // let instance = M.Modal.getInstance(this.Modal);
      // instance.open();
      // instance.close();
      // instance.destroy();
    }
  
    render() {
      return (
        <> 
          <div
            ref={Modal => {
              this.Modal = Modal;
            }}
            id={this.props.id}
            className="modal"
          >
            <div className="modal-content">
                <img className="modal-image" src="https://via.placeholder.com/150" alt="..."></img>
                <h4>{this.props.title + " - " + this.props.model}</h4>
                <p>Enter the quantity...</p>
                <div className="col s4">
                    <div className="input-field inline">
                        <input placeholder="0" id="quantity_inline" type="number" className="validate" value={this.state.quantity} onChange={this.setQuantity}/>
                    </div>
                    pc/pcs.
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                <a href="#!" onClick={() => this.props.addPart(this.state)} className="modal-close waves-effect waves-green btn-flat">Submit</a>
            </div>
          </div>
        </>
      );
    }
  }

export default PartModal;
