import React, {useContext} from 'react'
import axios from 'axios'
import { LocalContext } from '../context/UserContext';
import { Link, Navigate, useNavigate } from 'react-router-dom'
const TableItem = ({data,setAllData}) => {

    const navigate = useNavigate()

    const {localStorageData, setlocalStorageData} = useContext(LocalContext)
    const {token} = localStorageData
    const {email,taskTitle:name, phoneNumber, _id} = data

    const handleDelete = () =>{
       axios.delete(`http://localhost:5000/api/v1/tasks/${_id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
       }).then((res)=>{
        console.log(res)
        setAllData(prev => prev.filter((el) => el._id !== data._id)); // filter by id
       }).catch((error)=>{
        console.log(error)
       })
    }
  return (
    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {name}
                </th>
                <td class="px-6 py-4">
                    {email}
                </td>
                <td class="px-6 py-4">
                    {phoneNumber}
                </td>
               
                <td class="px-6 py-4">
                    <Link to={`/edit/${_id}`} href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-2" >Edit</Link>
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(()=> handleDelete())}>Delete</a>
                </td>
            </tr>
  )
}

export default TableItem