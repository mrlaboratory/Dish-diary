import React, { useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/Md';
import { AiFillLike } from 'react-icons/Ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";



const Recipes = ({ name, image, id, rating , ingredients , cookingMethod }) => {
    const [favorite, setFavorite] = useState(false)
    const handleFavorite = () => {
        toast.success('Added to favorite list')
        setFavorite(true)
    }

    return (

        <div className='p-3 rounded-lg bg-gray-100 relative'>
            <div className='relative'>
                <img className='w-100 rounded-lg' src={image} alt='' />
                <button className='absolute top-2 right-2'>
                    {favorite ? <MdFavorite className='text-3xl text-red-500'></MdFavorite> :
                        <MdFavoriteBorder className='text-3xl text-red-500'></MdFavoriteBorder>}

                </button>
                {/* <button className='absolute text-blue-500 top-2 left-2 font-bold'><AiFillLike className='text-3xl'> </AiFillLike></button> */}
            </div>
            <div>
                <h3 className='text-xl text-center font-bold'>{name}</h3>
                <div className=' border-2 border-white p-2 my-2 text-color'>
                    <div className='flex justify-center items-center'>

                        <h4 className='text-xl font-semibold flex gap-3'> Rating {rating}
                            <ReactStars
                                isHalf={true}
                                count={5}
                                size={24}
                                value={rating}
                                activeColor="#ffd700"
                                edit={false}


                            />,
                        </h4>

                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>ingredients</h3>
                    <ul>
                            {ingredients?.map((item,i) =>  <li key={i}>{item}</li>   )}
                           
                        </ul>

                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>cookingMethod</h3>
                    <ul>
                            {cookingMethod?.map((item,i) =>  <li key={i}>{item}</li>   )}
                           
                        </ul>

                    </div>
                  


                </div>
            </div>
           <div className=' mt-auto'>
           <button onClick={handleFavorite} disabled={favorite} className='btn-outline-sm w-full mt-2'>
                {favorite ? "Added" : 'Add to favorite'}

            </button>
            <Link to={`/recipe/`} >
                <button className='btn-ssm w-full mt-3'>Recipe Deatils</button>
            </Link>
           </div>

        </div>
    );
};

export default Recipes;