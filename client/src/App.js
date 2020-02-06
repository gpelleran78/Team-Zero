import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar/NavBar";
import Routes from "./routes";
import Wrapper from "./Components/Wrapper/Wrapper";


function App() {
  return(
    <Router>
        <Wrapper>
          <NavBar />
          <Routes />
        </Wrapper>
      </Router>
  )
}

export default App;
