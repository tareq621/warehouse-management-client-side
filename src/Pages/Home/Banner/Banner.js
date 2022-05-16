import React from 'react';
import banner from '../../../Images/banner/MANSORY-Rolls-Royce-Ghost-MY-2021-17.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div>
                <img className='img-fluid' src={banner} alt="" />
            </div>
            <div className='banner-text text-center'>
                <h2 style={{ 'fontSize': '45px' }} className='fw-bolder text-light'>Welcome to <span className='rounded color-picker px-1'>Car Ride Pool</span></h2>
            </div>
        </div>
    );
};

export default Banner;