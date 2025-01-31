import logo from '../assets/loginLogo.png'
import group28 from '../assets/Group 28.png'
import group29 from '../assets/Group 29.png'
import group30 from '../assets/Group 30.png'
function Navbar(){
    return(
        <div className="md:flex bg-white shadow-sm  md:space-between md:justify-betwen items-center font-sans">
            <div className="md:flex-1">
                <div className="max-w-sm">
                <img className="h-14 w-auto" src={logo} alt="logo"/>
                </div>
            </div>
            <div className="md:grow">
                <div className="md:space-x-7">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <ul className="md:flex">
                    <li><a href="#" className=" rounded-md px-3 py-1 text-lg font-semibold  " aria-current="page">Dashboard</a></li>
                    <li><a href="#" className="rounded-md px-3 py-1 text-lg font-semibold  hover:underline  ">Team</a></li>
                    <li><a href="#" className="rounded-md px-3 py-1 text-lg font-semibold  hover:underline  ">Projects</a></li>
                    <li><a href="#" className="rounded-md px-3 py-1 text-lg font-semibold  hover:underline ">Calendar</a></li>
                    <li><a href="#" className="rounded-md px-3 py-1 text-lg font-semibold  hover:underline ">Calendar</a></li>
                    </ul>
                </div>
            </div>
            <div className="md:flex-1 h-14">
                <div className="flex flex-1 gap-4">
                <img src={group28} alt="group28" className="h-16"/>
                <img src={group30} alt="group30" className="h-16"/>
                <img src={group29} alt="group29" className="h-14"/>
                </div>
            </div>
            
        </div>
    )
}
export default Navbar;