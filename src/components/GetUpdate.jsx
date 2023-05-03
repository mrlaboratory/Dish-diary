import React from 'react';

const GetUpdate = () => {
    return (
        <div className='getupdate'>
            <div className='flex justify-center items-center p-5 w-full h-full bg-gradient-to-t from-gray-100 to-transparent'>
                <div data-aos="fade-up">
                    <h2 className='text-center text-5xl font-bold text-gray-500'>Get update <br /> delicious recipes everyday!</h2>
                    <div className='flex justify-center item-center text-black'>
                        <form className='w-[350px] max-w-[100%]  mt-5'>
                            <div className='grid grid-cols-2 gap-2'>
                                <input required className=' p-3 border-gray-600 border outline-none rounded-lg bg-transparent' type="text" placeholder='First name' />
                                <input required className=' p-3 border-gray-600 border outline-none rounded-lg bg-transparent' type="text" placeholder='Last name' />
                            </div>
                            <div className='mt-2'>
                                <input required className='w-full p-3 border-gray-600 border outline-none rounded-lg bg-transparent' type="text" placeholder='Email ' />
                            </div>
                            <button className='btn btn-primary mt-2 w-full'>Subscribe</button>

                        </form>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default GetUpdate;

