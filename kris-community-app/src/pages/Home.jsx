import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
function Home(){
    return(
        <main className=' '>
            
            <div className="flex flex-col items-center justify-center min-h-screen bg-blue-950 p-9">
                <img src={Logo} className='h-14 mb-5'/>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <p className="text-center rounded hover:text-white hover:bg-yellow-500 mb-4 text-lg font-semibold">
                        <Link to="/login" className=" ">Employee Login</Link>
                    </p>
                    <p className="text-center rounded mb-4 text-lg font-semibold hover:text-white hover:bg-yellow-500">
                        <Link to="/admin-login" className="">Admin Login</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
export default Home;