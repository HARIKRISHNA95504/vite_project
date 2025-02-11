function FinancialDetails(){
    return(
        <main>
            <div>
                <h1 className="font-semibold font-xl text-xl">Financial Details</h1>
                <div className="mt-8">
                    <label className="block">Bank Name</label>
                    <p className="bg-sky-100 outline-sky-100 p-3 py-4 mt-6 rounded-xl  w-full text-gray-600"> Access Bank</p>
                </div>
                <div className="flex items-center space-x-20 mt-5 ">
                    <div className="w-3/8">
                        <label className="block">Account No</label>
                        <p className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">001101100</p>
                    </div>
                    <div className="w-3/8">
                        <label className="block ">Account Name</label>
                        <p className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">John Doe Smith</p>
                    </div>
                </div>
                <div className="flex items-center space-x-20 mt-5 ">
                    <div className="w-3/8">
                        <label className="block">Registered with</label>
                        <p className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">Stanbic IBTC</p>
                    </div>
                    <div className="w-3/8">
                        <label className="block ">Pension Number</label>
                        <p className="bg-sky-100 outline-sky-100 p-3 py-3 mt-3 rounded-xl w-full text-gray-600">10111010101210101011</p>
                    </div>
                </div>
                <div className="text-center mt-5  ">
                    <button className="bg-green-700 p-2 px-18 py-3  text-white font-semibold  rounded outline-green-600"> Update Account Details</button>
                </div>
            </div>
        </main>
    )
}
export default FinancialDetails;