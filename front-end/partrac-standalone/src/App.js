import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChooseModel from "./pages/ChooseModel";
import ChoosePart from "./pages/ChoosePart";
import CheckSubmit from "./pages/CheckSubmit";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <CheckSubmit />
      <Footer />
    </div>
  );
}

export default App;
