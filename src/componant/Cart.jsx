import { button, image, img, style } from 'motion/react-client'
import React from 'react'
import { motion } from 'motion/react'
import BButton from './button'
import { Link, useNavigate } from 'react-router-dom'
import Lovepro from './Lovepro'
const Cart = ({pro,proudact ,orders,defs,setLoveprouduct,Loveprouduct,cls='',width}) =>{
  const navigation=useNavigate()
  function go(id){
    navigation(`/Pro/${id}`,{state:{proudact:proudact}})
  }
      
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    className={`relative  ${width>600?'w-64 h-100':'w-full'}  py-3 px-1.5 flex flex-col  justify-between   gap-2  ${cls}`}>
       <Lovepro proudact={proudact} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct}/>
        <div className='relative w-full h-70 overflow-clip mx-auto '>
          <img src={proudact?.images[0]} alt="" className='w-full cursor-pointer h-full hover:scale-105 transition-transform duration-300 ' />
        </div>
        <div className={`${width>600?'h-15':'h-fit py-2'}`}>
          <h3 className='text-black font-semibold text-md '>{proudact?.slug}</h3>
        </div>
        <div className={`flex flex-row justify-start ${width>600?'h-10':'h-fit py-2'}`}>
            <p className='text-gray-700  font-semibold text-md '>{proudact?.price}$</p>
        </div>
        <div className='flex flex-row w-full justify-bettwen ' >
            <BButton orders={orders} defs={defs} proudact={proudact} />
            <button className='bg-white w-1/4 px-2 py-0.5 rounded cursor-pointer text-center font-semibold' onClick={()=>go(proudact?.id)}><i class="fa-solid fa-eye text-[#3F2427]"></i></button>
        </div>
    </motion.div>
  </>
  )
}

export default React.memo(Cart)