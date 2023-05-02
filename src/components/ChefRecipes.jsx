import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const ChefRecipes = () => {
    const data = useLoaderData()
    const { chefs } = useContext(AuthContext)

    if(!data || chefs.length == 0){
        return <div>Loading</div>
    }
    const chef = chefs.find(ch => ch.chefsId == data[0].chefsId)
    console.log(chef)
    console.log(data)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <img src={chef.image} alt="" />

            </div>
        </div>
    );
};

export default ChefRecipes;