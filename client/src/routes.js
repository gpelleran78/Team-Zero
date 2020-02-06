import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import Order from "./Components/Order/Order";
import Listen from "./Components/Listen/Listen";
import Events from "./Components/Events/Events";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart"; 

function Routes() {
    
    return (
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/order" component={Order} />
                <Route path="/events" component={Events} />
                <Route path="/listen" component={Listen} />
                <Route path="/login" component={Login} />
                <Route path="/cart" component={Cart} />
        </Switch>
    )
}


export default Routes; 