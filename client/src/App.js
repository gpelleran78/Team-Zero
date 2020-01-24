import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar"; 
import Wrapper from "./components/Wrapper/Wrapper"; 


class App extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar></NavBar>
      </Wrapper>
    );
  }
}

export default App;
