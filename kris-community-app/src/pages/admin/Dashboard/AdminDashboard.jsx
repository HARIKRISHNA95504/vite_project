import {Outlet,Link,useNavigate} from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import Profile from '../../../assets/Group 29.png'
import Message from '../../../assets/message.png'
import Jobs from '../../../assets/jobs.png'
import Candidates from '../../../assets/candidates.png'
import Resumes from '../../../assets/resumes.png'
import User from '../../../assets/user.png'
import Leave from '../../../assets/book-open.png'
import Performance from '../../../assets/performance.png'
import Payroll from '../../../assets/payroll.png'
import Logout from '../../../assets/logout.png'
import Group47 from '../../../assets/Group 47.png'
import Group4 from '../../../assets/Group 4.png'
import Group28 from '../../../assets/Group 28.png'
import Group30 from '../../../assets/Group 30.png'
import Ellipsis from '../../../assets/ellipsis-v.png'
import SalesExecutive from '../../../assets/Rectangle 34.png'
import UserExperience from '../../../assets/Rectangle 36.png'
import ProuctManager from '../../../assets/Rectangle 38.png'
import JohnDoe from '../../../assets/Ellipse 12.png'
import GinnaLoe from '../../../assets/Ellipse 13.png'
import JohnDore from '../../../assets/Ellipse 14.png'
import View from '../../../assets/Vector.png'
import Download from '../../../assets/download.png'
function AdminDashboard(){
    const navigate = useNavigate()
    const EmployeeManagement=()=>{
        navigate('/employee-management')
    }
    return(
        <main >
            <div className="flex min-h-screen bg-sky-100">
                <div className="w-1/6 border-none bg-blue-950  ">
                    <img src={Logo} className='h-16 pl-7 '/>
                    <div className='flex gap-5 justify-center pt-3  items-center text-white'>
                        <img src={Profile} className='h-18'/>
                        <div>
                            <p className='font-bold '>KRIS Admin</p>
                            <span>Admin</span>
                        </div>
                       
                    </div>
                    <div className='text-white '>
                        <h1 className='pl-2'>Features</h1>
                        <p className='border-none rounded text-black px-5 py-3 bg-yellow-400 text-center mr-4 ml-4 mb-2 mt-2 '><Link to="dashboard">DashBoard</Link></p>
                        <div className='flex justify-between p-2'>
                            <div className='flex gap-3'>
                                <img src={Message}/>
                                <p>Messages</p>
                            </div>
                            <p className='border-none rounded rounded-full  bg-red-500'>13</p>
                        </div>
                        <p className='pl-2'>Recruitment</p>
                        <div className='flex gap-4 pl-7 p-1 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                            <img src={Jobs}/>
                            <p>Jobs</p>
                        </div>
                        <div className='flex gap-3 pl-7 p-1 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                            <img src={Candidates}/>
                            <p>Candidates</p>
                        </div>
                        <div className='flex gap-6 pl-7 p-1 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                            <img src={Resumes}/>
                            <p>Resumes</p>
                        </div>
                        <p className='pl-2'>Organization</p>
                        <div className='flex gap-4 pl-7 p-1 hover:cursor-pointer hover:border-none hover:rounded hover:text-black   hover:bg-yellow-400 hover:text-center hover:mr-1 hover:ml-1  hover:mt-2'>
                            <img src={User}/>
                            <p onClick={EmployeeManagement} >EmployeeManagement</p>
                        </div>
                        <div className='flex gap-3 pl-7 p-1 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                            <img src={Leave}/>
                            <p><Link to="/leave-management" >LeaveManagement</Link></p>
                        </div>
                        <div className='flex gap-1 pl-7 p-2 hover:p-1 hover:border-none hover:rounded hover:text-black hover:ml-2 hover:mr-2   hover:bg-yellow-400 hover:text-center  hover:mt-2'>
                            <img src={Performance}/>
                            <p>PerformanceManagement</p>
                        </div>
                        <p className='pl-2'>KRIS Pay</p>
                        <div className='flex gap-1 pl-7 p-2 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                            <img src={Payroll}/>
                            <p>Payroll Management</p>
                        </div>
                        <div className='flex gap-2 text-center justify-center bg-red-600 p-2 border-none rounded m-2 cursor-pointer'>
                            <img src={Logout}/>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className="w-5/6">
                    <div className='flex justify-between text-center items-center p-1'>
                        <div>
                            <img src={Group47}/>
                        </div>
                        <div className='text-white'>
                            <input type="number" placeholder='allCandidates' className='px-2 py-2 bg-blue-900 text-white'/>
                            <input type='search' className='bg-white px-28 py-2 text-gray-500' placeholder='search.....'/>
                        </div>
                        <div className='flex'>
                            <img src={Group4}/>
                            <img src={Group28}/>
                            <img src={Group30}/>
                        </div>
                    </div>
                    {/* <p className='font-bold pl-2'>Dashboard</p>
                    <div className='flex gap-2 p-2 text-white'>
                        <div className='w-1/7 py-4 p-2 border-none rounded  bg-yellow-500 flex justify-between'>
                            <img src={Message} />
                            <div>
                                <p className='font-bold'>138</p>
                                <span className='font-semibold'>Messages</span>
                            </div>
                        </div>
                        <div className='w-1/7 py-4 p-2 border-none rounded  bg-blue-900 flex justify-between'>
                            <img src={Jobs} />
                            <div>
                                <p className='font-bold'>138</p>
                                <span className='font-semibold'>Messages</span>
                            </div>
                        </div>
                        <div className='w-1/7 py-4 p-2 border-none rounded  bg-green-700 flex justify-between'>
                            <img src={Candidates} />
                            <div>
                                <p className='font-bold'>138</p>
                                <span className='font-semibold'>Messages</span>
                            </div>
                        </div>
                        <div className='w-1/7 py-4 p-2 border-none rounded  bg-black flex justify-between'>
                            <img src={Resumes} />
                            <div >
                                <p className='font-bold'>138</p>
                                <span className='font-semibold'>Messages</span>
                            </div>
                        </div>
                        <div className='w-1/7 py-4 p-2 border-none rounded  bg-yellow-500 flex justify-between'>
                            <img src={User} />
                            <div>
                                <p className='font-bold'>138</p>
                                <span className='font-semibold'>Messages</span>
                            </div>
                        </div>
                        <div className='w-1/7 py-4 p-2 border-none rounded  bg-blue-950 flex justify-between'>
                            <img src={Leave} />
                            <div>
                                <p className='font-bold'>138</p>
                                <span className='font-semibold'>Messages</span>
                            </div>
                        </div>
                        <div className='w-1/7 py-4 p-2 border-none rounded  bg-green-700  flex justify-between'>
                            <img src={Payroll} />
                            <div>
                                <p className='font-bold'>138</p>
                                <span className='font-semibold'>Messages</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className='grid grid-cols-2 p-2 gap-3'>
                        <div className=' container bg-white p-2 border-none rounded'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Applied Jobs</p>
                                <img src={Ellipsis} className='h-5'/>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex '>
                                    <img src={SalesExecutive} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>Sales Executive</p>
                                        <span className='text-gray-500 text-sm'>Access Bank</span>
                                    </div>
                                </div>
                                <p className='text-gray-500'>20 mins ago</p>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex '>
                                    <img src={UserExperience} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>User Experience Designer</p>
                                        <span className='text-gray-500 text-sm'>Paystack</span>
                                    </div>
                                </div>
                                <p className='text-gray-500'>10 mins ago</p>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex '>
                                    <img src={ProuctManager} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>Product Manager</p>
                                        <span className='text-gray-500 text-sm'>T-Pay</span>
                                    </div>
                                </div>
                                <p className='text-gray-500'>5 mins ago</p>
                            </div>
                        </div>
                        <div className=' container bg-white p-2 border-none rounded'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Employees</p>
                                <img src={Ellipsis} className='h-5'/>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex gap-2 '>
                                    <img src={JohnDoe} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>John Doe</p>
                                        <span className='text-gray-500 text-sm'>Role : Product Manager </span>
                                    </div>
                                </div>
                                <div className='flex gap-2 pr-2 '>
                                    <div>
                                        <p className='text-sm font-semibold'>View</p>
                                        <img src={View} className='bg-green-600 p-1 rounded cursor-pointer'/>
                                    </div>
                                    <div>
                                        <p className='text-sm font-semibold'>Download</p>
                                        <img src={Download} className='h-5 bg-blue-900 p-1 text-center cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex gap-2'>
                                    <img src={GinnaLoe} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>Ginna Loe</p>
                                        <span className='text-gray-500 text-sm'>Role : Sales Executive</span>
                                    </div>
                                </div>
                                <div className='flex gap-2 pr-2 '>
                                    <div>
                                        <p className='text-sm font-semibold'>View</p>
                                        <img src={View} className='bg-green-600 p-1 rounded cursor-pointer'/>
                                    </div>
                                    <div>
                                        <p className='text-sm font-semibold'>Download</p>
                                        <img src={Download} className='h-5 bg-blue-900 p-1 text-center cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex gap-2'>
                                    <img src={JohnDore} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>John Dore</p>
                                        <span className='text-gray-500 text-sm'>Role : UI UX Designer</span>
                                    </div>
                                </div>
                                <div className='flex gap-2 pr-2 '>
                                    <div>
                                        <p className='text-sm font-semibold'>View</p>
                                        <img src={View} className='bg-green-600 p-1 rounded cursor-pointer'/>
                                    </div>
                                    <div>
                                        <p className='text-sm font-semibold'>Download</p>
                                        <img src={Download} className='h-5 bg-blue-900 p-1 text-center cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' container bg-white p-2 border-none rounded'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Candidates</p>
                                <img src={Ellipsis} className='h-5'/>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex gap-2 '>
                                    <img src={JohnDoe} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>John Doe</p>
                                        <span className='text-gray-500 text-sm'>Applied for : Product Manager </span>
                                    </div>
                                </div>
                                <div className='flex gap-2 pr-2 '>
                                    <div>
                                        <p className='text-sm font-semibold'>ATS Score(%)</p>
                                        <p className='  bg-sky-600 w-2/6 text-white text-center rounded rounded-full cursor-pointer '>80</p>
                                    </div>
                                    <div>
                                        <p className='text-sm font-semibold'>View</p>
                                        <img src={View} className='bg-green-600 p-1 rounded cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex gap-2'>
                                    <img src={GinnaLoe} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>Ginna Loe</p>
                                        <span className='text-gray-500 text-sm'>Applied for : Sales Executive</span>
                                    </div>
                                </div>
                                <div className='flex gap-2 pr-2 '>
                                    <div>
                                        <p className='text-sm font-semibold'>ATS Score(%)</p>
                                        <p className='  bg-red-600 w-2/6 text-white text-center rounded rounded-full cursor-pointer '>80</p>
                                    </div>
                                    <div>
                                        <p className='text-sm font-semibold'>View</p>
                                        <img src={View} className='bg-green-600 p-1 rounded cursor-pointer'/>
                                    </div>   
                                </div>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex gap-2'>
                                    <img src={JohnDore} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>John Dore</p>
                                        <span className='text-gray-500 text-sm'>Applied for : Product Manager</span>
                                    </div>
                                </div>
                                <div className='flex gap-2 pr-2 '>
                                    <div>
                                        <p className='text-sm font-semibold'>ATS Score(%)</p>
                                        <p className='  bg-yellow-500 w-2/6 text-white text-center rounded rounded-full cursor-pointer '>80</p>
                                    </div>
                                    <div>
                                        <p className='text-sm font-semibold'>View</p>
                                        <img src={View} className='bg-green-600 p-1 rounded cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' container bg-white p-2 border-none rounded'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>April Payrolls</p>
                                <img src={Ellipsis} className='h-5'/>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex gap-2 '>
                                    <img src={JohnDoe} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>John Doe</p>
                                        <span className='text-gray-500 text-sm'>Salary Amount :  N500,000 </span>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-sm font-semibold text-center text-gray-500'>Paid</p>
                                    <p className='  bg-green-600  h-2 px-12 rounded rounded-full cursor-pointer '></p>
                                </div>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex gap-2'>
                                    <img src={GinnaLoe} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>Ginna Loe</p>
                                        <span className='text-gray-500 text-sm'>Applied for : Sales Executive</span>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-sm font-semibold text-center text-gray-500'>Processing</p>
                                    <p className='  bg-yellow-400  h-2 px-12 rounded rounded-full cursor-pointer '></p>
                                </div>
                            </div>
                            <div className='flex justify-between bg-sky-100 p-1 border-none rounded mt-2'>
                                <div className='flex gap-2'>
                                    <img src={JohnDore} className='h-12'/>
                                    <div>
                                        <p className='font-bold text-sm'>John Dore</p>
                                        <span className='text-gray-500 text-sm'>Applied for : Product Manager</span>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-sm font-semibold text-center text-gray-500'>Processing</p>
                                    <p className='  bg-yellow-400  h-2 px-12 rounded rounded-full cursor-pointer '></p>
                                </div>
                            </div>
                        </div>
                        
                        
                       
                    </div> */}
                    <Outlet/>
                </div>
            </div>
        </main>
    )
}
export default AdminDashboard;