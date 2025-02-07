import threeDots from '../../../../assets/ellipsis-v.png'
function LeaveSettings(){
    return(
        <main>
            <div className="flex gap-5 pl-3 pr-3  ">
                <div className="bg-white w-full  shadow-lg rounded">
                    <h1 className="font-medium pl-2">Create Leave Settings</h1>
                    <form >
                        <div className=" flex">
                            <div className="col-span-full w-full pl-3 pr-3 pt-2 ">
                                <label htmlFor="leaveplan-name" className="block  font-medium text-gray-900">Leave Plan Name</label>
                                <div className="mt-2 ">
                                    <input type="text" name="leaveplan-name" id="leaveplan-name" placeholder="Maternity" className="block w-full  rounded-md bg-sky-100  px-2 py-2 text-base outline-gray-300 placeholder:text-gray-600  placeholder:items-center  sm:text-sm/6"/>
                                </div>
                            </div>
                            <div className="col-span-full w-full pl-3 pr-3 pt-2 ">
                                <label htmlFor="duration" className="block  font-medium text-gray-900">Duration (days)</label>
                                <div className="mt-2 ">
                                    <input type="number" name="duration" id="duration" placeholder="60" className="block w-full  rounded-md bg-sky-100  px-2 py-2 text-base outline-gray-300 placeholder:text-gray-600  placeholder:items-center  sm:text-sm/6"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full col-span-full pl-3 pr-3 pt-2 text-gray-500">
                            <lable className="block text-black font-medium">Do you want to activate Leave Recall for this plan ?</lable>
                            <select className="w-full bg-sky-100 py-2 mt-2  outline-sky-100 rounded ">
                                <option selected>Select option from dropdown</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className=" flex w-full">
                            <div className=" w-full pl-3 pr-3 pt-2 ">
                                <label htmlFor="" className="block  font-medium text-gray-900">Would you like to activate leave bonus</label>
                                <div className="mt-2 ">
                                    <select className="block w-full rounded outline-sky-100 bg-sky-100 px-2 py-2 text-gray-600">
                                        <option selected>Select option from dropdown</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-full w-full pl-3 pr-3 pt-2 ">
                                <label htmlFor="" className="block  font-medium text-gray-900">How much percentage of leave bonus?</label>
                                <div className="mt-2 ">
                                    <input type="number" name="" id="" placeholder="60" className="block w-full  rounded-md bg-sky-100  px-2 py-2 text-base outline-gray-300 placeholder:text-gray-600  placeholder:items-center  sm:text-sm/6"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full col-span-full pl-3 pr-3 pt-2  text-gray-500">
                            <lable className="block text-black font-medium">Select Leave Allocation</lable>
                            <select className="w-full bg-sky-100 py-2 mt-2  outline-sky-100 rounded ">
                                <option selected>Senior Level</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className="w-full col-span-full pl-3 pr-3 pt-2 text-gray-500">
                            <lable className="block text-black font-medium">Reason for Recall</lable>
                            <input className="block w-full bg-sky-100 py-4 mt-2  outline-sky-100 rounded"/>
                        </div>
                        <div className="pl-3 pr-3 pt-3 p-2">
                            <button type='submit' className="block w-full py-2  bg-green-800 text-center rounded rounded-full text-white font-medium cursor-pointer">create</button>

                        </div>
                        
                    </form>
                </div>
                <div className="w-full bg-white shadow-lg rounded pl-2 pr-2 pt-2">
                    <div className='flex justify-between'>
                        <h1 className='font-medium'>Manage Leave Settings</h1>
                        <img src={threeDots} alt="" className='cursor-pointer' />
                    </div>
                    <table>
                        <thead>
                            <tr className='bg-sky-100'>
                                <th className='p-2 px-6 '>Leave Plan </th>
                                <th className='p-2 px-6 '>Duration(s) </th>
                                <th className='p-2 px-6 '>Recall /Autorenew </th>
                                <th className='p-2 px-6'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td className='p-2 px-6 '>Maternity</td>
                                <td className='p-2 px-6 '>60</td>
                                <td className='p-2 px-6 '>No / No</td>
                                <td className='p-2 px-6 '>
                                    <select className='bg-blue-900 text-white   rounded cursor-pointer'>
                                        <option value="" selected>Actions</option>
                                        <option value="" >Recall</option>
                                        <option value="" >Edit</option>
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
export default LeaveSettings;