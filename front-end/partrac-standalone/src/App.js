import React, { useState, useEffect } from 'react';
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
    partPackage: [],
    initials: "",
    setInitials: function(event){
      let input = event.target.value;
      setAppState({ ...appState, initials: input })
    },
    addPart: function(partData){

      let { props, quantity } = partData;

      let newPart = {
        id: props.id,
        title: props.title,
        model: props.model,
        quantity: quantity
      }

      let oldPackage = appState.partPackage;

      oldPackage.push(newPart);

      setAppState({ ...appState, partPackage: oldPackage });
    }
  });

  useEffect(() => { //this function is for debugging purposes
    console.log(appState)
  }, [appState]);

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
