import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Sidebar({openside,setopenside,Listcategoury,setListcategoury,cat,setcat,width}) {
  const Location=useLocation()  
    useEffect(()=>{
          const categoury=async ()=>{
              let response=await fetch(`https://api.escuelajs.co/api/v1/categories${Location.pathname=='/ALLPROUDACT'?'':'?limit=5'}`)
              let data=await response.json()
              setListcategoury(data)  
          }
          categoury()
      return ()=> categoury();
    },[Location.pathname])
  useEffect(()=>{
  console.log(cat);
  
  },
  [cat]
  )
  return (
    <div className={`fixed top-0 w-100  ${openside?`right-0 ${width>600?' w-100':'w-screen'}`:'-right-200'}  h-screen overflow-y-auto  z-[2000] bg-white transition-all duration-300`}>
       <div className='w-full justify-end p-4'>
         <button className='text-black px-4 py-1 text-white cursor-pointer rounded-lg  bg-[#C5A059] ' onClick={()=>{setopenside((prev)=>!prev)}}>X</button>
       </div>
       <div className='w-full flrx flex-col p-4'>
         <h2 className='text-black mb-4 '>fillter by categoury</h2>
         <form>
           <div className='flex items-center space-x-2 cursor-pointer '>
            {
              cat!=null?<input className='w-5 h-5 appearance-none checked:bg-[#C5A059] border-2 border-[#C5A059] rounded-lg ' type="radio" name='only' onChange={()=>{setcat(null)}}/>:
              <input className='w-5 h-5 appearance-none checked:bg-[#C5A059] border-2 border-[#C5A059] rounded-lg ' checked type="radio" name='only' onChange={()=>{setcat(null)}}/>
            }
                <label htmlFor="">ALL</label>
          </div>
         {
          Listcategoury.map((ele)=>{
            return(
            <>
              <div className='flex items-center space-x-2 cursor-pointer '>
                <input className='w-5 h-5 appearance-none checked:bg-[#C5A059] border-2 border-[#C5A059] rounded-lg '  type="radio" name='only' onChange={()=>{setcat(ele.id)}}/>
                <label htmlFor="">{ele.slug}</label>
              </div>
            </>
            )
          })
        }
        </form>
       </div>
    </div>
  )
}

export default Sidebar