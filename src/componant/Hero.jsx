import React, { useEffect, useState } from 'react'
import one from '../assets/—Pngtree—a-3d-rendered--modern--minimalistic-product-displa_16409176 (1).webp'
import two from '../assets/two.webp'
import {Link} from 'react-router-dom'
const Hero = () => {
    let img=[one,two]
    const [background,setground]=useState(one)
    useEffect(()=>{
        let index=0;
        const inter=setInterval(()=>{
            setground(img[index])
            index = (index + 1)%img.length;
        },3000)
        return () => clearInterval(inter);
    },[])
  return (
    <div className='relative'>
        <div className="absolute bottom-10 left-4 z-[1000] space-y-6">
            <p className="text-md text-white font-bold">AUTUMAN COLLECTION</p>
            <h2 className="text-5xl text-white">NEW Arrivals</h2>
            <button className='px-6 py-4 bg-[#1b3022] text-white font-semibold'><Link to="/ALLPROUDACT">EXPLORE COLLECTION</Link></button>
        </div>
        <img src={background} alt="" className='relative top-0 left-0 w-full h-screen object-fit'/>
    </div>
  )
}

export default React.memo(Hero)