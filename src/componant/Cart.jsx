import { button, image, img, style } from 'motion/react-client'
import React from 'react'
import { motion } from 'motion/react'
import BButton from './button'
import { Link, useNavigate } from 'react-router-dom'
import Lovepro from './Lovepro'
const Cart = ({pro,proudact ,orders,defs,setLoveprouduct,Loveprouduct,cls=''}) =>{
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
    className={`relative  w-64 h-100 py-3 px-1.5 flex flex-col  justify-between   gap-1  ${cls}`}>
       <Lovepro proudact={proudact} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct}/>
        <div className='relative w-full h-70 overflow-clip mx-auto '>
          <img src={proudact?.images[0]} alt="" className='w-full cursor-pointer h-full hover:scale-105 transition-transform duration-300 ' />
        </div>
        <div className='h-15'>
          <h3 className='text-black font-semibold text-md '>{proudact?.slug}</h3>
        </div>
        <div className='flex flex-row justify-start h-10'>
            {/* <p className='text-gray-700  font-semibold text-xl '>{proudact?.category?.name}</p> */}
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