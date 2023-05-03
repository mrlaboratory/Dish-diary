import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Banner from './components/Banner';

const App = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className='bg-gray-100'>
        <div className='container mx-auto'>


        </div>
        <div>
          <Outlet></Outlet>
        </div>
      
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;