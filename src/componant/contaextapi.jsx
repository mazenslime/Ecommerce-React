import React, { createContext, useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios'
import Pro from './Pro'
import { BrowserRouter, data, Outlet, Route, Routes } from 'react-router-dom'
export const  ProudactContext=createContext()
const Contaextapi = ({orders,setorders}) => { 
  const [proudacts,setproudact]=useState([])
  console.log(orders)
    useEffect(()=>{
      const getproudact=async()=>{
        // https://fakestoreapi.com/products
          const proms=await axios.get("https://dummyjson.com/products")
          const data=proms.data
          setproudact(data['products'])
      }
      getproudact()
    },[])
    console.log(proudacts);
    
  return (
    <ProudactContext.Provider value={{ proudacts }}>
      <Home orders={orders} setorders={setorders} />
    </ProudactContext.Provider>
  )
}
export default Contaextapi
