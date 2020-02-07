import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import Order from "./Components/Order/Order";
import Listen from "./Components/Listen/Listen";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart"; 
import EventPage from "./Components/EventPage/EventPage";

import About from "./Components/About/About"; 
import Contact from "./Components/Contact/Contact"; 
import FindUs from "./Components/FindUs/FindUs"; 


function Routes() {
    
    return (
        <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/order" component={Order} />
            <Route path="/events" component={EventPage} />
            <Route path="/listen" component={Listen} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/findus" component={FindUs}/>
      
        </Switch>
    )
}


export default Routes; 