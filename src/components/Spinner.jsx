import React from 'react';
import RiseLoader from "react-spinners/RiseLoader";
const Spinner = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <RiseLoader color="#FF0000" />
        </div>
    );
};

export default Spinner;