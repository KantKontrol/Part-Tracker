import React, { useEffect } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import M from "materialize-css";
import "./index.css";


export default function LoginForm(props){

    let { username, password, updateInput, handleSubmit} = props;

    useEffect(()=> {
        let collapsible = document.querySelectorAll(".collapsible");
        M.Collapsible.init(collapsible, {});
    }, []);

    return (
        <div className="row">
            <div className="col s12 login-style">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix"><AccountCircleIcon/></i>
                        <input id="username" type="text" className="validate" value={username} onChange={updateInput} />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix"><LockIcon/></i>
                        <input id="password" type="password" className="validate" value={password} onChange={updateInput} />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <button className="btn" style={{ float: 'right', marginRight: "30px"}} onClick={handleSubmit} >Login</button>
                </div>
            </div>
      </div>
    );
}