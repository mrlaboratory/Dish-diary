import React from 'react';


// this is categories section 
const Categories = () => {
    return (
        <div className='mt-5'>
            <div className='text-center categories z-0'>
                <div className=' h-full p-10  flex justify-center items-center bg-[#0000005e]'>
                    <div className='pb-20'>
                        <h2 className='font-bold text-3xl '>Popular Categories</h2>
                        <p className='mt-2'>Looking for nutritious and delicious dishes? Our Healthy Options category features a variety of recipes that cater to different dietary needs and preferences.</p>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 -mt-36 z-10 '>
            <div data-aos="zoom-in" className='p-5 flex justify-center items-center '>
                    <div className='relative bg-black rounded-full overflow-hidden w-[250px] h-[250px]  border-8 border-white flex justify-center items-center'>
                        <img className='opacity-80   cursor-pointer absolute scale-150 bottom-0 w-full h-full left-0 object-cover transition-transform duration-500 ease-in-out transform hover:scale-100 ' src="https://mrlaboratory.github.io/img/cat/cat4.jpg" alt="" />
                     
                            <div className=' z-10'>
                                <h2 className='text-center font-bold text-xl text-white'>Main Dish
</h2>
                                <h3 className='text-center btn-primary cursor-pointer btn-sm mt-2 flex justify-center items-center'>Discover recipes</h3>
                            </div>
                     

                    </div>
            </div>
            <div data-aos="zoom-in" className='p-5 flex justify-center items-center '>
                    <div className='relative bg-black rounded-full overflow-hidden w-[250px] h-[250px]  border-8 border-white flex justify-center items-center'>
                        <img className='opacity-80   cursor-pointer absolute scale-150 bottom-0 w-full h-full left-0 object-cover transition-transform duration-500 ease-in-out transform hover:scale-100 ' src="https://mrlaboratory.github.io/img/cat/cat3.jpg" alt="" />
                     
                            <div className=' z-10'>
                                <h2 className='text-center font-bold text-xl text-white'>Appetizers</h2>
                                <h3 className='text-center btn-primary cursor-pointer btn-sm mt-2 flex justify-center items-center'>Discover recipes</h3>
                            </div>
                     

                    </div>
            </div>
            <div data-aos="zoom-in" className='p-5 flex justify-center items-center '>
                    <div className='relative bg-black rounded-full overflow-hidden w-[250px] h-[250px]  border-8 border-white flex justify-center items-center'>
                        <img className='opacity-80   cursor-pointer absolute scale-150 bottom-0 w-full h-full left-0 object-cover transition-transform duration-500 ease-in-out transform hover:scale-100 ' src="https://mrlaboratory.github.io/img/cat/cat2.jpg" alt="" />
                     
                            <div className=' z-10'>
                                <h2 className='text-center font-bold text-xl text-white'>Drink Recipes</h2>
                                <h3 className='text-center btn-primary cursor-pointer btn-sm mt-2 flex justify-center items-center'>Discover recipes</h3>
                            </div>
                     

                    </div>
            </div>


            <div data-aos="zoom-in" className='p-5 flex justify-center items-center '>
                    <div className='relative bg-black rounded-full overflow-hidden w-[250px] h-[250px]  border-8 border-white flex justify-center items-center'>
                        <img className='opacity-80  cursor-pointer absolute scale-150 bottom-0 w-full h-full left-0 object-cover transition-transform duration-500 ease-in-out transform hover:scale-100 ' src="https://mrlaboratory.github.io/img/cat/cat1.jpg" alt="" />
                     
                            <div className=' z-10'>
                                <h2 className='text-center font-bold text-xl text-white'>Breakfast</h2>
                                <h3 className='text-center btn-primary cursor-pointer btn-sm mt-2 flex justify-center items-center'>Discover recipes</h3>
                            </div>
                     

                    </div>
                </div>

              

            </div>
        </div>
    );
};

export default Categories;