import React, { useEffect } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import M from "materialize-css";


export default function LoginForm(){

    useEffect(()=> {
        let collapsible = document.querySelectorAll(".collapsible");

        M.Collapsible.init(collapsible, {});
    }, []);

    return (
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix"><AccountCircleIcon/></i>
                        <input id="icon_user" type="text" class="validate" />
                        <label for="icon_user">Username</label>
                    </div>
                    <div class="input-field col s12">
                        <i class="material-icons prefix"><LockIcon/></i>
                        <input id="icon_lock" type="password" class="validate" />
                        <label for="icon_lock">Password</label>
                    </div>
                </div>
            </form>
      </div>
    );
}