import { select } from 'motion/react-client';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Sidepar = ({proudact, width,Listcategoury}) => {
    
    const navigate = useNavigate();


    function clicked(category,Width) {
        navigate("/ALLPROUDACT",{state:{search:category}});
    }
  return (
    <div className={`w-1/4 h-screen pt-20  overflow-y-auto  scrollbar-none sidebar bg-black px-10  `}>
        <h2 className='text-2xl font-bold'>Categories</h2>
        <div className='flex flex-col  gap-5 '>
            <button  onClick={()=>clicked('ALL')} className='text-lg text-left font-semibold text-black-500  cursor-pointer'>ALL</button>
            {Listcategoury?.map((ele,index)=>{
                return <button key={index} onClick={()=>clicked(ele?.name)} className='text-lg text-left font-semibold text-black-500  cursor-pointer'>{ele?.name}</button>
            })}
        </div> 
    </div>
  )
}

export default Sidepar