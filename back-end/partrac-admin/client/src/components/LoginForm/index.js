import React, { useEffect } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import M from "materialize-css";


export default function LoginForm(props){

    let { username, password, updateInput} = props;

    useEffect(()=> {
        let collapsible = document.querySelectorAll(".collapsible");

        M.Collapsible.init(collapsible, {});
        console.log(username)
    }, []);

    return (
        <div className="row">
            <form className="col s12">
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
            </form>
      </div>
    );
}