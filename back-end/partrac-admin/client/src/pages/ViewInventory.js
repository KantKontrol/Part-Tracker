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
    const [filterModel, setFilterModel] = useState("All");


    useEffect(() => {
        loadSelect();
        getInventory();
        getModels();
        setModel();
    }, []);

    const loadSelect = () => {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    const getInventory = () => {
        API.getInventory().then((res) => {
            setInventory(res.data);
        });
    }

    const getModels = () => {
        API.getModels().then(res => {
            setModels(res.data);
            loadSelect();
        });
    }

    const setModel = () => {
        let option = document.getElementById('modelSelect');
        option.onchange = ({target}) => {
            setFilterModel(target.value);
        }
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
                        <select id="modelSelect">
                            <option value="" disabled>Select model(s)</option>
                            <option value="All">All</option>
                            { models ? models.map((e, i) => {
                                return <option key={i} value={e}>{e}</option>
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
                                { 
                                    inventory.length > 0 ? inventory.map(e => {

                                        if(filterModel === "All")
                                            return e.parts.map(p => {
                                                return <TableRow key={e._id + p.title} model={e.name} part={p.title} quantity={p.quantity}/>
                                            })
                                        if(e.name === filterModel)
                                            return e.parts.map(p => {
                                                return <TableRow key={e._id + p.title} model={e.name} part={p.title} quantity={p.quantity}/>
                                            })
                                    }) : <TableRow model="No Data"></TableRow>  
                                }
                            </tbody>
                        </table>

                    </div>
                </div>

            </main>

            <Footer />
        </>
    );
}