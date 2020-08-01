import React from "react";
import LoginForm from "../components/LoginForm";

 class Login extends React.Component{

    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        }
    }

    updateInput = (event) => {
        let name = event.target.id;
        let value = event.target.value;
        this.setState({ ...this.state, [name]: value });
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                        <div className="col s4"></div>

                        <div className="col s4">
                            <LoginForm username={this.state.username} password={this.state.password}  updateInput={this.updateInput} />
                        </div>

                        <div className="col s4"></div>
                </div>

            </div>
        );
    }
}

export default Login;