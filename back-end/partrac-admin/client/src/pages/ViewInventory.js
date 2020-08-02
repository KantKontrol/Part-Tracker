import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import M from "materialize-css";



export default function ViewInventory(){


    useEffect(() => {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }, []);

    return (
        <>
            <Header />
            <div className="container">

                <h3 style={{ textAlign: "center" }}>Inventory</h3>

                <div className="row">
                    <div className="col s4">
                        <Link to="/home" className="btn">Back</Link>
                    </div>
                </div>

                <div className="row">
                    <div class="input-field col s3">
                        <select>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                        <label>Select model(s)...</label>
                    </div>
                </div>

            </div>
        </>
    );
}