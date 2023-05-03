import React from 'react';
import Banner from '../components/Banner';
import Chefs from '../components/Chefs';
import Categories from '../components/Categories';
import GetUpdate from '../components/GetUpdate';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Banner></Banner>
                <Chefs></Chefs>
                
            </div>
         
            <div className='my-10'>
                <Categories></Categories>
            </div>
            <div className='container mx-auto my-10'>
                <Reviews></Reviews>
            </div>
            <div>
                <GetUpdate></GetUpdate>
            </div>
        </div>
    );
};

export default Home;