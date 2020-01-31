import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";  
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar" class="sticky-top">
            <Navbar bg="white" expand="lg">
                <Navbar.Brand class="nav-header">Roadrunner Coffee House</Navbar.Brand>
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

