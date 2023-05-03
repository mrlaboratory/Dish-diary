import React from 'react';
import RiseLoader from "react-spinners/RiseLoader";
const Spinner = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='h-[100px]'>
                <RiseLoader color="#FF0000" />
            </div>
        </div>
    );
};

export default Spinner;