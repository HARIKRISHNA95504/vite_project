import filter from '../../../../assets/filter.png'
import { useNavigate } from 'react-router-dom';
function Targets() {
    return (
        <main>
            <div className='bg-white w-11/12 m-5 p-4 rounded shadow-lg'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold'>Manage Targets</h1>
                    <div className='flex items-center gap-5'>
                        <img src={filter} className='h-4' />
                        <div className='bg-green-600'>
                            <select name="" id="" className='bg-green-600 outline outline-green-600 rounded text-white outline-green-600 px-5  cursor-pointer py-1.5'>
                                <option value="Export">Export</option>
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
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Title(s)</th>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">KPI Weight</th>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Target Date</th>
                            <th className="border-none  md:p-2 md:px-10 md:text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        <tr className='' >
                            <td className="border-none  md:p-2 md:px-15 md:text-sm">HariKrishna</td>
                            <td className="border-none  md:p-2 md:px-15 md:text-sm">Make 400 Billion Naira</td>
                            <td className="border-none  md:p-2 md:px-15 md:text-sm font-bold">5</td>
                            <td className="border-none  md:p-2 md:px-15 md:text-sm">01 -Jan-2021 /01 -Jan-2022</td>
                            <td className="border-none  md:p-2  md:px-15 md:text-sm bg-blue-900 text-white rounded">
                                <select className='bg-blue-900 outline outline-blue-900'>
                                    <option value=''>Actions</option>
                                    <option value="ViewProfile" >Edit KPI Goals</option>
                                    <option value='EditProfile'>Initiate KPI</option>
                                    <option className='text-red-500'>Delete KPI</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
export default Targets;