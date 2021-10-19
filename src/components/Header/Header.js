import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {

    const active = {
        color: "#ff136f",
        borderBottom: "2px solid #ff136f",
    };
    const navStyle = {
        textDecoration: "none",
        margin: "0 8px",
        color: "white",
        fontSize: "17px",
        fontWeight: "bold",
        textTransform: "Uppercase",
    };
    return (
        <div className="sticky-top">
            <Navbar
                className="bg-black text-white"
            >
                <Container>
                    <NavLink
                        className="hoverStyle text-decoration-none sm-mb-3 p-3"
                        exact to="/home"
                    >
                        <Navbar.Brand className="">

                            <span className="fw-bold text-white  ">Kungfu Learning Institute</span>
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto hover-style">
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/home"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/about"
                            >
                                About
                            </NavLink>
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/courses"
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;