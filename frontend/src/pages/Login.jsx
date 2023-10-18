import React, {useContext}from 'react'
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { LocalContext } from '../context/UserContext';
const login = () => {

    const {localStorageData, setlocalStorageData} = useContext(LocalContext)
    
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


    const onSubmit = (data) => {
        axios.post('http://localhost:5000/api/v1/auth/login',data)
        .then((res)=>{
           
            localStorage.setItem("key", JSON.stringify(res.data)); 
            setlocalStorageData(res.data)
            navigate('/')
        })
        .catch((error)=>{
            return error 
        })
      }

  return (
    <section className="bg-gray-50 bg-emerald-400">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Login
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
             
  
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input  name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  {...register("email", { required:{value:true,message:'Email is required.'} })} /> 
                        <p className='error'>{errors.email?.message}</p>
                    </div>
                    <small className='text-red-500 hidden'>Please, provide an email</small>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("password",{ required:{value:true,message:'Password is required.'} })} /> 
                        <p className='error'>{errors.password?.message}</p>
                    </div>
                    <small className='text-red-500 hidden'>Please, provide password</small>
                 
                    <button type="submit" className="w-full text-white bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Dont have an account? <a href="#" className="font-medium text-emerald-500 hover:underline dark:text-primary-500">Register here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default login