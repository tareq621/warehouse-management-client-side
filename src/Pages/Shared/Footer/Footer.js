import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerLogo from '../../../Images/Logo/logo-1.png'
import './Footer.css'
const Footer = () => {
    const current = new Date();
    const year = current.getFullYear();
    return (
        <div>
            <footer>
                <div className='container'>
                    <Navbar.Brand as={Link} to="/">
                        <img height="30" style={{ width: '60px', height: '50px' }} src={footerLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Brand className='fw-bolder text-dark'>Care Ride Pool</Navbar.Brand>
                </div>
                <div className='d-flex mb-3 justify-content-center align-items-center text-decoration-none'>
                    <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" className='text-light'>About</Nav.Link>
                    <Nav.Link as={Link} to="/blog" className='text-light'>Blog</Nav.Link>
                    <Nav.Link as={Link} to="/privacy" className='text-light'>Privacy Policy</Nav.Link>
                </div>
                <div>
                    <p className='text-light text-center mb-0'>Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> {year}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;