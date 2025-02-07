
import filter from '../../../../assets/filter.png'
function LeaveHistory(){
    return(
        <main>
            <div className='p-3 rounded border-none'>
                <div className="md:ml-2 md:pt-5 bg-white p-2 ">
                    <div className="flex justify-between md:w-5/6 pt-5 ">   
                        <p className='text-lg font-semibold pl-2'>Leave History</p>
                        <div className="flex justify-center items-center space-x-5">
                            {/* <p className="text-xl"><i class="fa-solid fa-filter"></i></p> */}
                            <img src={filter} width={25} className="cursor-pointer"/>
                            <span><button className="rounded px-8 p-1 bg-green-600 cursor-pointer">Export</button></span>
                        </div>
                    </div>
                    <table className=" rounded md:p-2  text-center ">
                        <thead>
                            <tr>
                                <th className="border-none  md:p-2 md:px-10 md:text-xl">Name(s)</th>
                                <th className="border-none  md:p-1 md:px-10 md:text-xl">Duration(s)</th>
                                <th className="border-none  md:p-1 md:px-10 md:text-xl">StartDate</th>
                                <th className="border-none  md:p-1 md:px-10 md:text-xl">End Date</th>
                                <th className="border-none  md:p-1 md:px-10 md:text-xl">Type</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Reason(s)</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" bg-none rounded bg-sky-100 ">
                                <td className="border-none  md:p-auto md:px-auto md:p-3">The Sliding </td>
                                <td className="border-none  md:p-auto md:px-auto">Malcolm Lockyer</td>
                                <td className="border-none  md:p-auto md:px-auto">22/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">28/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">Sick</td>
                                <td className="border-none  md:p-auto md:px-auto">Personal</td>
                                <td className="border-none  md:p-auto md:px-auto">
                                    <select className="border rounded md:px-10 md:p-1 bg-indigo-950 text-white font-semibold">
                                        <option value="Action" >Action</option>
                                        <option value="Delete">Delete</option>
                                        <option value="Edit">Edit</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className=" bg-none rounded  ">
                                <td className="border-none  md:p-auto md:px-auto md:p-3">The Sliding </td>
                                <td className="border-none  md:p-auto md:px-auto">Malcolm Lockyer</td>
                                <td className="border-none  md:p-auto md:px-auto">22/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">28/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">Sick</td>
                                <td className="border-none  md:p-auto md:px-auto">Personal</td>
                                <td className="border-none  md:p-auto md:px-auto">
                                    <select className="border rounded md:px-10 md:p-1 bg-indigo-950 text-white font-semibold">
                                        <option value="Action" >Action</option>
                                        <option value="Delete">Delete</option>
                                        <option value="Edit">Edit</option>
                                    </select>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}
export default LeaveHistory;