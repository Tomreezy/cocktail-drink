import React from 'react'
import { useGetAllDrinksQuery, useGetByAlcoholicQuery, useGetByCategoryQuery } from '../services'
import ClipLoader from 'react-spinners/ClipLoader'

const ProductsList = () => {
  const{data,error,isLoading}=useGetAllDrinksQuery()

  console.log(data)
  console.log(error)
  console.log(isLoading)

  if(isLoading) <div><ClipLoader loading={isLoading} size={200}  /></div>
  if (error) {
    return <div>Error: {error?.message || 'An error occurred'}</div>;
  }

  if (!data?.drinks || data.drinks.length === 0) {
    return <div>No drinks found</div>;
  }
  return (
    <section className='grid sm:grid-cols-2 gap-8 md:grid-cols-4'>
        {data.drinks.map(item=>{
          return <article className='flex flex-col shadow-md rounded-md overflow-hidden' key={item.idDrink}> 
          <div className='h-[60%]'>
            <img className='size-full object-cover' src={item.strDrinkThumb} />
            </div>
            <div className='flex flex-col justify-center'>
              <p className='text-center font-bold'>{item.strDrink}</p>
              <p className='text-center font-light'>{item.idDrink}</p>
            </div>
          </article>
        })}
    </section>
  )
}

export default ProductsList