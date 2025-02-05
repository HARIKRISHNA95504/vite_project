import Logo from '../../assets/logo.png'
import Profile from '../../assets/Group 29.png'
import Message from '../../assets/message.png'
import Jobs from '../../assets/jobs.png'
import Candidates from '../../assets/candidates.png'
import Resumes from '../../assets/resumes.png'
import User from '../../assets/user.png'
import Leave from '../../assets/book-open.png'
import Performance from '../../assets/performance.png'
import Payroll from '../../assets/payroll.png'
import Logout from '../../assets/logout.png'
import Group47 from '../../assets/Group 47.png'
import Group4 from '../../assets/Group 4.png'
import Group28 from '../../assets/Group 28.png'
import Group30 from '../../assets/Group 30.png'
import bookopen from '../../assets/leave.png'
import leave1 from '../../assets/leave 1.png'
import arrow2 from '../../assets/arrow 2.png'
import arrow3 from '../../assets/arrow 3.png'
function LeaveManagement(){
    return (
        <main>
            <div className='flex  min-h-screen bg-sky-100'>
                <div className="w-1/6 border-none bg-blue-950  ">
                    <img src={Logo} className='h-16 pl-7 '/>
                    <div className='flex gap-5 justify-center pt-3  items-center text-white'>
                        <img src={Profile} className='h-18'/>
                        <div>
                            <p className='font-bold '>KRIS Admin</p>
                            <span>Admin</span>
                        </div>
                        
                    </div>
                    <div className='text-white'>
                        <h1 className='pl-2'>Features</h1>
                        <p className='border-none rounded text-black px-5 py-3 bg-yellow-400 text-center mr-4 ml-4 mb-2 mt-2 '>DashBoard</p>
                        <div className='flex justify-between p-2'>
                            <div className='flex gap-3'>
                                <img src={Message}/>
                                <p>Messages</p>
                            </div>
                            <p className='border-none rounded rounded-full  bg-red-500'>13</p>
                        </div>
                        <p className='pl-2'>Recruitment</p>
                        <div className='flex gap-4 pl-7 p-1'>
                            <img src={Jobs}/>
                            <p>Jobs</p>
                        </div>
                        <div className='flex gap-3 pl-7 p-1'>
                            <img src={Candidates}/>
                            <p>Candidates</p>
                        </div>
                        <div className='flex gap-6 pl-7 p-1'>
                            <img src={Resumes}/>
                            <p>Resumes</p>
                        </div>
                        <p className='pl-2'>Organization</p>
                        <div className='flex gap-4 pl-7 p-1'>
                            <img src={User}/>
                            <p>Jobs</p>
                        </div>
                        <div className='flex gap-3 pl-7 p-1'>
                            <img src={Leave} />
                            <p>LeaveManagement</p>
                        </div>
                        <div className='flex gap-1 pl-7 p-2'>
                            <img src={Performance}/>
                            <p>PerformanceManagement</p>
                        </div>
                        <p className='pl-2'>KRIS Pay</p>
                        <div className='flex gap-1 pl-7 p-2'>
                            <img src={Payroll}/>
                            <p>Payroll Management</p>
                        </div>
                        <div className='flex gap-2 text-center justify-center bg-red-600 p-2 border-none rounded m-2 cursor-pointer'>
                            <img src={Logout}/>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className='w-5/6'>
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
                    <div className='flex gap-2 pl-2 text-center font-bold'>
                        <img src={bookopen} className='text-black'/>
                        <p>Leave Mangement</p>
                    </div>
                    <div className='flex gap-5 p-2 '>
                        <div className='bg-blue-900 text-white cursor-pointer p-5 w-2/6 text-center rounded font-semibold'>
                            <p>Leave Settings</p>
                        </div>
                        <div className='bg-blue-900 text-white cursor-pointer p-5 w-2/6 text-center rounded font-semibold'>
                            <p>Leave Recall</p>
                        </div>
                        <div className='bg-blue-900 text-white cursor-pointer p-5 w-2/6 text-center rounded font-semibold'>
                            <p>Leave History</p>
                        </div>
                        <div className='bg-blue-900 text-white cursor-pointer p-5 w-2/6 text-center rounded font-semibold'>
                            <p>Relief Officers</p>
                        </div>
                    </div>
                    <div className='flex bg-blue-900 items-center justify-center m-3 rounded'>
                        <div>
                            <img src={arrow2} className='h-25'/>
                            <p className='font-semibold text-6xl text-white'>Manage ALL <span className='text-yellow-500'>Leave Applications</span></p>
                            <p className='text-lg text-white pt-2'>A relaxed employee is a performing employee.</p>
                            <img src={arrow3} className='h-30 pl-86'/>
                        </div>
                        <div>
                            <img src={leave1} className='h-60'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default LeaveManagement;