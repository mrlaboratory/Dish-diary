import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/Md';
import { AiFillLike } from 'react-icons/Ai';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const Chef = ({ image, name, yearsOfExperience, numRecipes, likes, chefId }) => {
    const [favorite, setFavorite] = useState(false)
    const handleFavorite = () => {
        if (!favorite) {
            toast.success('Added to your favorite list')
        }
        setFavorite(!favorite)
    }
    return (
        <div className='p-3 rounded-lg bg-white border-2 border-gray-200'>
            <div className='relative'>
                <LazyLoad>
                    <img className='w-100 rounded-lg' src={image} alt={name} />
                </LazyLoad>

                <button onClick={handleFavorite} className='absolute top-2 right-2 z-10'>
                    {favorite ? <MdFavorite className='text-3xl text-[#D54215]'></MdFavorite> :
                        <MdFavoriteBorder className='text-3xl text-[#D54215]'></MdFavoriteBorder>}

                </button>
                <div className=' absolute bottom-0 left-0 bg-gradient-to-t  from-white to-transparent w-full h-1/2  '>

                </div>
                <button className='absolute  top-2 left-2 font-bold text-[#D54215]'><AiFillLike className='text-3xl text-[#D54215]'> </AiFillLike>{likes}</button>
            </div>
            <div>
                <h3 className='text-xl text-center font-bold'>{name}</h3>
                <div className=' border-2 border-white p-2 my-2 text-color'>
                    <div className='flex justify-center items-center'>
                        {/* <img className='w-4/12' src="https://mrlaboratory.github.io/img/dish-diary/experience.png" alt="" /> */}
                        <h4 className='text-xl font-semibold'>{yearsOfExperience} Year experience</h4>

                    </div>
                    <div className='flex justify-center items-center'>
                        {/* <img className='w-4/12' src="https://mrlaboratory.github.io/img/dish-diary/cook-book.png" alt="" /> */}
                        <h4 className='text-xl font-semibold'>{numRecipes} Recipes</h4>
                    </div>


                </div>
            </div>
            <Link to={`/chefrecipes/${chefId}`} >
                <button className='btn-ssm w-full'>View Recipes </button>
            </Link>

        </div>
    );
};

export default Chef;