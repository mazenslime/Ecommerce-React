import React, { createContext, useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios'
import Pro from './Pro'
import { BrowserRouter, data, Outlet, Route, Routes, useLocation } from 'react-router-dom'
export const  ProudactContext=createContext()
const Contaextapi = ({orders,setorders,Listcategoury,setpaginate,paginate,setLoveprouduct,Loveprouduct,cat,setcat}) => { 
  const [proudacts,setproudact]=useState([])
  const Location=useLocation()
  const path=Location.pathname=='/';  
    useEffect(()=>{
      const getproudact=async()=>{
          const proms=await axios.get(`https://api.escuelajs.co/api/v1/products?limit=${path?4:10}&offset=${paginate*10}`)
          const data=proms.data 
          setproudact(data)
      }
      getproudact()
    },[paginate])
    
  return (
    <ProudactContext.Provider value={{ proudacts }}>
      <Home orders={orders} setorders={setorders}  paginate={paginate} setpaginate={setpaginate} Listcategoury={Listcategoury} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct} cat={cat} setcat={setcat}/>
    </ProudactContext.Provider>
  )
}
export default Contaextapi
