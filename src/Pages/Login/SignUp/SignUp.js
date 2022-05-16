import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error:{error.message}</p>
    }

    const handleSignUp = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <h1 style={{ color: '#E21717' }} className='text-center fw-bold mt-3'>Create Account</h1>
            <Form onSubmit={handleSignUp} className=' from-container my-5 p-5 rounded w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='border-0 border-bottom' name='name' type="name" placeholder="First name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='border-0 border-bottom' name='name' type="name" placeholder="Last name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='border-0 border-bottom' name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='border-0 border-bottom' name='password' type="password" placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <Button style={{ backgroundColor: '#E21717' }} className='border-0 w-100 mx-auto' type="submit">
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