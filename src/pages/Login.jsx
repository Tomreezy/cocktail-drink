


const Login = ()=>{
    return (
        <div className="grid place-content-center h-screen w-screen bg-blue-100">

            <form className=" bg-white w-[80vw] max-w-96 rounded-sm shadow-md overflow-hidden ">
                <hr className="bg-blue-500 w-full h-1 rounded-sm" />
                <div className="m-8  ">
                <p className="text-center mt-14"><span className="text-center text-white bg-blue-500 text-4xl font-bold p-1 rounded-md">W</span> <span className="text-blue-500 text-2xl font-bold">Winery</span></p>
                <p className="text-center text-2xl font-bold mt-8">Login</p>

                <div className="space-y-2 mt-8">
                    <label className="block">Email:</label>
                    <input className="bg-blue-100 border outline-none border-blue-500 border-solid w-full rounded-sm px-3 py-1" />
                </div>

                
                <div className="space-y-2 mb-2 mt-8">
                    <label htmlFor="password" className="block">Password:</label>
                    <input id="password" className="bg-blue-100 outline-none border border-blue-500 border-solid w-full rounded-sm px-3 py-1" />
                </div>

                <button className="w-full mt-8 bg-blue-500 mb-8 py-1 text-white rounded-sm">Submit</button>

                <p className="text-center">Not a member yet? <span className="text-blue-500">Register</span></p>
                </div>
            </form>
        </div>
    )
}

export default Login