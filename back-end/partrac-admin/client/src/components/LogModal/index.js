import React, { Component } from "react";
import M from "materialize-css";
import LogDataObj from "../LogDataObj";



class LogModal extends Component {

    constructor(props){
        super(props);

        this.state = {
          props
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
        dismissible: true,
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
                <h4>Log Details</h4>
                <div>DATE</div>
                <h4><strong>Log</strong></h4>
                <p>{`Someone with initials ${this.props.details.initials} checked out ${this.props.details.quantity} parts.`}</p>
                <h4><strong>Parts</strong></h4>
                <div className="col s4" style={{ overflowY: "scroll", maxHeight: "150px"}}>
                  { this.props.details.models ? this.props.details.models.map(e => {
                      return <LogDataObj title={e.name} parts={e.parts}/>
                  }) : <h4>No Data Available</h4>}
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
          </div>
        </>
      );
    }
  }

export default LogModal;
