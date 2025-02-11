import filter from '../../../../assets/filter.png'
import { useNavigate } from 'react-router-dom';
function EmployeeManagement(){
    const navigate =useNavigate()
    const viewProfile = ()=>{
        navigate('/viewprofile')
    }
    return(
        <main>
            <h1 className='font-bold pl-2'>Dashboard / Employee Management</h1>
            <div className='bg-white w-11/12 m-5 p-4 rounded shadow-lg'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold'>Employee Management</h1>
                    <div className='flex items-center gap-5'>
                        <img src={filter} className='h-4'/>
                        <div className='bg-green-600'>
                            <select  name="" id=""className='bg-green-600 outline outline-green-600 rounded text-white outline-green-600 px-5  cursor-pointer py-1.5'>
                                <option  value="Export">Export</option>
                                <option>Pdf</option>
                                <option>jpeg</option>
                            </select>
                        </div>
                    </div>
                </div>
                <table className='bg-sky-100 rounded pt-5  mt-5'>
                    <thead >
                        <tr>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Name(s)</th>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Dept</th>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Job Title</th>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Start Date</th>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Category</th>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Gender</th>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white  '>
                        <tr className='mt-7' >
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm bg-blue-900 text-white rounded">
                                <select onChange={viewProfile}   className='bg-blue-900 outline outline-blue-900'>
                                    <option value=''>Actions</option>
                                    <option value="ViewProfile" >ViewProfile</option>
                                    <option value='EditProfile'>EditProfile</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='mt-7' >
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-10 md:text-sm bg-blue-900 text-white rounded">
                                <select className='bg-blue-900 outline outline-blue-900'>
                                    <option>Actions</option>
                                    <option>ViewProfile</option>
                                    <option>EditProfile</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
export default EmployeeManagement;