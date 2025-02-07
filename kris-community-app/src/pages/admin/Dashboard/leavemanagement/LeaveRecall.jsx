function LeaveRecall(){
    return(
        <main>
            <div className="overflow-x-auto bg-white p-4 rounded m-3 ">
                <p>Ongoing Leave Applications</p>
                <table className="min-w-full bg-white border-collapse">
                    <thead className="bg-sky-100 ">
                        <tr className="p-2">
                            <th className="py-2 px-4  text-left text-xl font-semibold">Name(s)</th>
                            <th className="py-2 px-4  text-left text-xl font-semibold">Duration(s)</th>
                            <th className="py-2 px-4  text-left text-xl font-semibold">StartDate</th>
                            <th className="py-2 px-4  text-left text-xl font-semibold">EndDate</th>
                            <th className="py-2 px-4  text-left text-xl font-semibold">Type</th>
                            <th className="py-2 px-4  text-left text-xl font-semibold">Reason</th>
                            <th className="py-2 px-4  text-left text-xl font-semibold">Actions</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4">Hari</td>
                            <td className="py-2 px-4">5</td>
                            <td className="py-2 px-4">07/02/2025</td>
                            <td className="py-2 px-4">12/02/2025</td>
                            <td className="py-2 px-4">sickLeave</td>
                            <td className="py-2 px-4">Personel</td>
                            <td className="border-none rounded bg-red-600 text-white text-center py-2">Recall</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
export default LeaveRecall;