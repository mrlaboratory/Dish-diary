import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto my-10 p-5'>
            <h2 className='my-5 text-center text-gray-600 font-bold text-3xl'>Contact with us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-10 w-full'>
                    <img className='w-full p-10' src="/contact.png" alt="" />
                </div>
                <div className='border rounded-lg border-[#D54215] p-5 flex justify-center items-center'>
                    <form className='w-full md:w-3/4'>
                        <input required type="text" placeholder="Your name " className=" input input-bordered border-[#D54215] bg-transparent outline-none input-primary w-full " />
                        <input required type="email" placeholder="Your Email " className=" input input-bordered border-[#D54215] mt-3 bg-transparent outline-none input-primary w-full " />
                        <textarea required placeholder="Your message "  name="" id="" cols="30" rows="10" className=" input input-bordered border-[#D54215] p-5 mt-3 bg-transparent outline-none input-primary w-full h-[200px]" ></textarea>
                        <button className='w-full font-bold text-center p-4 rounded-lg bg-[#D54215] text-white'>Send</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;