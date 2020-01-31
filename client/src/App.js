import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home"; 
import Order from "./Components/Order/Order"; 
import Events from "./Components/Events/Events"; 
import Listen from "./Components/Listen/Listen"




class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" component={Home}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/events" component={Events}></Route>
        <Route path="/listen" component={Listen}></Route>
        <Route path="/login" component={Login}></Route>
      </Router> 
    );
  }
}

export default App;
