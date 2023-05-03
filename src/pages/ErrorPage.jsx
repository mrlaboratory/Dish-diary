import React from 'react';
import errorImage from '/error.png'
import Header from '../components/Header';
import { Link, useRouteError } from 'react-router-dom';
import Footer from '../components/Footer';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div >
            <div className=''>
                <Header></Header>
            </div>
            <div className='bg-gray-100 py-10'>
                <div className='container mx-auto '>
                    <div className='w-full  p-5 flex justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <img className='w-full md:w-3/4 rounded-lg' src={errorImage} alt="" /></div>
                    </div>
                    <h2 className='text-7xl text-center font-bold text-[#D54215]'>{error?.statusText}</h2>
                    <h2 className='text-2xl text-center font-bold text-gray-600 mt-5'>{error?.error?.message}</h2>
                    <div className='w-full flex justify-center items-center mt-5'>
                        <Link to='/' className='btn btn-primary '>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div >

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;