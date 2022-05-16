import React from 'react';
import notFound from '../../../Images/not-found/2417237.jpg'
const NotFound = () => {
    return (
        <div className='notFound-container'>
            <img style={{ width: '1300px', height: '571px' }} className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;