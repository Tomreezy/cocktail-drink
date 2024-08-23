import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useReducer } from 'react';



const NavBarMain = ()=>{
    const[show,setShow]=useState(false)
    

    const height = useRef(null)
    const heightOrg = useRef(null)


    

    return (
        <header className="flex flex-col ">
               
               {show && (
                <div className='transition duration-300 z-50 bg-white' >
                <div  className='absolute mt-10 flex-column space-y-10 text-2xl mt-10 justify-center sm:hidden h-screen bg-white w-screen text-center '>
                    <p onClick={()=> setShow(false)} className='hover:bg-indigo-100 rounded-md p-2 transition-all duration-200 cursor-pointer'><NavLink to={"/"}>Home</NavLink></p>
                    <p onClick={()=> setShow(false)} className='hover:bg-indigo-100 rounded-md p-2 transition-all duration-200 cursor-pointer'><NavLink to={"User/login"}>Sign In</NavLink></p>
                    <p onClick={()=> setShow(false)} className='hover:bg-indigo-100 rounded-md p-2 transition-all duration-200 cursor-pointer'><NavLink to={"User/register"}>Register</NavLink></p>
                    <p onClick={()=> setShow(false)} className='hover:bg-indigo-100 rounded-md p-2 transition-all duration-200 cursor-pointer'><NavLink to={"/products"}>Products</NavLink></p>
                    <p onClick={()=> setShow(false)} className='hover:bg-indigo-100 rounded-md p-2 transition-all duration-200 cursor-pointer'><NavLink to={"/about"}>About</NavLink></p>
                    <p onClick={()=> setShow(false)} className='hover:bg-indigo-100 rounded-md p-2 transition-all duration-200 cursor-pointer'><NavLink to={"/cart"}>Cart</NavLink></p>
                </div>
                </div>)}


            {!show && (<section className="text-center  md:text-right text-sm p-2 text-white bg-indigo-950">  <p className="space-x-3 md:mr-20"><span className='cursor-pointer hover:underline'> <NavLink to={"User/login"}>Sign in / Guest</NavLink></span> <span className='hover:underline cursor-pointer'><NavLink to={"User/register"}>Create Account</NavLink></span></p>  </section>)}
            
            <section className="bg-blue-100 ">
               <div className='p-2 flex mx-auto max-w-5xl items-center justify-between'>
                <p className=' sm:hidden'><MenuIcon onClick={()=> setShow(!show)} className='cursor-pointer ' fontSize='medium'  /></p>
                <h1 className="text-center hidden sm:flex cursor-pointer text-white bg-blue-500 text-4xl font-bold p-2 rounded-md"><NavLink to={"/"}>W</NavLink></h1>
                <nav className='hidden sm:flex  font-lg space-x-2'>
                    <p className='py-2 cursor-pointer px-1 hover:bg-blue-200 rounded-md '><NavLink style={({isActive})=>({backgroundColor: isActive?"indigo":"",color:isActive?"white":"",padding:isActive?"14px":"",borderRadius:isActive?"3px  10px":""})} to={"/"}>Home</NavLink></p>
                    <p className='py-2 cursor-pointer px-1 hover:bg-blue-200 rounded-md ' ><NavLink style={({isActive})=>({backgroundColor: isActive?"indigo":"",color:isActive?"white":"",padding:isActive?"14px":"",borderRadius:isActive?"3px 5px":""})}  to={"products"}>Product</NavLink></p>
                    <p className='py-2 cursor-pointer px-1 hover:bg-blue-200 rounded-md ' ><NavLink style={({isActive})=>({backgroundColor: isActive?"indigo":"",color:isActive?"white":"",padding:isActive?"14px":"",borderRadius:isActive?"3px 10px ":""})}  to={"about"}>About</NavLink></p>
                    <p className='py-2 cursor-pointer px-1 hover:bg-blue-200 rounded-md ' ><NavLink style={({isActive})=>({backgroundColor: isActive?"indigo":"",color:isActive?"white":"",padding:isActive?"14px":"",borderRadius:isActive?"3px 10px ":""})}  to={"cart"}>Cart</NavLink></p>
                </nav>

               
                <p className='space-x-3'><span> <NightlightIcon className='cursor-pointer text-blue-500' fontSize='small' /></span>  <span>< ShoppingCartIcon fontSize='large' className='bg-transparent text-blue-500 rounded-md cursor-pointer p-1' /></span></p>
               
                
                </div>
                
            </section>
        </header>
    )
}

export default NavBarMain