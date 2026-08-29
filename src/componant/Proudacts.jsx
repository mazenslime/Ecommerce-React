import React from 'react'
import Cart from './Cart'
import {Link} from 'react-router-dom'
const Proudacts = ({pro,order,deforder,setLoveprouduct,Loveprouduct,width,setcat}) => {
  return (
  <>
  <div className='flex w-full  justify-between items-center mt-20 mb-10 '>
     <h2 className={`${width>600?'text-lg':'text-sm' }`}>Trinding Now</h2>
     <p className={`${width>600?'text-lg':'text-sm' }   text-blue-500  font-semibold`} onClick={()=>{setcat(null)}}><Link to={'/ALLPROUDACT'}>view all prouducts</Link></p>
  </div>
  <div className='relative w-full h-full flex flex-row flex-wrap gap-10 '>
        {pro?.map((ele,i)=>{
              return <Cart key={i} pro={pro} proudact={ele} orders={order} defs={deforder} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct} width={width}/>
        })}
  </div>
  </>
  )
}

export default React.memo(Proudacts)