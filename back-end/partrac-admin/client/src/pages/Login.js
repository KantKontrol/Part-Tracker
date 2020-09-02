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

    updateInput = ({ target }) => {
        let { id,value } = target;
        this.setState({ ...this.state, [id]: value });
    }

    handleSubmit = () => {

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
                        <div className="col m2 l3"></div>

                        <div className="col s12 m8 l6">
                            <LoginForm username={this.state.username} password={this.state.password}  updateInput={this.updateInput} handleSubmit={this.handleSubmit} />
                        </div>

                        <div className="col m2 l3"></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;