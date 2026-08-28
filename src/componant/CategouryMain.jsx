import { ul } from 'motion/react-client'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function CategouryMain({Listcategoury,cat,setcat}) {
  const navegation=useNavigate()
  function action(id){
    console.log(id);
    setcat(id)
    navegation('/ALLPROUDACT')
  }
  return (
    <div className="space-y-4 w-9/10   scrollbar-none sidebar">
      <h2 className='text-2xl '>Curaled categoures</h2>
        <ul className='flex space-x-4 overflow-x-auto sidebar '>
        {Listcategoury.map((ele,i)=>{
            return(
              <div key={i} className='cursor-pointer' onClick={()=>{action(ele?.id)}}>
              <div className='flex flex-col justify-center w-fit px-2 py-1'>
                  <div className='w-20 h-20 rounded-lg'>
                    <img src={ele?.image} className='h-full w-full rounded-lg'/>
                  </div>
                  <p className='text-gray-500 font-bold'>{ele?.name}</p> 
                </div>
              </div>
            )
        })}
        </ul>
    </div>
  )
}

export default React.memo(CategouryMain)