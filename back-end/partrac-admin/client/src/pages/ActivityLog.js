import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TableRow from "../components/TableRow";

export default function ActivityLog(){

    return (
        <div>
            <Header />

            <div className="container">

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
                                </tr>
                            </thead>

                            <tbody>
                                <TableRow model="ND" part="4" />
                                <TableRow model="ND" part="6" />
                                <TableRow model="BS" part="13" />
                            </tbody>
                        </table>
                    </div>

                    <div className="col s2"></div>
                </div>
            </div>
        </div>
    );
}