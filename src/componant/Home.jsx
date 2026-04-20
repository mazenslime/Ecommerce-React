import React, {useContext,useEffect,useState} from 'react'
import Hero from './Hero'
import {ProudactContext} from './contaextapi'
import Proudacts from './Proudacts'
import Navbar from './Navbar'
import Footear from './Footear'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catigoury from './Catigoury'
const Home = ({orders,setorders}) => {
  const  {proudacts}  = useContext(ProudactContext) || {}
  console.log(proudacts)
  console.log(orders)
  return (
    <>
        <Hero/>
        {/* <Catigoury pro={proudacts}/> */}
        <Proudacts pro={proudacts} order={orders} deforder={setorders}/>
        <Footear/>
    </>
  )
}

export default Home