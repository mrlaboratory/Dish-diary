import React from 'react';



// this is contact page 
const Contact = () => {
    return (
        <div className='container mx-auto py-10 '>
            <h2 className='my-5 text-center text-gray-600 font-bold text-3xl'>Contact with us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='p-10 w-full'>
                    <img className='w-full p-10' src="/contact.png" alt="" />
                </div>
                <div className='p-5 rounded-lg flex justify-center items-center'>
                    <form className='w-full md:w-4/5 rounded-lg  p-5 border-2 border-gray-400'>
                        <input required type="text" placeholder="Your name " className=" border-2 border-gray-400 input input-bordered  bg-transparent outline-none input-primary w-full " />
                        <input required type="email" placeholder="Your Email " className="border-2 border-gray-400 input input-bordered  mt-3 bg-transparent outline-none input-primary w-full " />
                        <textarea required placeholder="Your message "  name="" id="" cols="30" rows="10" className="border-2 border-gray-400 input input-bordered  p-5 mt-3 bg-transparent outline-none input-primary w-full h-[200px]" ></textarea>
                        <button className='w-full font-bold text-center p-4 rounded-lg btn-primary mt-5 text-white'>Send</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;