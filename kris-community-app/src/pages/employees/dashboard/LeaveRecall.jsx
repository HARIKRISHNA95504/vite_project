import Navbar from "../../../components/navabar"
export default function LeaveRecall(){
    return(
        <main>
            <div className="font-sans bg-sky-100 min-h-screen ">
                <Navbar/>
                <div className="md:pl-5 md:pr-5 md:pt-2">
                    <p className="bg-white md:max-w-screen md:py-3 md:pl-2 border-none rounded">Leave Recall</p>
                </div>
                <div className="bg-white md:ml-20 md:mr-20 md:mt-5 pb-5">
                    <h1 className=" text-xl font-medium text-center pt-5 pb-5 "><i className="fa-solid fa-book-open"></i> Leave Recall</h1>
                    <div className="md:grid md:grid-col-1 md:ml-20 md:mr-20 md:mt-1 text-start">
                        <article className=" md:w-7/12 md:ml-72  rounded bg-sky-100">
                            <p className="pb-5 md:pt-4 pl-5 text-lg font-medium" >Dear User,</p>
                            <h1 className="  pl-5 md:pr-24 md:pt-2 pb-2 md:text-2xl font-semibold">This is to inform you that you have been RECALLED from your CASUAL Leave by your line manager named DOYINSOLA ODUNSI for an urgent meeting and task to be completed in the office before 2nd June, 2022.</h1>
                        </article>
                        <p className="text-xl md:pl-72 md:pb-9 md:pt-5 font-small">If No, state reason why ?</p>

                    </div>
                    <div className="text-center md:pl-10">
                        <input type="text" className="md:w-6/12 md:pb-16 pl-2 bg-sky-100 rounded" placeholder="state your reason"/>
                    </div>
                    <div className="text-center pt-2">
                        <button className="border border-green-600 bg-green-600 text-lg rounded text-white text-center md:px-24  md:py-2 cursor-pointer">Approve</button>
                        <button className=" border border-red-600 text-lg rounded text-red-600 text-center md:ml-5 md:px-20 p-1 cursor-pointer">Decline</button>
                    </div>
                </div>
                
            </div>
        </main>
    )
}