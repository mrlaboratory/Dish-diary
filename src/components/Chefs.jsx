import React, { useContext, useEffect, useState } from 'react';
import Chef from './Chef';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Chefs = () => {
 const {chefs} = useContext(AuthContext)
 
    return (
        <div className='p-5' id='CHEFSRECIPES'>

            <h2 className='text-center text-gray-600 mt-3 text-4xl font-bold uppercase'>Chefs recipes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    chefs.map((item) => <Chef key={item.chefId} {...item}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;