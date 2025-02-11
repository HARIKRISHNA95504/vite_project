function EducationQualifications(){
    return(
        <main>
            <div>
                <h1 className="font-semibold">Academic / Academic Details</h1>
                <div className="flex items-center space-x-20 mt-5 ">
                    <div className="w-3/8">
                        <label className="block">Next of kin name</label>
                        <p className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">John Doe Samson</p>
                    </div>
                    <div className="w-3/8">
                        <label className="block ">Job / Occupation</label>
                        <p className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">IT Manager</p>
                    </div>
                </div>
                <div className="mt-8">
                    <label className="block">Field of Study</label>
                    <p className="bg-sky-100 outline-sky-100 p-3 py-5 mt-6 rounded-xl  w-full text-gray-600"> Computer Science</p>
                </div>
                <div className="flex items-center space-x-20 mt-5 ">
                    <div className="w-3/8">
                        <label className="block">Start Date</label>
                        <input type="date" className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600"/>
                    </div>
                    <div className="w-3/8">
                        <label className="block ">End Date</label>
                        <input type="date" className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600" />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default EducationQualifications;