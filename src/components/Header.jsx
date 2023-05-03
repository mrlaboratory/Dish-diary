import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='border-b-2 border-gray-200 bg-white'>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;