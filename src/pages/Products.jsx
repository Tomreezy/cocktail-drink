import React, { useState } from 'react'
import ProductsList from '../components/ProductsList'

const Products = () => {
  const[start,setStart]=useState(0)
  const[end,setEnd]=useState(12)

  function handleNext(){
    if(start>100){
      return
    }

    setStart((prev)=>prev+12)
    setEnd((prev)=>prev+12)
  }

  function handlePrev(){
    if(end<0){
      return
    }

    setStart((prev)=>prev-12)
    setEnd((prev)=>prev-12)
  }

  return (
    <main className=' '>
      <h2 className='text-3xl font-bold underline bg-blue-300'>Product search </h2>
      <hr className='my-2 h-1 w-full'/>
      <div className='grid md:grid-cols-3 mt-10 max-w-5xl mx-auto'>
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
      <ProductsList start={start} end={end} />
      </div>
      </div>
      <div className='flex justify-center space-x-4'>
      <button className='border border-indigo-950 border-solid bg-indigo-400 p-2' onClick={handlePrev}>Prev</button>
      <button className='border border-indigo-950 border-solid bg-indigo-400 p-2' onClick={handleNext}>Next</button>
      </div>
    </main>
  )
}

export default Products