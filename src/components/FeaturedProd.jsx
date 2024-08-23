
// components/FeaturedProd.js
import React, { useState } from 'react';
import { useGetByCategoryQuery,useGetByAlcoholicQuery } from '../services'; // Adjust path if necessary
import ClipLoader from 'react-spinners/ClipLoader';
import EachFeaturedProducts from './EachFeaturedProd';

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
      {data.drinks.slice(0, 9).map((item,index) => {
          return <EachFeaturedProducts item={item}  key={index}/>
      })}
      </article>
    </section>
  );
};

export default FeaturedProd;
