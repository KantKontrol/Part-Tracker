import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TableRow from "../components/TableRow";
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

            <main className="container">

                <h3 style={{ textAlign: "center" }}>Inventory</h3>

                <div className="row">
                    <div className="col s4">
                        <Link to="/home" className="btn">Back</Link>
                    </div>
                </div>

                <div className="row">
                    <div class="input-field col l3 m4 s6">
                        <select>
                            <option value="" disabled selected>Select model(s)</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>Part</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>

                            <tbody>
                                <TableRow model="Dell 3120" part="Screen" quantity="45"/>
                                <TableRow model="HP G5" part="Keyboard" quantity="64"/>
                                <TableRow model="HP G4" part="Keyboard" quantity="23"/>
                            </tbody>
                        </table>

                    </div>
                </div>

            </main>

            <Footer />
        </>
    );
}