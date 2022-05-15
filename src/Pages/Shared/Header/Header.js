import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import headerLogo from '../../../Images/Logo/logo-1.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
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
                        <Nav className="section-name font-style">

                            <Nav.Link as={Link} to="home" className='text-dark fw-bold'>HOME</Nav.Link>

                            <Nav.Link as={Link} to="manageitem" className='text-dark fw-bold'>MANAGE ITEM</Nav.Link>
                            <Nav.Link as={Link} to="blog" className='text-dark fw-bold'>BLOG</Nav.Link>
                            {
                                user &&
                                <>
                                    <Nav.Link as={Link} to="additem" className='text-dark fw-bold'>ADD ITEM</Nav.Link>
                                    <Nav.Link as={Link} to="myitem" className='text-dark fw-bold'>MY ITEM</Nav.Link>
                                </>
                            }
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/signup">
                                <button className='btn btn-light px-3 py-2 rounded  text-dark border border-success fw-bold '>SIGNUP</button>
                            </Nav.Link>
                            {
                                user ? <Nav.Link as={Link} to="login" >
                                    <button className='button border-0 px-3 py-2 rounded text-light fw-bold ' onClick={handleSignOut}>SIGN OUT</button>
                                </Nav.Link> : <Nav.Link as={Link} to="login" >
                                    <button className='button border-0 px-3 py-2 rounded text-light fw-bold '>LOGIN</button>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;