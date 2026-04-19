import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react";
 import { useLocation,useNavigate } from "react-router-dom";
import { rt } from 'motion/react-client';
const Navbar = ({scro,logins,width,open,setOpen,setWidth}) => {
  const[color,setcolor]=useState(false);
  const[search,setsearch]=useState("")
  const [ALL,Setall]=useState(false)
  const location = useLocation();
  const navegation=useNavigate()
  window.addEventListener("resize", handleResize);
  function handleResize() {    
    setWidth(window.innerWidth);
}
function searched(){
    navegation("/ALLPROUDACT",{state:{search:search}})

}
  if(location.pathname==="/Login" || location.pathname==="/rejester" || location.pathname==="/Pagecart" || location.pathname.includes("/pro/")){
    useEffect(()=>{
        setcolor(true)
    },[location])
  }else{
    useEffect(()=>{
        setcolor(false)
    },[location])    
  }
  function Rejestraion(){
    if(logins==false){
        return(
            <div className={`rejester flex ${width < 868 ? 'flex-col items-start' : 'flex-row items-center'} gap-5 `}>
                <button className={`${width < 868 ? 'bg-none p-0' : 'bg-blue-500 py-2 px-6'}  rounded text-white  font-semibold`}><Link to="/rejester">rejester</Link></button>
                <h3 className={`${width < 868 ? 'text-white' : `${color?'text-black':'text-white'}`} font-semibold   `}><Link to="/Login">Login</Link></h3>
            </div>
        )
    }else{
        return(
            <p className='text-white font-bold text-lg'>user</p>
        )
    }
  }
  return (
    <motion.div
       initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
     className={`${width < 868 ? 'flex-col w-1/2 bg-black h-lvh items-start pl-10 pt-30 gap-10' : `flex-row w-full left-0 justify-evenly ${scro?'bg-black rounded-b-lg w-80  ':'bg-none'} items-center`} flex   z-100    h-20 fixed top-0 ${open?'left-0':'-left-100'}  transition-all duration-500 ease-in-out `}>
        {/* Logo */}
        <div className="logo">
            <h1 className='text-3xl font-bold text-blue-500'>ZEARO</h1>
        </div>
        {/* list  */}
        <div className="list">
            <ul className={`${width < 868 ? 'flex-col text-white' : `flex-row ${color?'text-black':'text-white'}`} flex gap-5  `} >
                <li className='font-semibold'><Link to="/">Home</Link></li>
                <li className='font-semibold'><Link to="/ALLPROUDACT">ALL proudact</Link></li>
            </ul>
        </div>
        {/* search */}
        <div className="search" style={{ display: width > 868 ? "flex" : "none" }}>
                <button className='bg-blue-500  px-3 py-1 rounded-l-lg text-white cursor-pointer outline-none border-none '><i class="fa-solid fa-magnifying-glass" onClick={searched}></i></button>
                <input type="text" value={search} className={`h-8 w-100  outline-none px-2 border-1 rounded-r-lg ${scro?'border-amber-50 text-white':'border-black'} `} onChange={(e)=>{setsearch(e.target.value)}}  placeholder='enter catigoury '/>
        </div>
        {/* rejester */}
        <Rejestraion/>
        {/* cart */}
        <div className="cart text-3xl font-bold cursor-pointer text-blue-500">
            <Link to='/Pagecart'><i class="fa-solid fa-cart-arrow-down"></i></Link>
        </div>
    </motion.div>
  )
}

export default Navbar