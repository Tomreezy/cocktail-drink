import React from 'react'

const AboutUsHeader = () => {
  return (
    <header className=' my-8'>
      <ul className='flex list-none justify-between text-sm mx-8'>
        <li className='hover:text-slate-500 cursor-pointer'>Who We Are</li>
        <li className='hover:text-slate-500 cursor-pointer'>Our Journey</li>
        <li className='hover:text-slate-500 cursor-pointer'>Our Values</li>
        <li className='hover:text-slate-500 cursor-pointer'>Our Environment</li>
        <li className='hover:text-slate-500 cursor-pointer'>Careers</li>
        <li className='hover:text-slate-500 cursor-pointer'>Company News</li>
        <li className='hover:text-slate-500 cursor-pointer'>Our Charity</li>
      </ul>
    </header>
  )
}

export default AboutUsHeader