import React, { useContext, useEffect, useState } from 'react';
import Chef from './Chef';
import { AuthContext } from './AuthProvider';

const Chefs = () => {
 const {chefs} = useContext(AuthContext)
    return (
        <div className='p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    chefs.map((item) => <Chef key={item.chefId} {...item}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;