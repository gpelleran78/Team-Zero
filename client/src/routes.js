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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


function Routes() {
    
    return (
        <Switch>

            <Route exact path="/" component={Home} />
            <PrivateRoute path="/order" component={Order} />
            <PrivateRoute path="/events" component={EventPage} />
            <PrivateRoute path="/listen" component={Listen} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/cart" component={Cart} />
            <PrivateRoute path="/about" component={About}/>
            <PrivateRoute path="/contact" component={Contact}/>
            <Route path="/findus" component={FindUs}/>
      
        </Switch>
    )
}


export default Routes; 