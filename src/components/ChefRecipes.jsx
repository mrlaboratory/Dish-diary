import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Recipes from './Recipes';


const ChefRecipes = () => {
    const data = useLoaderData()
    const { chefs } = useContext(AuthContext)



    if (!data || chefs.length == 0) {
        return <div>Loading</div>
    }
    
    const chef = chefs.find(ch => ch.chefsId == data[0].chefsId)
    console.log(chef)
    console.log(data)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5'>
                <img className='p-10 rounded-lg' src={chef.image} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-5xl font-bold'>{chef.name}</h2>
                    <p className='text-color text-xl'>{chef.description}</p>

                </div>

            </div>

            <div className='mt-5'>
                <h2 className='text-center text-2xl font-bold my-5'>Here is the Some Recipes of {chef.name}</h2>
                <div className='grid grid-cols-1  lg:grid-cols-2 gap-3'>
                {
                    data.map((recipe,i) => <Recipes key={i} {...recipe}></Recipes>)
                }
            </div>


            </div>
        </div>
    );
};

export default ChefRecipes;