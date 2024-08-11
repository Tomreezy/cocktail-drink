import React, { useEffect, useState } from 'react'





const FeaturedProd = () => {
    const[category,setCategory]=useState([])

    const categoryItem=category.slice(0,9)
    const fetchData = async ()=>{
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
            const data = await response.json()
            if(data){
                setCategory(data.drinks)
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(category)
  return (
    <section className='px-6 md:px-0'>
    <h2 className='text-3xl text-indigo-950'>Featured Products</h2>
    <hr className='w-full bg-grey-500 h-1 rounded-md my-12' />

    <article className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {categoryItem.length > 0 && categoryItem.map(item=>{
            return (<div className='shadow-md'>
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