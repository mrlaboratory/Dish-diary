import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDbData, removeFromDb } from '../utils/db';

const FavoriteRevipes = () => {
    const { recipes } = useContext(AuthContext)
    const [favoItem, setFavoItem] = useState([])
    const [storage, setStorage] = useState([])

    const [change, setChange] = useState('')

    useEffect(() => {
        const dbData = getDbData()
        setStorage(dbData)
    }, [change])

    useEffect(() => {
        const savedItem = []
        for (const dd in storage) {
            const finded = recipes.find(r => r.id == dd)
            if (finded) {
                console.log(finded)
                savedItem.push(finded)
            }

        }
        setFavoItem(savedItem)
    }, [storage, recipes, change])


    const removeItem = (id) => {
        removeFromDb(id)
        setChange(id)
    }


    return (
        <div className='py-10 px-5'>
            <h2 className='my-2 text-center text-gray-600 font-bold text-3xl'>Favorite Recipes</h2>
            <div className='flex justify-center items-center'>
                <div className='w-full sm:w-[500px] flex flex-col gap-3 justify-center items-center'>
                    {
                        favoItem?.map((item, i) => <div className='w-full bg-white p-5 flex justify-between gap-3' key={i}>
                            <div className='w-[100px]'>
                                <img className='w-full rounded-lg' src={item.image} alt="" />
                            </div>
                            <div className=' flex flex-col justify-start items-center'>
                                <h2 className=' font-bold'>{item.name}</h2>
                                <h2>Chef :  {item.chef}</h2>
                            </div>
                            <div>
                                <button onClick={() => removeItem(item.id)} className='btn btn-primary'>Remove </button>
                            </div>
                        </div>)

                    }
                    {
                        favoItem.length == 0 ? 'There is a no favorite item' : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default FavoriteRevipes;