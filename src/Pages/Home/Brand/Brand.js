import React from 'react';
import audi from '../../../Images/brand/audi-logo-2016.png'
import bmw from '../../../Images/brand/bmw-logo-2020-blue-white.png'
import bugatti from '../../../Images/brand/Bugatti-logo-1024x768.png'
import datsun from '../../../Images/brand/Datsun-logo-2013-2560x1440.png'
import bently from '../../../Images/brand/bentley-logo-1400x800.png'
import mercedes from '../../../Images/brand/Mercedes-Benz-logo-2011-1920x1080.png'

const Brand = () => {
    return (
        <div style={{ height: '150px' }} className='bg-secondary my-5 text-center'>
            <div className="d-flex bd-highlight mb-3 container">
                <div className="me-auto p-2 bd-highlight">
                    <h3 className='text-light mt-2 me-4'><span className='fst-italic'>Why Choose Us </span><br />
                        OUR PREMIUM CLIENTS</h3>
                </div>
                <div className="d-flex">
                    <div>
                        <img className='img-fluid mt-4' width={200} src={audi} alt="" />
                    </div>
                    <div className=''>
                        <img className='img-fluid text-secondary' width={130} src={bmw} alt="" />
                    </div>
                    <div>
                        <img className='img-fluid' width={200} src={bugatti} alt="" />
                    </div>
                    <div>
                        <img className='img-fluid' width={200} src={datsun} alt="" />
                    </div>
                    <div>
                        <img className='img-fluid mt-2' width={200} src={bently} alt="" />
                    </div>
                    <div>
                        <img className='img-fluid mt-2' width={200} src={mercedes} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;