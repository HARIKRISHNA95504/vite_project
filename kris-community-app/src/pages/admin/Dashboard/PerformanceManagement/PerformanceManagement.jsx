import {Outlet,Link} from 'react-router-dom'
import Logo from '../../../../assets/logo.png'
import Profile from '../../../../assets/Group 29.png'
import Message from '../../../../assets/message.png'
import Jobs from '../../../../assets/jobs.png'
import Candidates from '../../../../assets/candidates.png'
import Resumes from '../../../../assets/resumes.png'
import User from '../../../../assets/user.png'
import Leave from '../../../../assets/book-open.png'
import Performance from '../../../../assets/performance.png'
import Payroll from '../../../../assets/payroll.png'
import Logout from '../../../../assets/logout.png'
import Group47 from '../../../../assets/Group 47.png'
import Group4 from '../../../../assets/Group 4.png'
import Group28 from '../../../../assets/Group 28.png'
import Group30 from '../../../../assets/Group 30.png'
import bookopen from '../../../../assets/leave.png'
import leave1 from '../../../../assets/leave 1.png'
import arrow2 from '../../../../assets/arrow 2.png'
import arrow3 from '../../../../assets/arrow 3.png'
import performImage from '../../../../assets/performImage.png'
function PerformanceManagement(){
    return (
        <main>
            <div className='flex   bg-sky-100'>
                <div className='w-full'>
                    <p className='font-bold text-xl pl-5'>Performance Management</p>
                    
                    <div className='flex gap-5 p-2 '>
                        <div className='bg-white shadow-lg  cursor-pointer p-3 w-2/6 text-center rounded-full font-semibold  hover:rounded-full  hover:bg-yellow-400 hover:text-center'>
                            <p><Link to='target-setup'>TargetSetup</Link></p>
                        </div>
                        <div className='bg-white shadow-lg  cursor-pointer p-3 w-2/6 text-center rounded-full font-semibold  hover:rounded-full  hover:bg-yellow-400 hover:text-center'>
                            <p><Link to='targets'>Targets</Link></p>
                        </div>
                        <div className='bg-white shadow-lg  cursor-pointer p-3 w-2/6 text-center rounded-full font-semibold  hover:rounded-full  hover:bg-yellow-400 hover:text-center'>
                            <p><Link to='appraisals'>Appraisals</Link></p>
                        </div>
                        <div className='bg-white shadow-lg  cursor-pointer p-3 w-2/6 text-center rounded-full font-semibold  hover:rounded-full  hover:bg-yellow-400 hover:text-center'>
                            <p><Link to='settings'>Settings</Link></p>
                        </div>
                        <div className='bg-white shadow-lg  cursor-pointer p-3 w-2/6 text-center rounded-full font-semibold  hover:rounded-full  hover:bg-yellow-400 hover:text-center'>
                            <p><Link to='reports'>Reports</Link></p>
                        </div>
                    </div>
                    <Outlet/>
                    {/* <div className='flex bg-blue-900 items-center justify-center m-3 gap-10  pt-5 border-none rounded-2xl'>
                        <div className='pr-10'>
                            <p className='font-semibold text-5xl text-white'>Stay Updated on</p>
                            <span className='text-yellow-400 font-semibold text-5xl text-white'>Employees KPI’s</span>
                        </div>
                        <div>
                            <img src={performImage} className=''/>
                        </div>
                    </div>  */}
                    
                </div>
            </div>
        </main>
    )
}
export default PerformanceManagement;
 