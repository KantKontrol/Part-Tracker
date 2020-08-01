import React from "react";
import LoginForm from "../components/LoginForm";

 class Login extends React.Component{





    render() {
        return (
            <div className="container">

                <div className="row">
                        <div className="col s4"></div>

                        <div className="col s4">
                            <LoginForm />
                        </div>

                        <div className="col s4"></div>
                </div>

            </div>
        );
    }
}

export default Login;