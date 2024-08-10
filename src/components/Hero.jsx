import winePic from "../assets/wine-pic.png.jpg";
import { NavLink } from "react-router-dom";


const Hero = () => {
  return (
    <section className='flex px-6 md:px-0 py-20 '>
        <article className='sm:w-1/2 space-y-12'>
        <p className='text-5xl md:text-[4rem] mr-1 font-bold text-indigo-950'>We are changing the way people shop</p>
        <p className='text-slate-500 text-lg mr-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Tempore repellat explicabo enim soluta temporibus asperiores
          aut obcaecati perferendis porro nobis.</p>
          <button className='bg-blue-500 text-white font-semibold p-4 rounded-md'><NavLink to={"products"}>OUR PRODUCTS</NavLink></button>
        </article>
        <article className='hidden sm:flex w-[50%] h-[60vh] ml-3 border-8 rounded-3xl border-solid border-indigo-950'>
            <img src={winePic} className="object-cover w-full h-full" />
        </article>
    </section>
  )
}

export default Hero