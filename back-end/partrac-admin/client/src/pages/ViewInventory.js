import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";
import M from "materialize-css";
import API from "../utils/API";


export default function ViewInventory(){

    const [inventory, setInventory] = useState([]);
    const [models, setModels] = useState([]);


    useEffect(() => {
        getInventory();
        getModels();
    }, []);


    const getInventory = () => {
        API.getInventory().then((res) => {
            setInventory(res.data);
        });
    }

    const getModels = () => {
        API.getModels().then(res => {
            setModels(res.data);
            let elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
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
                    <div className="input-field col l3 m5 s7">
                        <select>
                            <option value="" disabled>Select model(s)</option>
                            <option value="1">All</option>
                            { models ? models.map((e, i) => {
                                return <option key={i} value={i}>{e}</option>
                            }): <option>NONE</option>}
                        
                        </select>
                        <label>Select model(s)</label>
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
                                        return <TableRow key={e._id} model={e.name} part={p.title} quantity={p.quantity}/>
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