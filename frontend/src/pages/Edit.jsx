import React from 'react'

const Edit = () => {
  return (
    <div className="wrapper h-screen md:w-full  flex justify-center items-center bg-emerald-400 ">
        <div className=' bg-white w-11/12 lg:w-4/12 p-8'>
        <form className="space-y-4 md:space-y-6">
             
            <div>
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                 <input type="name" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="34235bnawns7ad67as" disabled />
             </div>
             <div>
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                 <input type="name" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required="" />
             </div>
             <div>
                 <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                 <input type="number" name="tele" placeholder="Telephone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
             </div>
            
          
             <div className='flex'>
             <button type="submit" className="w-8/12 mr-2 text-white bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back Home</button>
                <button type="submit" className="w-8/12  text-white bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit Client</button>
                
             </div>
            
         </form>
        </div>
      
    </div>
  )
}

export default Edit