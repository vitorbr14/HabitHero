import React, {useContext} from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { LocalContext } from '../context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom'

const AddNew = () => {
  const {localStorageData, setlocalStorageData} = useContext(LocalContext)
  const {token} = localStorageData
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()
  const onSubmit = (data) => {
    
   axios.post('http://localhost:5000/api/v1/tasks', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
   }).then((res)=>{
    navigate('/')
   }).catch((error)=>{
    return error
   })
  }
  return (
    <div className="wrapper h-screen md:w-full  flex justify-center items-center bg-emerald-400 ">
        <div className=' bg-white w-11/12 lg:w-4/12 p-8'>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
             
  
             <div>
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                 <input type="name" name="taskTitle" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" {...register("taskTitle", { required:{value:true,message:'Name is required.'} })} /> 
                 <p className='error'>{errors.taskTitle?.message}</p>
             </div>

             <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input  name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  {...register("email", { required:{value:true,message:'Email is required.'} })} /> 
                        <p className='error'>{errors.email?.message}</p>
                    </div>


             <div>
                 <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                 <input type="number" name="phoneNumber" placeholder="Telephone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("phoneNumber", { required:{value:true,message:'Phone Number is required.'} })} /> 
                 <p className='error'>{errors.phoneNumber?.message}</p>
             </div>
            
          
             <div className='flex'>
             <button  className="w-8/12 mr-2 text-white bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back Home</button> 
                <button  className="w-8/12  text-white bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register Client</button>
                
             </div>
            
         </form>
        </div>
      
    </div>
  )
}

export default AddNew