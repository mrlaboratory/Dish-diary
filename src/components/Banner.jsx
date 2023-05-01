import React from 'react';
import recipeImage from '/img/recipe.png'
import { AiOutlineArrowRight } from 'react-icons/Ai';

const Banner = () => {
    return (
        <div className='p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col justify-center items-center text-left'>
                    <h2 className='text-5xl uppercase font-bold'>Discover culinary adventures with <span className='text-[#FF0000]'>Dish Diary</span> <br />your go-to source for delicious dishes.</h2>
                    <p>On Dish Diary, you will find a wide range of recipes for every occasion, including breakfast, lunch, dinner, snacks, desserts, and more. These recipes are carefully curated and tested by experienced chefs and food bloggers, ensuring that every dish you make is not only delicious but also easy to prepare. !!</p>
                   <div className='w-full flex justify-start mt-3'>
                   <button className='flex  btn-outline-sm'> Explore <AiOutlineArrowRight className='text-xl ml-2'></AiOutlineArrowRight> </button>
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