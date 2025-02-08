import Navbar from "../../../components/navabar"
export default function SickLeave(){
    return(
        <div className="font-sans bg-sky-100 min-h-screen">
            <Navbar/>
            <div className="md:pl-5 md:pr-5 md:pt-5">
                <p className="bg-white md:max-w-screen md:py-3 md:pl-2 border-none rounded">DashBoard-- applyForLeave--SickLeave</p>
            </div>
            <div className="md:mx-40">
                <div className="bg-white mt-9 min-h-screen ">
                    <p className="text-center text-xl pt-9"><i class="fa-solid fa-book-open"></i> Leave Application</p>
                    <p className="text-center text-lg pt-2">Fill the required fields below to apply for annual leave.</p>
                    <form className="items-center md:pl-20 md:pr-20 md:pt-10">
                        <div className="col-span-full ">
                            <label htmlFor="profile" className="block text-lg font-medium text-gray-900">Profile</label>
                            <div className="mt-2 ">
                                <input type="text" name="profile" id="profile" autoComplete="street-address" placeholder="Annual Leave" class="block w-full  rounded-md bg-sky-100  px-2 py-2.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  placeholder:items-center focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"/>
                            </div>
                        </div>
                        <div className="mt-10 md:grid grid-cols-2 w-full gap-5">
                            <div className="pb-2">
                                <label htmlFor="first-name" className="block text-lg/6 pb-2 text-gray-900">Start Date</label>
                                <input type="date"className="border rounded pl-1 bg-sky-100 text-gray-400  pr-1 text-xl w-full py-1   "></input>
                                
                            </div>
                            <div className="pb-2">
                                <label htmlFor="first-name" className="block text-lg/6 pb-2 text-gray-900">End Date</label>
                                <input type="date" className="border rounded pl-1 bg-sky-100 text-gray-400 pr-1 text-xl w-full py-1" placeholder="date"></input>
                                
                            </div>
                            <div className="pb-2">
                                <label htmlFor="first-name" className="block text-lg/6 pb-2 text-gray-900">Duration</label>
                                <input type="number" className="border rounded pl-1 bg-sky-100 text-gray-400 pr-1 text-xl w-full py-1" placeholder="date"></input>
                            </div>
                            <div className="pb-2">
                                <label for="first-name" className="block text-lg/6 pb-2 text-gray-900">Resumption Date</label>
                                <input type="date" className="border rounded pl-1 bg-sky-100 text-gray-400 pr-1 text-xl w-full py-1" placeholder="date"/>
                                
                            </div>
                        </div>
                        <div className="col-span-full pt-3 ">
                            <label htmlFor="reason" className="block text-lg/6 text-gray-900">Reason For Leave</label>
                            <div className="mt-3 ">
                                <input type="text" name="reason" id="reason" autoComplete="street-address" className="block w-full  rounded-md bg-sky-100  px-2 py-6 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300   placeholder:items-center focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"/>
                            </div>
                        </div>
                        <div className="col-span-full pt-3 ">
                            <label htmlFor="documents" className="block text-lg/6 text-gray-900">Attach handover document (pdf, jpg, docx or any other format)</label>
                            <div className="mt-3 ">
                                <input type="text" name="documents" id="documents" autoComplete="street-address" className="block w-full  rounded-md bg-sky-100  px-2 py-2.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300   placeholder:items-center focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"/>
                            </div>
                        </div>
                        <div className="col-span-full pt-3 ">
                            <label htmlFor="street-address" className="block text-lg/6 text-gray-900">Choose Relief Officer</label>
                            <div className="mt-3 ">
                                <select  className="block w-full  rounded-md bg-sky-100  px-2 py-2.5 text-base text-gray-400 text-lg/6 outline outline-1 -outline-offset-1 outline-gray-300   placeholder:items-center focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6">
                                <option>Select your relief officer </option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex w-2/4 space-x-16 pt-5 pb-5">
                            <button className="w-2/4 border rounded  text-center text-lg text-white bg-green-600">Submit</button>
                            <button className="px-9  w-2/4  py-2 border-2 border-red-600 rounded  text-center text-lg text-red-500 ">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}