function NextOfKinDetails(){
    return(
        <main>
            <div className="flex items-center space-x-30 mt-5 ">
                <div className="w-3/8">
                    <label className="block">Next of kin name</label>
                    <p className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">John Doe Samson</p>
                </div>
                <div className="w-3/8">
                    <label className="block ">Job / Occupation</label>
                    <p className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">IT Manager</p>
                </div>
            </div>
            <div className="flex items-center space-x-30 mt-8 ">
                <div className="w-3/8">
                    <label className="block">Phone Number</label>
                    <p className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">08120000000</p>
                </div>
                <div className="w-3/8">
                    <label className="block ">Relationship</label>
                    <select className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">
                        <option >Relative</option>
                        <option >Relative</option>
                    </select>
                </div>
            </div>
            <div className="mt-8">
                <label className="block">Residential Address</label>
                <p className="bg-sky-100 outline-sky-100 p-3 py-8 mt-6 rounded-xl  w-full text-gray-600"> 18 Junction site Lekki</p>
            </div>
        </main>
    )
}
export default NextOfKinDetails;