import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Items from '../Items/Items';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Brand></Brand>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;