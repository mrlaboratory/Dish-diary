import React, { useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/Md';
import { AiFillLike } from 'react-icons/Ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import LazyLoad from 'react-lazy-load';



const Recipes = ({ name, image, id, rating, ingredients, cookingMethod }) => {
    const [favorite, setFavorite] = useState(false)
    const handleFavorite = () => {
        toast.success('Added to favorite list')
        setFavorite(true)
    }
    return (

        <div className='p-3 rounded-lg bg-white relative flex flex-col justify-between'>
            <div>
                <div className='relative'>
                    <LazyLoad>
                        <img className='w-100 rounded-lg' src={image} alt='' />
                    </LazyLoad>
                    <button className='absolute top-2 right-2'>
                        {favorite ? <MdFavorite className='text-3xl text-red-500'></MdFavorite> :
                            <MdFavoriteBorder className='text-3xl text-red-500'></MdFavoriteBorder>}

                    </button>
                    {/* <button className='absolute text-blue-500 top-2 left-2 font-bold'><AiFillLike className='text-3xl'> </AiFillLike></button> */}
                </div>
                <div>
                    <h3 className='text-xl text-center font-bold text-gray-600'>{name}</h3>
                    <div className=' border-2  p-2 my-2 text-color'>
                        <div className='flex justify-center items-center'>

                            <h4 className='text-xl font-semibold flex gap-3'> Rating {rating}
                                <ReactStars
                                    isHalf={true}
                                    count={5}
                                    size={24}
                                    value={rating}
                                    activeColor="#ffd700"
                                    edit={false}


                                />
                            </h4>

                        </div>
                        <div>
                            <h3 className='text-xl font-bold border-b-2 border-gray-400 pb-1'>Ingredients</h3>
                            <ul>
                                {ingredients?.map((item, i) => <li key={i}>{i + 1}.  {item}</li>)}

                            </ul>

                        </div>
                        <div className='mt-3'>
                            <h3 className='text-xl font-bold border-b-2 border-gray-400 pb-1'>Cooking Method</h3>
                            <ul>
                                {cookingMethod?.map((item, i) => <li key={i}>{i + 1}.  {item}</li>)}

                            </ul>

                        </div>



                    </div>
                </div>
            </div>
            <div className='items-end'>
                <button onClick={handleFavorite} disabled={favorite} className='btn-outline-sm w-full mt-2 disabled:opacity-50 disabled:cursor-default'>
                    {favorite ? "Added" : 'Add to favorite'}

                </button>
                {/* <Link to={`/recipe/`} >
                    <button className='btn-ssm w-full mt-3'>Recipe Deatils</button>
                </Link> */}
            </div>

        </div>
    );
};

export default Recipes;