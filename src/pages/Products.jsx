import React from 'react'
import ProductsList from '../components/ProductsList'

const Products = () => {
  return (
    <main className='max-w-5xl mx-auto grid md:grid-cols-3 mt-10'>
      <aside className='hidden md:flex  p-5'>
      <div className='h-[20vh] w-full'>

      <input
        type="text"
        
        placeholder="Search items..."
        style={{
          padding: '8px',
          marginBottom: '16px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      />
     

      </div>
      </aside>



      <div className='col-start-2 col-end-4'>
      <ProductsList />
      </div>
    </main>
  )
}

export default Products