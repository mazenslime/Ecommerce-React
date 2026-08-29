import React, {useContext,useEffect,useState} from 'react'
import Hero from './Hero'
import {ProudactContext} from './contaextapi'
import Proudacts from './Proudacts'
import Navbar from './Navbar'
import Footear from './Footear'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catigoury from './Catigoury'
import Pagination from './Pagination'
import CategouryMain from './CategouryMain'
const Home = ({orders,setorders,Listcategoury,setLoveprouduct,Loveprouduct,cat,setcat,width}) => {
  const  {proudacts}  = useContext(ProudactContext) || {}
  return (
    <>
      <Hero/>
      <div className="px-10 mt-40 mb-20 ">
        <CategouryMain Listcategoury={Listcategoury} cat={cat} setcat={setcat}/>
        <Proudacts pro={proudacts} order={orders} deforder={setorders} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct} width={width} setcat={setcat}/>
      </div>
      <Footear/>
    </>
  )
}

export default React.memo(Home)