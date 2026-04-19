import {useLocation} from "react-router-dom"
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './Cart'
import Sidepar from './Sidepar'
const ALLPROUDACT = ({width,setscrol}) => {
    const Location=useLocation()
    useEffect(()=>{
        setscrol(true);
    })
    let search=""
    console.log(Location);
    if(Location['state']==null){
        search=""
    }else{
        search=Location['state']['search']
    }
    const[proudact,setproudact]=useState([])
    const[elemants,setelemants]=useState()

    useEffect(()=>{
      const getproudact=async()=>{
        // https://fakestoreapi.com/products
          const proms=await axios.get("https://dummyjson.com/products") 
          const data=proms.data
          setproudact(data['products'])
      }
      getproudact()
    },[])
    useEffect(()=>{
        if(search=="" || search=="ALL"){
            setelemants(proudact)
        }else{
            const fil=proudact.filter((ele)=>{
                if((ele.category.toLowerCase()).includes(search.toLowerCase())){
                    return ele
                }
            })
            setelemants(fil)
        }
    },[search,proudact])

    console.log(elemants);
    
  return (
    <div className='w-full h-full flex flex-col gap-5 justify-center align-center mt-20 mb-20 '>
            <div className={`w-full flex flex-col  ${width>868?'':'px-5'} pb-20   text-white  `}>
                <Sidepar proudact={proudact}/>
                    <div className='w-full h-full  flex flex-row flex-wrap gap-10 justify-center '>
                        {elemants?.map((ele,index)=>{
                            return <Cart key={index} pro={proudact} proudact={ele}/>
                        })}
                    </div>
            </div>
    </div>
  )
}

export default ALLPROUDACT