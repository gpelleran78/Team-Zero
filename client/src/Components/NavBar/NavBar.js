import React from "react";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";  

const NavBar = () => {
    return (
        <div className="navbar">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Road Runner Coffee House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/events">Events</Link></Nav.Link>
                        <Nav.Link><Link to="/Order">Order</Link></Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item>Hot Cofee</NavDropdown.Item>
                            <NavDropdown.Item>Iced Cofee</NavDropdown.Item>
                            <NavDropdown.Item>Bakery</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Products</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link to="/listen">Listen</Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
};

export default NavBar;

