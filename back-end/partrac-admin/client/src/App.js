import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./pages/Login";
import AdminLanding from "./pages/AdminLanding";


function App() {
  return (
    <Router>
        <Login />
    </Router>
  );
}

export default App;
