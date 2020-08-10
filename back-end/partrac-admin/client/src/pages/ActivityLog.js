import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalTableRow from "../components/ModalTableRow";
import LogModal from "../components/LogModal";

import API from "../utils/API";

export default function ActivityLog(){

    const [logs, setLogs] = useState([]);
    const [currentLog, setCurrentLog] = useState({});

    const getLogs = () => {
        API.getLogs().then(res => {
            setLogs(res.data);
        });
    }

    const modifyCurrentLog = (data) => {
        setCurrentLog(data);
    }

    useState(() => {
        getLogs();
    });


    return (
        <>
            <Header />

            <main className="container push-footer">

                <h3 style={{ textAlign: "center" }}>Activity Log</h3>

                <div className="row">
                    <div className="col s4">
                        <Link to="/home" className="btn">Back</Link>
                    </div>
                </div>


                <div className="row">
                    <div className="col s2"></div>

                    <div className="col s8">
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Initials</th>
                                    <th>Parts Checked out</th>
                                    <th>Details</th>
                                </tr>
                            </thead>

                            <tbody>
                                <ModalTableRow id="1" initials="ND" numParts="4"  modifyCurrentLog={modifyCurrentLog}/>
                                <ModalTableRow id="2" initials="ND" numParts="6" />
                                <ModalTableRow id="3" initials="BS" numParts="13" />
                            </tbody>
                        </table>
                    </div>

                    <div className="col s2"></div>
                </div>
                <LogModal id="testModal"/>
            </main>

            <Footer />
        </>
    );
}