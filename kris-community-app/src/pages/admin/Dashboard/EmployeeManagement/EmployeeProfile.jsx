import { Outlet,Link } from "react-router-dom";
function viewProfile(){
    return(
        <main>
            <h1 className="font-bold pl-5 pb-3">Employee Mgmt /  Employee Profile /  JohnDoe</h1>
            <div className="flex gap-5 pl-5">
                <div className="w-2/8 bg-white shadow-lg rounded p-5 text-center">
                    <p className="bg-sky-100 font-medium p-3 mt-3 rounded hover:bg-yellow-400 hover:cursor-pointer"><Link to='personal-details'>Personal Details</Link></p>
                    <p className="bg-sky-100 font-medium p-3 mt-3 rounded hover:bg-yellow-400 hover:cursor-pointer">Contact Details</p>
                    <p className="bg-sky-100 font-medium p-3 mt-3 rounded hover:bg-yellow-400 hover:cursor-pointer">Next of kin Details</p>
                    <p className="bg-sky-100 font-medium p-3 mt-3 rounded hover:bg-yellow-400 hover:cursor-pointer">Education Qualifications</p>
                    <p className="bg-sky-100 font-medium p-3 mt-3 rounded hover:bg-yellow-400 hover:cursor-pointer">Guarantor Details</p>
                    <p className="bg-sky-100 font-medium p-3 mt-3 rounded hover:bg-yellow-400 hover:cursor-pointer">Family Details</p>
                    <p className="bg-sky-100 font-medium p-3 mt-3 rounded hover:bg-yellow-400 hover:cursor-pointer">Job Details</p>
                    <p className="bg-sky-100 font-medium p-3 mt-3 rounded hover:bg-yellow-400 hover:cursor-pointer">Financial Details</p>
                </div>
                <div className="w-5/8 bg-white shadow-lg rounded p-5 min-h-auto">
                    <Outlet/>
                </div>
            </div>
        </main>
    )
}
export default viewProfile;