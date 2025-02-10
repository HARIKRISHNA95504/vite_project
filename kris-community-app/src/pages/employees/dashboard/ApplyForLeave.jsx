import Navbar from "../../../components/navabar";
import filter from '../../../assets/filter.png'
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react'
import axios from 'axios'    
function applyForLeave(){
    const [leaveHistory,setLeaveHistory] = useState([])
     useEffect(()=>{
        getAllLeaves()
     },[])

     const getAllLeaves=async()=>{
        try{
            const response = await axios.get('http://localhost:4000/leaves')
            setLeaveHistory(response.data)
        }catch(error){
            console.log(error)
        }
     }

    const navigate = useNavigate()
    const navigateAnnualLeave = ()=>{
        navigate('/annual-leave')
    }
    const navigateSickLeave =()=>{
        navigate('/sickleave')
    }
    const navigateDashboard=()=>{
        navigate('/employee/dashboard-main')
    }
    return(
        <main>
            <div className="font-sans bg-sky-100 min-h-screen">
            <Navbar/>
            <div className="md:pl-5 md:pr-5 md:pt-5">
                <p className="bg-white md:max-w-screen md:py-3 md:pl-2 border-none rounded"><span onClick={navigateDashboard} className="cursor-pointer">DashBoard</span>-- applyForLeave</p>
            </div>
            <div>
                
                <div className="md:flex md:justify-start md:space-x-20 pt-3">
                    <div className="flex justify-center items-center space-x-5 ml-5 rounded bg-indigo-950">
                     <h1 className="w-20 h-20 m-2 bg-white text-indigo-950 text-5xl font-semibold flex items-center justify-center border-none rounded-full">60</h1>
                     <div className="text-center items-center pr-3">
                        <p className="font-semibold text-white ">Annual Leave</p>
                        <button className="bg-yellow-500 text-lg px-5 text-center font-semibold rounded rounded-full hover:cursor-pointer" onClick={navigateAnnualLeave}>Apply</button>
                     </div>
                    </div>
                    <div className="flex justify-center items-center space-x-5 ml-5 rounded bg-indigo-950">
                     <h1 className="w-20 h-20 m-2 bg-white text-indigo-950 text-5xl font-semibold flex items-center justify-center border-none rounded-full">20</h1>
                     <div className="text-center items-center pr-3">
                        <p className="font-semibold text-white ">Sick Leave</p>
                        <button className="bg-yellow-500 text-lg px-5 text-center font-semibold rounded rounded-full hover:cursor-pointer" onClick={navigateSickLeave}>Apply</button>
                     </div>
                    </div>
                    <div className="flex justify-center items-center space-x-5 ml-5 rounded bg-indigo-950">
                     <h1 className="w-20 h-20 m-2 bg-white text-indigo-950 text-5xl font-semibold flex items-center justify-center border-none rounded-full">60</h1>
                     <div className="text-center items-center pr-3">
                        <p className="font-semibold text-white ">Maternity Leave</p>
                        <button className="bg-yellow-500 text-lg px-5 text-center font-semibold rounded rounded-full hover:cursor-pointer">Apply</button>
                     </div>
                    </div>
                    <div className="flex justify-center items-center space-x-5 ml-5 rounded bg-indigo-950">
                     <h1 className="w-20 h-20 m-2 bg-white text-indigo-950 text-5xl font-semibold flex items-center justify-center border-none rounded-full">30</h1>
                     <div className="text-center items-center pr-3">
                        <p className="font-semibold text-white ">Compassionate Leave</p>
                        <button className="bg-yellow-500 text-lg px-5 text-center font-semibold rounded rounded-full hover:cursor-pointer">Apply</button>
                     </div>
                    </div>
                </div>
                <div className="md:ml-5 md:pt-5">
                    <div className="flex justify-between md:w-5/6 pt-5 ">   
                        <p>Leave History</p>
                        <div className="flex justify-center items-center space-x-5">
                            {/* <p className="text-xl"><i class="fa-solid fa-filter"></i></p> */}
                            <img src={filter} width={25} className="cursor-pointer"/>
                            <span><button className="rounded px-8 p-1 bg-green-600 cursor-pointer">Export</button></span>
                        </div>
                    </div>
                    <table className=" rounded md:p-2 text-center ">
                        <thead>
                            <tr>
                                <th className="border-none  md:p-2 md:px-14 md:text-xl">Name(s)</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Duration(s)</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Start Date</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">End Date</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Type</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Reason(s)</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {leaveHistory.map(leave =>(
                                 <tr className=" bg-none rounded bg-white hover:bg-sky-100 pt-3 pb-3 ">
                                 <td className="border-none  md:p-auto md:px-auto md:p-3">{leave.name}</td>
                                 <td className="border-none  md:p-auto md:px-auto">{leave.duration}</td>
                                 <td className="border-none  md:p-auto md:px-auto">{leave.startDate}</td>
                                 <td className="border-none  md:p-auto md:px-auto">{leave.endDate}</td>
                                 <td className="border-none  md:p-auto md:px-auto">{leave.leaveType}</td>
                                 <td className="border-none  md:p-auto md:px-auto">{leave.reason}</td>
                                 <td className="border-none  md:p-auto md:px-auto">
                                     <select className="border rounded md:px-10 md:p-1 bg-indigo-950 text-white font-semibold">
                                         <option value="Action" >Action</option>
                                         <option value="Delete">Delete</option>
                                         <option value="Edit">Edit</option>
                                     </select>
                                 </td>
                             </tr>
                           ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </main>
    )
}
export default applyForLeave;