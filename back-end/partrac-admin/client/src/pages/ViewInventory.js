import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";
import M from "materialize-css";
import API from "../utils/API";
import { Table } from "@material-ui/core";


export default function ViewInventory(){

    const [inventory, setInventory] = useState([]);


    useEffect(() => {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        getInventory();
    }, []);


    const getInventory = () => {
        API.getInventory().then((res) => {
            setInventory(res.data);
        });
    }

    return (
        <>
            <Header />

            <main className="container push-footer">

                <h3 style={{ textAlign: "center" }}>Inventory</h3>

                <div className="row">
                    <div className="col s4">
                        <Link to="/home" className="btn">Back</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col l3 m4 s6">
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
                                { inventory.length > 0 ? inventory.map(e => {
                                    return e.parts.map(p => {
                                        return <TableRow model={e.name} part={p.title} quantity={p.quantity}/>
                                    })
                                }) : <TableRow model="No Data"></TableRow> }
                            </tbody>
                        </table>

                    </div>
                </div>

            </main>

            <Footer />
        </>
    );
}