import { useEffect, useState } from 'react'
import { Link} from "react-router-dom";
import Btnrejest from './btnrejest';
const Rejster = ({scrolls,setlogin,width}) => {
useEffect(()=>{
    scrolls(false);
})
  const[emailrejest,setemail]=useState('')
  const[passrejest,setpass]=useState('')
  const[namerejest,setname]=useState('')
  const[conpassrejest,setconpass]=useState('')
  return (
    <div className={`${width>868?'w-3/4':'w-80'} mx-auto flex flex-row justify-around items-center h-lvh pt-15`}>
      {
        width < 868 ? null : (
                <div className='w-1/2  p-5 flex flex-col gap-3'>
        <h1 className='text-6xl font-bold '>Welcom to your</h1>
        <p className='text-5xl mt-3 mb-3 font-bold text-blue-400'>Digital</p>
        <p className='text-5xl mt-3 mb-3 font-bold text-blue-400'>Sanctuary</p>
        <p className='w-3/4 text-sm font-bold text-gray-400'>Access your secure vauit your assets with the peace of mind thet comes from end-to-end encription</p>
      </div>)
      }
      <div className={`${width>868?'w-1/2 p-5':'w-full p-2'} flex flex-col gap-3 `}>
          <div className='flex flex-col gap-1'>
            <h2  className='text-2xl font-bold'>sigin Up </h2>
            <p>pleas enter creaditels to proucessed</p>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="Email" className='text-sm font-bold'>Email Address</label>
            <div className='bg-blue-400/60  p-3 rounded-xl'>
              <i class="fa-solid fa-envelope "></i>
              <input type="email" id='Email' className='bg-transparent border-none outline-0 pl-2 font-bold' value={emailrejest} onChange={(e)=>setemail(e.target.value)} />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='text-sm font-bold'>full name</label>
            <div className='bg-blue-400/60  p-3 rounded-xl'>
              <i class="fa-solid fa-user"></i>
              <input type="text" id='name' className='bg-transparent border-none outline-0 pl-2 font-bold' value={namerejest} onChange={(e)=>setname(e.target.value)} />
              {/* icone */}
            </div>
          </div>
          <div className='flex flex-row gap-1 '>
            <div className='flex flex-col gap-1'>
              <label htmlFor="pass" className='text-sm font-bold'>Password</label>
              <div className='bg-blue-400/60  p-3 rounded-xl'>
                <i class="fa-solid fa-key"></i>
                <input type="password" id='pass' className='bg-transparent border-none outline-0 pl-2 w-1/2 ' value={passrejest} onChange={(e)=>setpass(e.target.value)} />
                {/* icone */}
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="con" className='text-sm font-bold'>Password</label>
              <div className='bg-blue-400/60  p-3 rounded-xl'>
                <i class="fa-solid fa-key"></i>
                <input type="password" id='con' className='bg-transparent border-none outline-0 pl-2 w-1/2' value={conpassrejest} onChange={(e)=>setconpass(e.target.value)} />
                {/* icone */}
              </div>
            </div>

          </div>
          <Btnrejest  names={'rejester'} setlogin={setlogin} email={emailrejest} pass={passrejest} namerejest={namerejest} conpassrejest={conpassrejest} />
          <div className='flex flex-row justify-between items-center w-full  '>
            <hr className='w-1/4'/>
            <p className='font-bold'>our count whit</p>
            <hr className='w-1/4'/>
          </div>
          <div className='flex flex-row justify-center gap-10 mt-5'>
            <div className='bg-gray-400 py-2 rounded-xl w-1/4 flex flex-row justify-center items-center '>
              {/* icon */}
              <p className='font-bold'><a href=""><i class="fa-brands fa-google"></i> Google</a></p>
            </div>
            <div className='bg-gray-400 py-2 rounded-xl  w-1/4 flex flex-row justify-center items-center '>
              {/* icon */}
              <p className='font-bold'><a href=""><i class="fa-brands fa-facebook"></i> Facebook</a></p>
            </div>
          </div>
        <p className='text-center mt-3'>Dont have any account? <Link to={'/login'} className='font-bold underline'>sigin in</Link></p>
      </div>
      
    </div>
  )
}

export default Rejster