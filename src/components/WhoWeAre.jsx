import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"
import pic5 from "../assets/pic5.png"

const WhoWeAre = () => {
  return (
    <section className="relative h-[90vh]   ">
        <img src={pic2} className="size-full object-cover opacity-50 " />
       
       
        <article className="absolute left-0  h-full top-0 w-full md:py-20  flex  p-5 ">
            
            <div className="md:w-1/2 relative w-full    ">
            <div className="flex flex-col absolute w-full md:p-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-5">
                <header className="text-indigo-950 text-5xl font-bold">Getting <span>To Know Us</span></header>
                <p className="text-lg">Who are we? What makes us tick? Welcome to the world
                of takealot.com where extraordinary people come together 
                to do extraordinary things, bringing world-class online shopping
                to the people of South Africa.</p>
                <button className="bg-blue-500 self-start text-white font-semibold p-4 rounded-md">
                Learn About Our Journey
                </button>
            </div>
            </div>

            <div className="hidden md:flex  w-1/2">
                <div className="relative size-full m-10">
                    
                    <div className="absolute left-0 top-0 border-8  border-indigo-950 border-solid ">
                    <img src={pic5} className=" object-cover"/>
                    </div>

                    <div className="absolute left-0 top-0 size-[50%] translate-x-1/2 -translate-y-[30%] border-8  border-indigo-950 border-solid ">
                    <img src={pic3} className=" object-cover size-full "/>
                    </div>

                    <div className="absolute left-0 top-0  size-[50%] translate-x-1/2 translate-y-[90%] border-8  border-indigo-950 border-solid">
                    <img src={pic4} className=" object-cover size-full "/>
                    </div>
                    
                </div>
            </div>
        </article>



    </section>
  )
}

export default WhoWeAre