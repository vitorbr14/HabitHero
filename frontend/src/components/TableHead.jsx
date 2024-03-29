import React, { useEffect, useState, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai";
 import { LocalContext } from '../context/UserContext';
 import axios from 'axios'
const TableHead = () => {
   const {localStorageData, setlocalStorageData} = useContext(LocalContext)
   const name = localStorageData?.name?.name;
   const {token} = localStorageData
   const navigate = useNavigate()
   
   
  return (
    <>
    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <h1 className='text-2xl'>Hello, {name || ''} </h1>
            <div>
                <AiOutlinePlus className='addButton' onClick={()=> navigate('/new') } />
            </div>
            <h2 className='py-4'>Register Client</h2>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, numquam.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    E-mail
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
    </>
  )
}

export default TableHead