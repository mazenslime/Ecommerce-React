import React from 'react'
import Cart from './Cart'
const Proudacts = ({pro,order,deforder}) => {
  console.log(order)
  return (
    <>
    <h2 className=' mt-50 text-center align-middle font-bold text-3xl'>Proudacts</h2>
    <div className='relative w-full h-full py-20 px-10 flex flex-row flex-wrap gap-20 justify-center'>
        {pro.map((ele)=>{
              return <Cart pro={pro} proudact={ele} orders={order} defs={deforder}/>
        })}
    </div>
  </>
  )
}

export default Proudacts