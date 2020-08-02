import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./pages/Login";
import AdminLanding from "./pages/AdminLanding";
import ViewInventory from "./pages/ViewInventory";


function App() {
  return (
    <Router>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/home" component={AdminLanding}></Route>
      <Route exact path="/viewinventory" component={ViewInventory}></Route>
    </Router>
  );
}

export default App;
