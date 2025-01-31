import Logo1 from '../../assets/logo.png'
function Login(){
    return(
       <main className=" bg-blue-950 min-h-screen  md:col-span-4 ">
            <img className='max-w-50' src={Logo1}/>
            <div className='flex items-center justify-center mt-10'>
                <form className="w-full">
                    <div className=" justify-items-center ">
                        <h1 className="text-4xl font-bold text-white ">Login</h1>
                        <p className="text-lg  text-white mt-3">Login to your account.</p>
                        <div className="w-5/6 md:w-2/6 mt-6 ">
                            <lable htmlFor="E-mail-Address" className="block  text-sm font-medium text-white">E-mail Address</lable>
                            <input type="email" name="E-mail-Address"className="block mt-2 border border-white bg-white py-2 w-full" autoComplete="E-mail-Address"/>
                        </div>
                        <div className="w-5/6 md:w-2/6 mt-6 ">
                            <lable htmlFor="password" className="block  text-sm font-medium text-white mt-2">Passsword</lable>
                            <input type="password" name="password"className="block  mt-2 border border-white bg-white py-2 w-full" autoComplete="password"/>
                        </div>
                        <div className=" container w-5/6 md:w-2/6 md:flex justify-between items-center mt-6">
                            <div className=" container flex justify-between items-center">
                                <div className="">
                                    <input type="checkbox" name="remember" id="remember"/>
                                    <label htmlFor="remember" className="text-white ">Remember me</label>
                                </div>
                                <p className="text-white text-sm">Reset Password?</p>
                                
                            </div>
                        </div>
                        <div className="w-5/6  md:w-2/6">
                            <button type="submit" className=" block mt-9 border  bg-yellow-400 font-medium text-xl py-2 w-full">SignIn</button>
                        </div>
                        
                    </div>
                </form>
            </div>
            
       </main>
    )
}
export default Login;