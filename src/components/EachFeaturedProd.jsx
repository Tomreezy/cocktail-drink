import { useState } from "react"



const EachFeaturedProducts=({item})=>{
    const[hover,setHover]=useState(false)


    return (
        <div className="cursor-pointer">
            <div className='shadow-md' onMouseLeave={()=> setHover(false)} onMouseMove={()=> setHover(true)} key={item.idDrink}>
            <div className='rounded-md relative border-4 border-solid border-indigo-950 overflow-hidden m-4 h-2/3'>
              <img src={item.strDrinkThumb || 'fallback-image-url'} alt={item.strDrink || 'Drink'} className={`w-full transition-all duration-300  h-full object-cover ${hover?"scale-125":""}`} />
            
              {hover && (<div className='flex absolute w-full m-2 p-2 bottom-4 left-0 justify-center space-x-4 text-center '>
                <p className='rounded-full border-indigo-950 text-indigo-950 p-2 bg-indigo-200 text-lg cursor-pointer opacity-50 border-2'>cart</p>
                <p className='rounded-full border-indigo-950 text-indigo-950 p-2 bg-indigo-200 cursor-pointer opacity-50 text-lg  border-2'>wish</p>
                
                
              </div>)}
            
            </div>
            <div className='h-1/3  mb-5 relative'>
              <p className='text-center font-semibold text-lg'>{item.strDrink || 'Unknown Drink'}</p>
              <p className='text-center font-thin text-red-700 text-lg'>$ {item.idDrink || 'Unknown'}</p>
              
            </div>
          </div>
        </div>
    )
}

export default EachFeaturedProducts