import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container fluid>
        
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
            alt="Library Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          Library Management
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-between">
          
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            <NavDropdown title="Registration" id="registration-dropdown">
              <NavDropdown.Item as={Link} to="/student-register">Student</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin-register">Admin</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/search">Search Books</Nav.Link>

            
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          
          <div className="d-flex">
            <Button as={Link} to="/signin" variant="light" className="me-2 custom-btn">
              Sign In
            </Button>
            <Button as={Link} to="/signup" variant="warning" className="custom-btn">
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
