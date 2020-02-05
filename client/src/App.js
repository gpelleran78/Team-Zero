import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar/NavBar";
import Routes from "./routes"; 


function App() {

  return (
   <Router>
     <NavBar />
     <Routes />
   </Router>
  );
}

export default App;
