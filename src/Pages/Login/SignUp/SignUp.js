import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }


    return (
        <div>
            <h1 style={{ color: '#E21717' }} className='text-center fw-bold mt-3'>Create Account</h1>
            <Form className=' from-container my-5 p-5 rounded w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='border-0 border-bottom' name='name' type="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='border-0 border-bottom' name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='border-0 border-bottom' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='border-0 border-bottom' type="password" placeholder="Repeat Your Password" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I Agree All Statements in Terms And Condition" />
                </Form.Group>

                <Button style={{ backgroundColor: '#E21717' }} className='border-0 w-100 mx-auto'>
                    Login
                </Button>
                <div className='my-3 text-center mt-5'>
                    <p>Have already an account ? <Link to="/login" className='section-title text-decoration-none pe-auto fw-bold' onClick={navigateLogin}>Login here</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;