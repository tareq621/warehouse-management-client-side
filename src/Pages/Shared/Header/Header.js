import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import headerLogo from '../../../Images/Logo/logo-1.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top' className='navbar'>
                <Container>
                    <Navbar.Brand>
                        <img height="30" style={{ width: '60px', height: '50px' }} src={headerLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Brand className='fw-bolder'>Care Ride Pool</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='text-dark' id="responsive-navbar-nav">
                        <Nav className="section-name">
                            <Nav.Link className='text-dark' href="#home">HOME</Nav.Link>
                            <Nav.Link className='text-dark' href="#manageinventories">MANAGE INVENTORIES</Nav.Link>
                            <Nav.Link className='text-dark' href="#blog">BLOG</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-dark fw-bold' href="#signup">SIGN UP</Nav.Link>
                            <Nav.Link className='text-dark fw-bold' eventKey={2} href="#login">
                                LOGIN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;