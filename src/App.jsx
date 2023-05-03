import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Banner from './components/Banner';

const App = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div>
          <Header></Header>
        </div>

      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div className='mt-10 bg-gray-100 '>
        <div className='container mx-auto'>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;