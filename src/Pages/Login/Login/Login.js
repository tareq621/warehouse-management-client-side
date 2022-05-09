import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigateSignUp = () => {
        navigate('/signup')
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    })

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')
        }
        else {
            toast('Please enter your email address')
        }
    }
    return (
        <div className='container col-12 col-sm-12 col-md-6'>
            <h1 style={{ color: '#E21717' }} className='text-center fw-bold mt-3'>LOGIN</h1>
            <Form onSubmit={handleLogin} className=' from-container my-5 p-5 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} className='border-0 border-bottom' name='name' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} className='border-0 border-bottom' name='name' type="password" placeholder="Password" />
                </Form.Group>
                {errorElement}
                <Button style={{ backgroundColor: '#E21717' }} className='border-0 w-100 mx-auto' type="submit">
                    Login
                </Button>
                <div className='my-3'>
                    <p>Forget Password? <Link to="/login" className='text-decoration-none pe-auto' onClick={resetPassword}>Reset Password</Link></p>
                    <p>New to Car Ride Pool? <Link to="/signup" className='section-title text-decoration-none pe-auto' onClick={navigateSignUp}>Sign Up</Link></p>
                </div>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </Form>
        </div>
    );
};

export default Login;