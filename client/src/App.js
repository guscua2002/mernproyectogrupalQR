import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./componentes/Home"
import Login from "./Login/Login"
import Registro from "./Login/Registro"

function App() {
  return (
    <div className="mainContainer">      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Registro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
