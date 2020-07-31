import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ChooseModel from "./pages/ChooseModel";
import ChoosePart from "./pages/ChoosePart";
import CheckSubmit from "./pages/CheckSubmit";
import Footer from "./components/Footer";
import GContext from "./utils/GContext";

function App() {


  const [appState, setAppState] = useState({
    package: [],
    initials: "",
    setInitials: function(event){
      let input = event.target.value;
      setAppState({ ...appState, initials: input })
    }
  });

  return (
    <GContext.Provider value={appState}>
      <Router>
        <Route exact path="/" component={ChooseModel} />
        <Route path="/checksubmit" component={CheckSubmit} />
        <Route path="/choosepart" component={ChoosePart} />
        <Footer />
      </Router>
    </GContext.Provider>
  );
}

export default App;
