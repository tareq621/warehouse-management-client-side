import React from 'react';
import banner from '../../../Images/banner/audi-1.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div>
                <img className='img-fluid' src={banner} alt="" />
            </div>
            <div className='banner-text text-center'>
                <h2 style={{ 'font-size': '45px' }} className='fw-bolder text-light'>Welcome to <span className='px-1' style={{ 'background-color': '#E21717' }}>Car Ride Pool</span></h2>
            </div>
        </div>
    );
};

export default Banner;