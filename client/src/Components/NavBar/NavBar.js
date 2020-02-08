import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import CartContext from "../../utils/CartContext";
import { useAuth0 } from "../../react-auth0-spa";

function NavBar(props) {
  
    const { cartCount } = useContext(CartContext);
    let history = useHistory();
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <div className="sticky-top navbar">
            <Navbar bg="white" expand="lg">
                <Navbar.Brand>Roadrunner Coffee House</Navbar.Brand>
                <Button className="cartBTN" onClick={() => history.push("/cart")}>Cart({cartCount})</Button>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        {isAuthenticated && <Link to="/profile">My Profile</Link>}
                        <Link to="/about">About</Link>
                        <Link to="/events">Upcoming Events</Link>
                        <Link to="/listen">Listen</Link>
                        {isAuthenticated &&  <Link to="/order">Order</Link>}
                        {!isAuthenticated && <span>to order pick-up you must log in!</span>}
                        {isAuthenticated && <Button onClick={() => logout()}>Log Out</Button>}
                        {!isAuthenticated && <Button onClick={() => loginWithRedirect()}>Log In</Button>}
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        </div>

    )
}

export default NavBar;

