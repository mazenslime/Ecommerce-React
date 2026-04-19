import { div } from 'motion/react-client'
import React from 'react'

const Rating = ({rate}) => {
    let list=[]
    for(let i=0;i<rate;i++){
        list.push(i)
    }
    const data=rate
    function Rates(){
            return<div className='w-5 h-5 bg-amber-600 '></div>   
    }
  return (
    // <div>{data['rate']}</div>
    <div>
        <div className='text-black font-bold text-xl'>{rate}</div>
        <div className='flex flex-row gap-1'>
        {list.map((ele,i)=>{
            return <Rates key={i}/>
        })}
        </div>
    </div>
  )
}

export default Rating