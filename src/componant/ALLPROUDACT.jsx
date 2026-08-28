import {data, useLocation} from "react-router-dom"
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './Cart'
import Sidepar from './Sidepar'
import Pagination from "./Pagination"
import Sidebar from "./Sidebar"
const ALLPROUDACT = ({Listcategoury,width,setscrol,orders,setorders,paginate,setpaginate,setLoveprouduct,Loveprouduct,cat,setcat}) => {
    const Location=useLocation()
    const [openside,setopenside]=useState(false)
    let query=`${cat==null?`products`:`categories/${cat}/products`}?limit=10&offset=${paginate*10}`
    useEffect(()=>{
        setscrol(true);
    })
    let search=""
    
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
          const proms=await axios.get(`https://api.escuelajs.co/api/v1/${query}`)
          const data=proms.data
          setproudact(data)
      }
      getproudact()
    },[paginate,cat])
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
    
  return (
    <div className="w-full h-screen  px-10 ">
        <Sidebar openside={openside} setopenside={setopenside} Listcategoury={Listcategoury} cat={cat} setcat={setcat} />
        <div className="flex flex-col  space-y-15">
            <div className="w-full flex  justify-between">
                <div className="flex flex-row space-x-8">
                    <div className="px-4 py-1 cursor-pointer text-white bg-[#1B3022]" onClick={()=>{setopenside(!openside)}}>fillter</div>
                    <div className="flex flex-row space-x-5 items-center">
                        {/* <lable classNam='text-blackfont-bold'>sort</lable>
                        <select name="" id="" className="outline-none">
                            <option onClick={()=>{setcat(null)}}>ALL</option>
                        </select> */}
                    </div>
                </div>
            </div>
            {proudact.length==0?<div className="text-black min-h-80 text-2xl sm:text-sm md:text-md flex justify-center ">Not prouduct find</div>:
            <div className="min-h-100 px-10  relative w-full h-full flex flex-row flex-wrap gap-10">
                {proudact?.map((ele,i)=>{
                        return <Cart key={i} proudact={ele} orders={orders} defs={setorders} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct}/>
                })}
            </div>
        }
        <Pagination paginate={paginate} setpaginate={setpaginate} />
        </div>
    </div>
  )
}

export default ALLPROUDACT