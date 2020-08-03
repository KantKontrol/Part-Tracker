import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Login from "./pages/Login";
import AdminLanding from "./pages/AdminLanding";
import ViewInventory from "./pages/ViewInventory";
import ActivityLog from './pages/ActivityLog';
import AddModel from "./pages/AddModel";


function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/home"></Redirect>
      </Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/home" component={AdminLanding}></Route>
      <Route exact path="/viewinventory" component={ViewInventory}></Route>
      <Route exact path="/log" component={ActivityLog}></Route>
      <Route exact path="/addmodel" component={AddModel}></Route>
    </Router>
  );
}

export default App;
