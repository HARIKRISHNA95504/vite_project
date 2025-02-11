function ContactDetails(){
    return(
        <main>
            <div>
                <div className="flex items-center space-x-30 mt-3">
                    <div className="w-3/8">
                        <label className="block ">Phone Number 1</label>
                        <input type="number" className="bg-sky-100 rounded-xl outline-sky-100 p-2 py-3 mt-2 w-full" placeholder="Phone Number 1"/>
                    </div>
                    <div className="w-3/8">
                        <label className="block">Phone Number 1</label>
                        <input type="number" className="bg-sky-100 rounded-xl outline-sky-100 p-2 py-3 mt-2 w-full" placeholder="Phone Number 1"/>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block">E-mail Address</label>
                    <input type="email" className="bg-sky-100 rounded-xl outline-sky-100 p-2 py-3 mt-2 w-full"  placeholder="johndoe@gmail.com"/>
                </div>
                <div className="flex items-center space-x-30 mt-5">
                    <div className="w-3/8">
                        <label className="block ">State of residence</label>
                        <input type="number" className="bg-sky-100 rounded-xl outline-sky-100 p-2 py-3 mt-2 w-full" placeholder="Phone Number 1"/>
                    </div>
                    <div className="w-3/8">
                        <label className="block">City</label>
                        <input type="number" className="bg-sky-100 rounded-xl outline-sky-100 p-2 py-3 mt-2 w-full" placeholder="Phone Number 1"/>
                    </div>
                </div>
                <div className="mt-5">
                    <label className="block">E-mail Address</label>
                    <input type="email" className="bg-sky-100 rounded-xl outline-sky-100 p-2 py-6 mt-2 w-full"  placeholder="johndoe@gmail.com"/>
                </div>
            </div>
        </main>
    )
}
export default ContactDetails;