import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='container col-12 col-sm-12 col-md-6'>
            <h1 style={{ color: '#E21717' }} className='text-center fw-bold mt-3'>LOGIN</h1>
            <Form className=' from-container my-5 p-5 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='border-0 border-bottom' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='border-0 border-bottom' type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{ backgroundColor: '#E21717' }} className='border-0 w-100 mx-auto'>
                    Login
                </Button>
                <div className='my-3'>
                    <p>Forgot Password? <Link to="/signup" className='section-title text-decoration-none pe-auto'>Click</Link></p>
                    <p>New to Car Ride Pool? <Link to="/signup" className='section-title text-decoration-none pe-auto'>Sign Up</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default Login;