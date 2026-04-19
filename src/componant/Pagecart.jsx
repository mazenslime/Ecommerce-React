import React, { useEffect, useState } from 'react'
import Orderscart from './Orderscart'
import { useNavigate } from 'react-router-dom'
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
  function Found(){
    if(len==0){
      return(
        <div className='w-full h-96 flex flex-col items-center justify-center gap-5'>
                  <h2 className={` ${width < 868 ? 'text-center pt-100' :'pt-30'} font-bold text-xl  pl-10`}>no proudact found</h2>
                  <h3 className={` ${width < 868 ? 'text-center' :''} font-semibold text-lg pt-10 pl-20`}>Discover proudacts Please add some products to your cart</h3>
                  <button className='bg-blue-500 px-8 py-4 font-semibold cursor-pointer rounded-2xl ml-10 ' onClick={()=>navigation('/')}>Go to shoping</button>
          </div>
      ) 

    }else{
      return(
       <>
        <h2 className='text-black font-bold text-xl pt-30 pl-10'>Shoping page</h2>
        <p className='text-gray-500 font-bold   pl-10'>{len} in your page</p>
      </>
      )
    }
  }
  function Cheackout(){
  if(len==0){
    return false
  }else{
    return(
      <div className=' bg-blue-700 flex flex-row justify-between mt-10 w-300 p-5 ml-18  align-center  '>
        <button className='bg-white px-3 py-1 font-semibold cursor-pointer rounded-2xl '>Cheack out</button>
        <p className='text-white'>Subtotal : <span>{Math.floor(cheack)}</span></p>
      </div>
    )
  }
}
  return (
    <div>
      <Found />
      <div className='w-full h-fit pt-10 pl-18 flex flex-col gap-5'>
        {(data||[]).map((ele,i)=>{
          console.log(ele);   
         return(<Orderscart setorders={setorders}  orders={orders} key={i} ids={ele['id']} imag={ele[4]} title={ele['title']} catigoury={ele['catigoury']} price={ele['price']} quatity={ele['quntity']} setcheack={setcheack}/>)
        })}
      </div>
        <Cheackout/>
  </div>
  )
}
export default Pagecart