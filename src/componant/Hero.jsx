import React, { useEffect, useState } from 'react'
import one from '../assets/—Pngtree—a-3d-rendered--modern--minimalistic-product-displa_16409176.jpg'
import two from '../assets/—Pngtree—ecommerce website with shopping cart_3515047.jpg'
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
    <div>
        <img src={background} alt="" className='relative top-0 left-0 w-full h-screen object-fit'/>
    </div>
  )
}

export default Hero