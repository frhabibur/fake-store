import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'

const Menubar = (props) => {
    return (
        <div className="container bg-light px-3 border-bottom">
            <div className="row d-flex ">
                {/* <div className="col-md-2 "><span className="logo">Logo</span></div> */}
                {/* <div className="col-md-10 d-flex menu-item justify-content-end">
                    <li className="me-3 p-2">Home</li>
                    <li className="me-3 p-2">Contact</li>
                    <li className="me-3 p-2">Cart</li>
                    <li className="me-3 p-2">Login</li>
                </div> */}
                <Navbar bg="light" expand="lg">

                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#link">Cart<sup className="bg-danger rounded-circle px-1 fw-bold text-white">{props.count}</sup></Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        </div>
    );
};

export default Menubar;