import { useState,useEffect, useContext } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios'
import { LocalContext } from '../context/UserContext';
import Spinner from '../components/Spinner';


const Edit = () => {

    const {localStorageData, setlocalStorageData} = useContext(LocalContext)
    const [singleData, setSingleData] = useState({})
    const [loading, setloading] = useState({})
    const {token} = localStorageData
    const {id} = useParams()
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      
    const navigate = useNavigate()

      const onSubmit = (data) => {
       axios.patch(`http://localhost:5000/api/v1/tasks/${id}`,data , {
        headers: {
          'Authorization': `Bearer ${token}`
        }
       }).then((res)=>{
       
        navigate('/')

       }).catch((error)=>{
       console.log(error)
       })

      }
    useEffect(() => {

       
        if(token) {
          axios.get(`http://localhost:5000/api/v1/tasks/${id}`, {
             headers: {
               'Authorization': `Bearer ${token}`
             }
           }).then((res)=>{
           
            setSingleData(res.data)
            setloading(false)
            
           
             
            
           }).catch((error)=>{
             if(error.code === "ERR_BAD_REQUEST") {
              navigate('/')
             }
           });
        }

        
      
      
        }, [token])
        // It renders first cuz if you put a return before your code, it will renders it after all!!!
        
        if(loading) {
         return <Spinner />
         }

  return (
    <div className="wrapper h-screen md:w-full  flex justify-center items-center bg-emerald-400 ">
        
        <div className=' bg-white w-11/12 lg:w-4/12 p-8'>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
             
            <div>
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                 <input type="name" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder={singleData._id} disabled />
             </div>
             <div>
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                 <input type="name" name="taskTitle" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""  
                 defaultValue={singleData.taskTitle} {...register("taskTitle")} /> 
             </div>
             <div>
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                 <input type="name" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={singleData.email} required=""   {...register("email")} /> 
             </div>
             <div>
                 <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                 <input type="text" name="tele" placeholder="Telephone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue={singleData.phoneNumber} {...register("phoneNumber")} /> 
             </div>
            
          
             <div className='flex'>
             <button  className="w-8/12 mr-2 text-white bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back Home</button>
                <button  className="w-8/12  text-white bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit Client</button>
                
             </div>
            
         </form>
        </div>
      
    </div>
  )
}

export default Edit