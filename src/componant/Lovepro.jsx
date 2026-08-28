import { FunnelIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'

function Lovepro({proudact,setLoveprouduct,Loveprouduct=[]}) {
const [Love,setLove]=useState(false)
useEffect(()=>{
    let fillters=Loveprouduct.filter((pro)=>{
        return pro.id==proudact.id
    })

    if(fillters.length!=0){
        setLove(true)
    }
})
async function AddLoveProuduct(){ 
    if(Love==false){
        setLoveprouduct((prev) => [...prev, proudact])
    }else{
        let fillters=Loveprouduct.filter((pro)=>{
            return pro.id!=proudact.id
        })
        console.log(fillters);
        setLoveprouduct(() => [...fillters]);
    }
    
    
}
function AddLoveui(){
    setLove(!Love)
    AddLoveProuduct()
}


  return (

        <div className='absolute z-100 top-4 right-4'>
               <i class={`fa-${Love?'solid':'regular'} fa-heart ${Love==true?'text-red-500':'text-black'} text-xl cursour-pointer`} onClick={()=>{AddLoveui()}}></i>
        </div>
  )
}

export default React.memo(Lovepro)