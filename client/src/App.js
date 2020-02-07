import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar/NavBar";
import Routes from "./routes";
import Wrapper from "./Components/Wrapper/Wrapper";
import {useAuth0} from "./react-auth0-spa";


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
        <Wrapper>
          <NavBar />
          <Routes />
        </Wrapper>
      </Router>
  )
};


export default App;
