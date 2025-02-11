import PersonPic from '../../../../assets/profilePic.png'
import edit from '../../../../assets/edit.png'
function PersonalDetails(){
    return(
        <main>
             
            <div className=''>
                <img src={edit} className=''/>
                <div className='flex flex-col justify-center items-center'>
                    <img  src={PersonPic} className=' h-30'/>
                    <p className='p-3'>Employee Name</p>
                    <p className='font-bold p-3 text-xl'>John Doe Francis</p>
                    <p className='p-3'>Department</p>
                    <p className='font-bold p-3 text-xl'>Design & Marketing</p>
                    <div className='flex justify-between space-x-15 pb-3'>
                        <div>
                            <p className='p-3'>Job Title</p>
                            <p className='font-bold text-xl'>UI / UX Designer</p>
                        </div>
                        <div>
                            <p className='p-3'>Job Category</p>
                            <p className='font-bold text-xl'>Full time</p>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </main>
    )
}
export default PersonalDetails;