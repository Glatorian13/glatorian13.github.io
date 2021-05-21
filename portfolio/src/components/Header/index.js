import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLinks
  } from "react-router-dom";
import "./style.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
  return (
      <Router>
    <Navbar expand="lg" variant="light" bg="light">
        <a class="navbar-brand nav-brand-custom" href="/">Javier</a>
        <NavDropdown title="Additional Links" id="navbarNav">
            <Nav className="navbar-nav ml-auto">
                <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
                <NavDropdown.Item href="/Portfolio">Portfolio</NavDropdown.Item>
                <NavDropdown.Item href="/About">About</NavDropdown.Item>
            </Nav>
        </NavDropdown>
    </Navbar>
    </Router>
  );
}
