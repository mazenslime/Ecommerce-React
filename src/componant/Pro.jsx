import React, { useEffect,useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import BButton from './button'

const Pro = ({orders, defs, scrll, width}) => {
  const Location=useLocation()
  const data=Location['state']['proudact']
  const [image,setimag]=useState(data?.images[0])
  return (
    <div className={`gap-3 flex flex-col space-y-5 w-full text-white`}>
      <div className='relative w-full min-h-1/4 flex flex-col gap-5 transition-all duration-300  '>
        <img src={image} alt="" className='w-full  min-h-1/4  md:w-3/4 md:mx-auto' />
        <div className='absolute z-1000 bottom-10 left-1/2 -translate-x-1/2 gap-5 space-x-3 '>
          {data?.images?.map((ele,index)=>{
             return <button className={`${data?.images[index]==image?'bg-white':'bg-black'} w-5 h-5 cursor-pointer   rounded-full`} onClick={()=>setimag(data?.images[index])}></button>
          })}
        </div>
      </div>
      <div className='w-3/4 h-1/2 mx-auto  flex flex-col gap-7 justify-center align-center space-y-4  pb-10 '>
       <div>
            <p className='text-black  text-md  font-light  '>The single collection</p>
            <p className='text-black font-bold text-2xl  '>{data?.title}</p>
            <p className='text-black  font-light text-2xl '>{data?.price}<span className='text-sm'> $</span> </p>
       </div>
        <p className='text-black font-light  text-md '>{data?.description}</p>
        {/* <p className='text-gray-700  font-semibold  text-xl '>{data?.category?.name}</p> */}
        {/* <Rating rate={data?.rating}/> */}
         <div className={`flex flex-row items-center ${width>868?'justify-left':'justify-left'} w-full justify-between  gap-2`} >
          <div className='flex-col space-y-1'>
            <p className='text-black font-bold text-2xl  '>{data?.title}</p>
            <p className='text-black  font-light text-2xl '>{data?.price}<span className='text-sm'> $</span> </p>
          </div>
            <BButton orders={orders} defs={defs} proudact={data} width={width}/>
        </div>
      </div>
    </div>
  )
}

export default Pro