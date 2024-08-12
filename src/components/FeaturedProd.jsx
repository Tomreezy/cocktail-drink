
// components/FeaturedProd.js
import React from 'react';
import { useGetByCategoryQuery,useGetByAlcoholicQuery } from '../services'; // Adjust path if necessary
import ClipLoader from 'react-spinners/ClipLoader';

const alcoholic = "alcohol";

const FeaturedProd = () => {
  const { data, error, isLoading } = useGetByAlcoholicQuery(alcoholic);

  if (isLoading) {
    return <div className='grid place-content-center'><ClipLoader loading={isLoading} size={100} /></div>;
  }

  if (error) {
    return <div>Error: {error?.message || 'An error occurred'}</div>;
  }

  if (!data?.drinks || data.drinks.length === 0) {
    return <div>No drinks found</div>;
  }

  return (
    <section className='px-6 md:px-0'>
      <h2 className='text-3xl text-indigo-950'>Featured Products</h2>
      <hr className='w-full bg-grey-500 h-1 rounded-md my-12' />
      <article className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {data.drinks.slice(0, 9).map(item => (
          <div className='shadow-md' key={item.idDrink}>
            <div className='rounded-lg overflow-hidden m-4 h-2/3'>
              <img src={item.strDrinkThumb || 'fallback-image-url'} alt={item.strDrink || 'Drink'} className='w-full h-full object-contain' />
            </div>
            <div className='h-1/3'>
              <p className='text-center font-semibold text-lg'>{item.strDrink || 'Unknown Drink'}</p>
              <p className='text-center font-thin text-lg'>R {item.idDrink || 'Unknown'}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default FeaturedProd;
