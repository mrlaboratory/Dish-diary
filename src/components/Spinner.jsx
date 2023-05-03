import React from 'react';
import RiseLoader from "react-spinners/RiseLoader";
import InfinitySpinner from './InfinitySpinner';
const Spinner = () => {
    return (
        <div className='h-[100px] w-full flex justify-center items-center'>
            <div className=''>
                <InfinitySpinner></InfinitySpinner>
                <RiseLoader color="#FF0000" />
            </div>
        </div>
    );
};

export default Spinner;