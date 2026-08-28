import React, { useEffect, useState } from 'react'
import Orderscart from './Orderscart'
import { Link, useNavigate } from 'react-router-dom'
const Pagecart = ({orders,setorders,scrolls,width}) => {
  useEffect(()=>{
    scrolls(false)
  })
  const [cheack,setcheack]=useState(0)
  const [data,setdata]=useState()
  const navigation=useNavigate()
  useEffect(()=>{
    setdata(orders)
  },[orders])
  let len=(data||[]).length
  function Found({data,setorders,orders}){
    if(len==0){
      return(
        <div>
        <div className={`flex flex-col w-1/2 h-100 text-center mx-auto justify-center space-y-4 sm:w-full md:w-3/4'}`}>
                  <i class="fa-solid fa-bag-shopping text-8xl text-gray-500/50 mb-6"></i>
                  <h2 className={` ont-bold text-xl  `}>no proudact found</h2>
                  <h3 className={`w-1/2 mx-auto font-semibold text-lg sm:text-sm sm:w-full md:text-md md:w-3/4 `}>Discover proudacts Please add some products to your cart</h3>
                  <div className='w-full flex justify-center'>
                    <button className='w-fit bg-[#1B3022] px-12 py-2 text-white  font-semibold cursor-pointer  ' onClick={()=>navigation('/')}>Go to shoping</button>
                  </div>
        </div>
        </div>
      ) 

    }else{
      return(
       <div clasName="mb-10">
        <h2 className='text-black font-bold text-xl'>Shoping page</h2>
        <p className='text-gray-500 font-bold '>{len} in your page</p>
      </div>
      )
    }
  }
  function Cheackout(){
  if(len==0){
    return false
  }else{
    return(
      <div className={`${width>600?'fixed right-5 w-1/4':'w-full '} flex flex-col   bg-gray-200/50 text-black  h-ft px-4 py-8 gap-6`}>
        <div className=" h-1/2 border-b-1 by-4  gap-2">
          <h3>Summary of order</h3>   
          <div className="flex flex-row justify-between">
            <p className=''>Subtotal :</p>
             <span>{Math.floor(cheack)}</span>
          </div>
          <div className="flex flex-row justify-between">
            <p className=''>Subtotal :</p>
             <span>{Math.floor(cheack)}</span>
          </div>
        </div>
        <div className="flex flex-row justify-between">
            <p className=''>Total :</p>
             <span>{Math.floor(cheack)}</span>
        </div>
        <div className='w-full'>
            <button className='w-70  bg-[#1B3022] px-3 py-2 text-white font-semibold cursor-pointer  '>Cheack out</button>
           <div className='w-full flex justify-center'>
             <Link className="underline" to="/">Contunue shoping</Link>
           </div>
        </div>
      </div>
    )
  }
}
  return (
    <div className={`w-full flex ${width>600?'flex-row flex-nowrap p-10  items-start ':'flex-col p-6 '}  `}>
        <div className={`${len==0?'w-full':'w-3/4'} bg-white`}>
          <Found/>
          <div claName="w-full">
              {(data||[]).map((ele,i)=>{
              return(<Orderscart setorders={setorders}  orders={orders} key={i} ids={ele['id']} imag={ele['photo']} title={ele['title']} catigoury={ele['catigoury']} price={ele['price']} quatity={ele['quntity']} setcheack={setcheack} width={width}/>)
              })}
          </div>
        </div>
      <Cheackout/>
  </div>
  )
}
export default Pagecart