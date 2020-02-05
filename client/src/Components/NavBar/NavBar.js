import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";  
import Button from "react-bootstrap/Button";
import "./NavBar.css";

const NavBar = (props) => {
    return (
        <div className="navbar" className="sticky-top">
            <Navbar bg="white" expand="lg">
                <Navbar.Brand class="nav-header">Roadrunner Coffee House</Navbar.Brand>
                <Button>Cart({props.cartqt})</Button>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/events">Upcoming Events</Link></Nav.Link>
                        <Nav.Link><Link to="/listen">My Sounds</Link></Nav.Link>
                        <Nav.Link><Link to="/Order">Order</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
};

export default NavBar;

