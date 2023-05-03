import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div>

        {/* this is header section  */}
        <Header></Header>
      </div>
      <div className='bg-gray-100'>
        <div className='container mx-auto'>

        </div>
        <div>
          {/* this is outlet section for conditional page components  */}
          <Outlet></Outlet>
        </div>

      </div>
      {/* this is footer section  */}
      <Footer></Footer>
    </div>
  );
};

export default App;