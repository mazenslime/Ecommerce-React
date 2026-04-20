import { button, image, img, style } from 'motion/react-client'
import React from 'react'
import { motion } from 'motion/react'
import BButton from './button'
import { Link, useNavigate } from 'react-router-dom'
const Cart = ({pro,proudact ,orders,defs}) =>{
  console.log(proudact)
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
    className='w-64 h-100 py-3 px-1.5 flex flex-col  justify-between  mt-50 gap-1'>
        <img src={proudact['images'][0]} alt="" className='w-100 h-50 ' />
        <h1 className='text-black font-bold text-1xl text-center '>{proudact['title']}</h1>
        <h3 className='text-black font-bold text-1xl text-center '>{proudact['brand']}</h3>
        <div className='flex flex-row justify-evenly'>
            <p className='text-gray-700  font-semibold text-xl '>{proudact['category']}</p>
            <p className='text-gray-700  font-semibold text-xl '>{proudact['price']}</p>
        </div>
        <div className='flex flex-row justify-evenly w-full' >
            <BButton orders={orders} defs={defs} proudact={proudact} />
            <button className='bg-white w-1/7 px-2 py-0.5 rounded cursor-pointer text-black font-semibold' onClick={()=>go(proudact['id'])}><i class="fa-solid fa-eye"></i></button>
        </div>
    </motion.div>
  </>
  )
}

export default React.memo(Cart)