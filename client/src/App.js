import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home"; 
import Order from "./components/Order/Order"; 
import Events from "./components/Events/Events"; 
import Listen from "./components/Listen/Listen"; 
import Login from "./components/Login/Login"; 



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
