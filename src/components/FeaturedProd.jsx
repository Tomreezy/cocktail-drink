import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader"




const FeaturedProd = () => {
    const[category,setCategory]=useState([])
    const[isLoading,setIsLoading]=useState(false)

    const categoryItem=category.slice(0,9)
    const fetchData = async ()=>{
        try{
            setIsLoading(true)
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
            const data = await response.json()
            if(data){
                setCategory(data.drinks)
                setIsLoading(false) 
            }
        }catch(err){
            console.log(err)
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <section className='px-6 md:px-0'>
    <h2 className='text-3xl text-indigo-950'>Featured Products</h2>
    <hr className='w-full bg-grey-500 h-1 rounded-md my-12' />

    <article className={isLoading?"grid place-content-center" :'grid gap-4 md:grid-cols-2 lg:grid-cols-3'}>
        {isLoading? <ClipLoader loading={isLoading} size={100} />  : categoryItem.map(item=>{
            return (<div className='shadow-md' key={item.idDrink}>
                <div className='rounded-lg overflow-hidden m-4 h-2/3'>
                    <img src={item.strDrinkThumb} className='size-full object-contain ' />
                </div>
                <div className='h-1/3'>
                <p className='text-center font-semibold text-lg'>{item.strDrink}</p>
                <p className='text-center font-thin text-lg'>R {item.idDrink}</p>
                </div>
            </div>)
        })}
    </article>

    </section>
  )
}

export default FeaturedProd