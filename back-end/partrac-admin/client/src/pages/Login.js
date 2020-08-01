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

                    <div className="row">
                        <div className="col s1"></div>
                        <div className="col s10">
                            <div className="login-title">Partrac</div>
                            <div className="login-subtitle">Admin</div>
                        </div>
                        <div className="col s1"></div>
                    </div>

                    <div className="row">
                        <div className="col m3 l4"></div>

                        <div className="col s12 m6 l4">
                            <LoginForm username={this.state.username} password={this.state.password}  updateInput={this.updateInput} />
                        </div>

                        <div className="col m3 l4"></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;