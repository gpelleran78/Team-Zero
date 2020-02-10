import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Events from "./pages/Events"; 
import Listen from "./pages/Listen"; 
import Cart from "./pages/Cart"; 
import Login from "./Components/Login/Login";
import About from "./pages/About"; 
import Profile from "./pages/Profile"; 
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";


import Contact from "./Components/Contact/Contact"; 
import FindUs from "./Components/FindUs/FindUs"; 
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


function Routes() {
    
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/profile/" component={Profile} />
            <PrivateRoute path="/order" component={Order} />
            <PrivateRoute path="/events" component={Events} />
            <PrivateRoute path="/listen" component={Listen} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/cart" component={Cart} />
            <PrivateRoute path="/checkout" component={Checkout}/>
            <PrivateRoute path="/myorders" component={MyOrders}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/findus" component={FindUs}/>
        </Switch>
    )
}


export default Routes; 