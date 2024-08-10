import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { NavLink } from 'react-router-dom';



const NavBarMain = ()=>{
    return (
        <header className="flex flex-col ">
            <section className="text-center  md:text-right text-sm p-2 text-white bg-indigo-950">  <p className="space-x-3 md:mr-20"><span className='cursor-pointer hover:underline'> <NavLink to={"User/login"}>Sign in / Guest</NavLink></span> <span className='hover:underline cursor-pointer'><NavLink to={"User/register"}>Create Account</NavLink></span></p>  </section>
            
            <section className="bg-blue-100 ">
               <div className='p-2 flex mx-auto max-w-5xl items-center justify-between'>
                <p className=' sm:hidden'><MenuIcon className='cursor-pointer ' fontSize='medium'  /></p>
                <h1 className="text-center hidden sm:flex cursor-pointer text-white bg-blue-500 text-4xl font-bold p-2 rounded-md"><NavLink to={"/"}>W</NavLink></h1>
                <nav className='hidden sm:flex  font-lg'>
                    <p className='py-2 cursor-pointer px-3 hover:bg-blue-200 rounded-md '><NavLink to={"/"}>Home</NavLink></p>
                    <p className='py-2 cursor-pointer px-3 hover:bg-blue-200 rounded-md ' >Product</p>
                    <p className='py-2 cursor-pointer px-3 hover:bg-blue-200 rounded-md ' >About</p>
                </nav>

               
                <p className='space-x-3'><span> <NightlightIcon className='cursor-pointer text-blue-500' fontSize='small' /></span>  <span>< ShoppingCartIcon fontSize='large' className='bg-transparent text-blue-500 rounded-md cursor-pointer p-1' /></span></p>
                </div>
            </section>
        </header>
    )
}

export default NavBarMain