import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";  
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import CartContext from "../../utils/CartContext";

function NavBar(props) {

    const { cartCount } = useContext(CartContext); 
    let history = useHistory(); 
     return (
        <div className="sticky-top Top-navbar container-fuild">
            <Navbar bg="white" expand="lg">
                <Navbar.Brand> Roadrunner Coffee House </Navbar.Brand>
                <Button className="cartBTN" onClick={()=>history.push("/cart")}>Cart({ cartCount })</Button>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/events">Upcoming Events</Link>
                        <Link to="/listen">Listen</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/login">Login</Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        </div>

    )
}

export default NavBar;

