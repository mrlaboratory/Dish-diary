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


                {/* banner section and chefs section  */}
                <Banner></Banner>
                <Chefs></Chefs>
            </div>

            <div className='my-10'>


                {/* Categories secion  */}
                <Categories></Categories>
            </div>
            <div className='container mx-auto my-10'>


                {/* client review section  */}
                <Reviews></Reviews>
            </div>
            <div>


                {/* getupdate or subscription section  */}
                <GetUpdate></GetUpdate>
            </div>
        </div>
    );
};

export default Home;