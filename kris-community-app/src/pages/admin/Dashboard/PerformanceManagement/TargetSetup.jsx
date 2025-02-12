function TargetSetup() {
    return (
        <main>
            <div>
                <form action="">
                    <div className="pl-10 pr-10 pt-3">
                        <div className="bg-white shadow-lg rounded-xl p-5 min-h-auto">
                            <div className="flex  items-center space-x-20 mt-2  ">
                                <div className="w-full ">
                                    <label htmlFor="title" className="block font-medium text-gray-500">Title</label>
                                    <input id="title" type="number" className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="kpi-weight" className="block font-medium text-gray-500">KPI Weight</label>
                                    <input id="kpi-weigh" type="number" className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600" />
                                </div>
                            </div>
                            <div className="w-full pt-3">
                                <label htmlFor="description" className="block font-medium text-gray-500">Description</label>
                                <input id="description" type="text" className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600" />
                            </div>
                            <div className="w-full pt-3">
                                <label htmlFor="employees" className="block font-medium text-gray-500 ">Employees</label>
                                <select name="employees" id="employees" className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            <div className="flex  items-center space-x-20 mt-2 font-medium ">
                                <div className="w-full">
                                    <label htmlFor="startDate" className="block font-medium text-gray-500">Start Date</label>
                                    <input id="startDate" type="date" className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="endDate" className="block font-medium text-gray-500">End Date</label>
                                    <input id='endDate' type="date" className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600" />
                                </div>
                            </div>
                            <div className="flex gap-5 items-center mt-4">
                                <div className="text-white font-semibold text-center bg-green-700 py-3 px-25 rounded outline-green-700  ">
                                    <button type="submit" className="hover:cursor-pointer">Submit</button>
                                </div>
                                <div className="text-yellow-700 text-center py-2.5 px-15 font-semibold outline-yellow-700 outline-1 rounded border">
                                    <button className="hover:cursor-pointer">Add More Targets</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default TargetSetup;