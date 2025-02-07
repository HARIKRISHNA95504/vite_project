import Recall from '../assets/recall.png'
function AdminLeaveRecallModal(){
    return(
        <main className="min-h-screen bg-sky-100">
            <div className='p-10 text-gray-600 '>
                <div className='bg-white'>
                    <div className=" p-5 ">
                        <img src={Recall}/>
                        <h1 className='font-bold text-lg text-black'>Leave Recall</h1>
                        <h1>Fill in the required details to recall this employee</h1>
                    </div>
                    <form>
                        <div className='pl-5 pr-5 pt-1 '>
                            <label>Employee Name</label>
                            <input type='text' className='block w-full mt-2 bg-sky-100 py-2 px-2  outline-sky-100'/>
                        </div>
                        <div className='pl-5 pr-5 pt-1 '>
                            <label>Employee Name</label>
                            <input type='text' className='block w-full mt-2 bg-sky-100 py-2 px-2  outline-sky-100'/>
                        </div>
                        <div className='pl-5 pr-5 pt-1 flex gap-3 '>
                            <div className='w-full'>
                                <label>Start Date</label>
                                <input type='date' className='block outline-sky-100 bg-sky-100 rounded py-2 px-2 w-full'/>
                            </div>
                            <div className='w-full'>
                                <label>end Date</label>
                                <input type='date'className='block outline-sky-100 bg-sky-100 rounded py-2 px-2 w-full'/>
                            </div>
                        </div>
                        <div className='pl-5 pr-5 pt-1 flex gap-3 '>
                            <div className='w-full'>
                                <label>Days Remaining</label>
                                <input type='number' placeholder='60' className='block outline-sky-100 bg-sky-100 rounded py-2 px-2 w-full'/>
                            </div>
                            <div className='w-full'>
                                <label>New Resumption Date</label>
                                <input type='date'className='block outline-sky-100 bg-sky-100 rounded py-2 px-2 w-full'/>
                            </div>
                        </div>
                        <div className='w-full pl-5 pr-5 pt-1'>
                            <label>Relief Officer(s)</label>
                            <input type='text' placeholder='john doe' className='block outline-sky-100  bg-sky-100 rounded py-2 px-2 w-full '/>
                        </div>
                        <div className='flex gap-5 items-center p-5'>
                            <button className='bg-green-600 rounded text-white rounded-full py-2 px-2 w-full'>Initiate Recall</button>
                            <button className='outline outline-red-500 text-red-500 rounded rounded-full py-2 px-2 w-full'>Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    )
}
export default AdminLeaveRecallModal;