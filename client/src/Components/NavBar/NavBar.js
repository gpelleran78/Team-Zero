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
        <Navbar className="sticky-top top-Navbar" expand="lg">
            <Button className="cartBTN" onClick={() => history.push("/cart")}>Cart({cartCount})</Button>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                    <p className="title">Roadrunner Coffee House</p>
                    <Link className="link" to="/">Home</Link>
                    {isAuthenticated && <Link className="link" to="/profile">My Profile</Link>}
                    <Link className="link" to="/about">About</Link>
                    {/* <Link className="link" to="/events">Upcoming Events</Link> */}
                    {/* <Link className="link" to="/listen">Listen</Link> */}
                    {isAuthenticated && <Link className="link" to="/order">Order</Link>}

                    {!isAuthenticated && <span className="login-warning">to order, you must be loged in!</span>}

                    {isAuthenticated && <Button className="loginANDLoginINBTN" onClick={() => logout()}>Log Out</Button>}
                    {!isAuthenticated && <Button className="loginANDLoginINBTN" onClick={() => loginWithRedirect()}>Login</Button>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;

