import React from 'react'
import { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import { LocalContext } from '../context/UserContext';
import TableItem from './TableItem'
import TableHead from './TableHead'

const Table = () => {
  const {localStorageData, setlocalStorageData} = useContext(LocalContext)
  const {token} = localStorageData
  const [allData, setAllData] = useState([])
 


  useEffect(() => {
  
    axios.get('http://localhost:5000/api/v1/tasks/', {
       headers: {
         'Authorization': `Bearer ${token}`
       }
     }).then((res)=>{
       setAllData(res.data)
       console.log(res.data)
       
      
     }).catch((error)=>{
       return error
     });
  


  }, [token])



  return (
   
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative">
    <TableHead />
        <tbody>
          
            {allData.map((data,key)=>{
              return <TableItem data={data}  setAllData={setAllData} /> 
            }) }
            
        </tbody>
    </table>
</div>

  )
}

export default Table