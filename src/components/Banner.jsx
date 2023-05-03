import React from 'react';
import recipeImage from '/img/recipe.png'
import { AiOutlineArrowRight } from 'react-icons/Ai';

const Banner = () => {
    return (
        <div className='p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col justify-center items-center text-left'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl uppercase font-bold'>Discover culinary adventures with <br /> <span className='text-[#D54215]'> Dish Diary</span></h2>
                    <p className='pt-5'>On Dish Diary, you will find a wide range of recipes for every occasion, including breakfast, lunch, dinner, snacks, desserts, and more !!</p>
                   <div className='w-full flex justify-start mt-5'>
                   <button className='flex  btn-outline-sm mt3'> Explore <AiOutlineArrowRight className='text-xl ml-2'></AiOutlineArrowRight> </button>
                   </div>
                </div>
                <div >
                    <img className='w-full p-10' src={recipeImage} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;