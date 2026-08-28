import React from 'react'
import Cart from './Cart'
import {Link} from 'react-router-dom'
const Proudacts = ({pro,order,deforder,setLoveprouduct,Loveprouduct}) => {
  return (
  <>
  <div className='flex w-full  justify-between items-center mt-20 mb-10 '>
    <h2 className='text-2xl sm:text-sm  md:text-md'>Trinding Now</h2>
     <p className='text-lg sm:text-sm  md:text-md text-blue-500  font-semibold '><Link to={'/ALLPROUDACT'}>view all prouducts</Link></p>
  </div>
  <div className='relative w-full h-full flex flex-row flex-wrap gap-10 '>
        {pro?.map((ele,i)=>{
              return <Cart key={i} pro={pro} proudact={ele} orders={order} defs={deforder} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct}/>
        })}
  </div>
  </>
  )
}

export default React.memo(Proudacts)