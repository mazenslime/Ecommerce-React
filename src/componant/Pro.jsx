import React, { useEffect,useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import BButton from './button'
import Rating from './Rating'

const Pro = ({orders, defs, scrll, width}) => {
  const Location=useLocation()
  const data=Location['state']['proudact']
  console.log(data);
    useEffect(()=>{
        scrll(true);
    },[])
  return (
    <div className={` ${width>868?'grid grid-cols-2 pr-20 pl-20':'flex flex-col '} gap-3  w-full h-lvh align-center text-white p-5 justify-between pt-40 `}>
      <div className='w-full h-full  flex flex-col gap-5 justify-center align-center  pb-10'>
        <img src={data['images'][0]} alt="" className='w-100 h-100 ' />
      </div>
      <div className='w-full h-full  flex flex-col gap-7 justify-center align-center  pb-10'>
        <p className='text-gray-700   text-xl '>{data['category']}</p>
        <p className='text-black font-bold text-2xl  '>{data['name']}</p>
        <Rating rate={data['rating']}/>
        <p className='text-black  font-bold text-3xl '>{data['price']}<span className='text-sm'> $</span> </p>
         <p className='text-gray-900 font-semibold  text-sm '>{data['description']}</p>
         <div className={`flex flex-row ${width>868?'justify-left':'justify-left'}  gap-2`} >
                <BButton orders={orders} defs={defs} proudact={data} width={width}/>
        </div>
      </div>
    </div>
  )
}

export default Pro