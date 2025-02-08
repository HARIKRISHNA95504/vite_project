import {Link,useNavigate} from 'react-router-dom'
import Logo from '../assets/logo.png'
function Home(){
    const navigate = useNavigate()
    const navigateEmployeeLogin = ()=>{
        navigate('/employee')
    }
    const navigateAdminLogin = ()=>{
        navigate('/admin')
    }
    return(
        <main className=' '>
            
            <div className="flex flex-col items-center justify-center min-h-screen bg-blue-950 p-9">
                <img src={Logo} className='h-14 mb-5'/>
                <div className="bg-white p-6 flex-col justify-center text-center  rounded-lg shadow-lg max-w-sm w-full">
                    <div>
                        <button onClick={navigateEmployeeLogin} className="text-center rounded hover:text-white hover:bg-yellow-500 mb-4 text-lg font-semibold cursor-pointer px-3">
                            Employee Login
                        </button>
                    </div>
                    <div>
                        <button onClick={navigateAdminLogin} className="text-center rounded mb-4 text-lg font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer px-3">
                            Admin Login
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Home;