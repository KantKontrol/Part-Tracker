import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ChooseModel from "./pages/ChooseModel";
import ChoosePart from "./pages/ChoosePart";
import CheckSubmit from "./pages/CheckSubmit";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Route exact path="/" component={ChooseModel} />
      <Route path="/checksubmit" component={CheckSubmit} />
      <Route path="/choosepart" component={ChoosePart} />
      <Footer />
    </Router>
  );
}

export default App;
