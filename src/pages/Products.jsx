import React from 'react'
import ProductsList from '../components/ProductsList'

const Products = () => {
  return (
    <main className='max-w-5xl mx-auto'>
      <div className='h-[20vh] w-full'>filter</div>
      <ProductsList />
    </main>
  )
}

export default Products