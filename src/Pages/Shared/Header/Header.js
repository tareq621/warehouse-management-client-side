import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerLogo from '../../../Images/Logo/logo-1.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top' className='navbar'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height="30" style={{ width: '60px', height: '50px' }} src={headerLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Brand as={Link} to="/" className='fw-bolder'>Care Ride Pool</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='text-dark' id="responsive-navbar-nav">
                        <Nav className="section-name">
                            <Nav.Link as={Link} to="home" className='text-dark'>HOME</Nav.Link>
                            <Nav.Link as={Link} to="manageinventories" className='text-dark'>MANAGE INVENTORIES</Nav.Link>
                            <Nav.Link as={Link} to="blog" className='text-dark'>BLOG</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="signup" className='text-dark fw-bold'>SIGN UP</Nav.Link>
                            <Nav.Link as={Link} to="login" className='text-dark fw-bold' eventKey={2}>
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