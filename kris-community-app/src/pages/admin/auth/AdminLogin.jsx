import Logo1 from '../../../assets/logo.png'
import { useForm } from 'react-hook-form';
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [employees,setEmployess] = useState([]);
    const[errorMsg,setErrorMsg] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        getEmployees()
    },[])
    const getEmployees = async()=>{
        try{
            const response = await axios.get('http://localhost:4000/krisemployees?role=admin');
            console.log(response.data)
            setEmployess(response.data)
        }catch(error){
            console.log(error)
        }
    }
    const handleLogin =async(formData)=>{
       const filteredEmployee = employees.find(employee=>employee.email === formData.email && employee.password === formData.password)
       if(filteredEmployee){
            navigate('/dashboard')
       }else{
            setErrorMsg('Incorrect Email or password')
       }
    }
    
    return(
       <main className=" bg-blue-950 min-h-screen  md:col-span-4 ">
            <img className='max-w-50' src={Logo1}/>
            <div className='flex items-center justify-center mt-10'>
                <form onSubmit={handleSubmit(handleLogin)} className="w-full">
                    <div className=" justify-items-center ">
                        <h1 className="text-4xl font-bold text-white ">Login</h1>
                        <p className="text-lg  text-white mt-3">Login to your account.</p>
                        {errorMsg && <p className='text-red-500'>{errorMsg}</p>}
                        <div className="w-5/6 md:w-2/6 mt-6 ">
                            <lable htmlFor="email" className="block  text-sm font-medium text-white">E-mail Address</lable>
                            <input {...register('email',{required:{value:true,message:'Email is Required'}})} type="email" name="email"className="block mt-2 border border-white bg-white py-2 w-full" autoComplete="email"/>
                        </div>
                        <p className='text-sm text-red-500'>{errors.email?.message}</p>
                        <div className="w-5/6 md:w-2/6 mt-6 ">
                            <lable htmlFor="password" className="block  text-sm font-medium text-white mt-2">Passsword</lable>
                            <input {...register('password',{required:{value:true,message:"Password is required"},pattern:{ value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Incorrect password format'}})}  type="password" name="password"className="block  mt-2 border border-white bg-white py-2 w-full" autoComplete="password"/>
                        </div>
                        <p className='text-sm text-red-500'>{errors.password?.message}</p>
                        <div className=" container w-5/6 md:w-2/6 md:flex justify-between items-center mt-6">
                            <div className=" container flex justify-between items-center">
                                <div className="">
                                    <input type="checkbox" name="remember" id="remember"/>
                                    <label htmlFor="remember" className="text-white ">Remember me</label>
                                </div>
                                <p className="text-white text-sm">Reset Password?</p>
                                
                            </div>
                        </div>
                        <div className="w-5/6  md:w-2/6">
                            <button type="submit" className=" block mt-9 border  bg-yellow-400 font-medium text-xl py-2 w-full">SignIn</button>
                        </div>
                        
                    </div>
                </form>
            </div>
            
       </main>
    )
}
export default Login;