import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../Images/social/google.png'
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }

    if (user) {
        navigate('/home')
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='col-12 col-sm-12 col-md-6 mx-auto mb-2 w-100'>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-secondary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-secondary'></div>
            </div>
            {errorElement}
            <div>
                <button className='btn btn-dark w-100 d-block mx-auto rounded-pill' onClick={() => signInWithGoogle()}>
                    <img width={35} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;