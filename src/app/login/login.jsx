const Login = () => {

    return (
        <>

        <div className="bg-white flex items-center justify-center">
            <form className="flex flex-col space-y-4 bg-white p-6 rounded shadow-lg w-full max-w-sm text-black"> 
                
                {/*Header */}
                <div className="flex flex-col space-y-4 text-center">
                <h1 className="text-2xl font-bold mb-4 ">Welcome back</h1>
                <p>Log in to your account</p>
                </div>


                {/*Email*/}
                <div className="flex flex-col items-center  mt-5 ">
                <label className="block text-sm font-medium">Email
                    <input className="block bg-grey rounded-md shadow border border-black w-70 h-8"type="text"></input>
                </label>    
                </div>

                 {/*Password*/}
                <div className= "flex flex-col items-center ">
                <label className="block text-sm font-medium">Password
                <input className="block bg-grey rounded-md shadow border border-black w-70 h-8" type="text"></input>
                </label>
                </div>
                
                {/*Login Button */}
                <div className="flex flex-col items-center">
                    <button className="w-70 rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 mt-4 text-sm font-medium">
                        Login
                    </button>
                </div>


            </form>
        </div>
        
        </>
    )
}

export default Login 