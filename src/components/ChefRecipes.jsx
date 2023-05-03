import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Recipes from './Recipes';
import Spinner from './Spinner';
import Header from './Header';
import Footer from './Footer';
import LazyLoad from 'react-lazy-load';



const ChefRecipes = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);

    const recipes = useLoaderData()
    const { chefs, loading } = useContext(AuthContext)

    if (loading) {
        return <Spinner></Spinner>
    }

    if (!recipes || chefs.length == 0) {

        return <Spinner></Spinner>
    }

    const chef = chefs.find(ch => ch.chefId === recipes[0].chefId)
    // console.log(chef)
    // console.log(recipes)
    return (
        <div className='bg-gray-100'>

            <div className='headerbg'>
                <div className=' relative'>
                    <div className=' text-gray-600 rounded-lg '>
                        <Header></Header>
                    </div>
                    <div className='container mx-auto '>

                        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 '>
                            <div className='relative h-full flex justify-center  items-end '>

                                <img className=' rounded-lg z-10' src={chef.image} alt="" />



                            </div>
                            <div className='p-5'>
                                <div className='flex  flex-col  justify-center items-center text-white z-10 bg-[#ffffff59] p-3 rounded-lg'>
                                    <h2 className='text-2xl lg:text-5xl font-bold uppercase'>{chef.name}</h2>
                                    <p className=' text-xl text-center  mt-5'>{chef.description}</p>
                                    <div className=' w-full flex gap-2 rounded-lg bg-[#0000006a] mt-5'>
                                        <h3 className='p-3 font-bold text-xl border-r-4 border-[#ffffff59] flex-auto'>Exp : {chef.yearsOfExperience} Year</h3>
                                        <h3 className='p-3 font-bold text-xl border-r-4 border-[#ffffff59] flex-auto'>Recipes : {chef.numRecipes} </h3>
                                        <h3 className='p-3 font-bold text-xl '>Likes : {chef.likes} </h3>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div className=' h-1/2 left-0 bottom-0 absolute bg-gradient-to-t from-gray-100 to-transparent'></div>
                </div>
            </div>

            <div className='mt-5 container mx-auto text-gray-100 p-3'>
                <h2 className='text-center text-2xl font-bold my-5 text-gray-600'>Here is the Some Recipes of {chef.name}</h2>
                <div className='grid grid-cols-1  lg:grid-cols-2 gap-3'>
                    {
                        recipes.map((recipe, i) => <Recipes key={i} {...recipe}></Recipes>)
                    }
                </div>


            </div>
            <div className='bg-white mt-10'>
                <div className='container mx-auto'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;