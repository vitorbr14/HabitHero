import axios from 'axios'
import { useState, useEffect } from 'react';import React from 'react'

const Home = () => {

  const [token,setToken] =useState()
  const [data,setData] = useState([])
  

  useState(()=>{
    console.log(window.localStorage.getItem('info'))
    setToken(JSON.parse(window.localStorage.getItem('info')))
    axios.get('http://localhost:5000/api/v1/tasks', {headers:{
      Authorization: 'Bearer Token'
    }}).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err.response)
    })
    
  },[])


  return (
    <div>


    </div>
    
  )
}

export default Home