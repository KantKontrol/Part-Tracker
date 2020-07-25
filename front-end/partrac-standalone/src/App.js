import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChooseModel from "./pages/ChooseModel";
import ChoosePart from "./pages/ChoosePart";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ChoosePart />
      <Footer />
    </div>
  );
}

export default App;
