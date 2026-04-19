import React from 'react'
import Btnrejest from './btnrejest'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const Login = ({scrolls, setlogin, width}) => {
  const [email,setemail]=React.useState('')
  const [password,setpassword]=React.useState('')
  useEffect(()=>{
      scrolls(false);
  })

  return (
    <div className={`${width>868?'w-3/4':'w-80'} mx-auto flex flex-row justify-around items-center h-lvh pt-10`}>
      {
        width < 868 ? null : (
                <div className='w-1/2  p-5 flex flex-col gap-3'>
        <h1 className='text-6xl font-bold '>Welcom to your</h1>
        <p className='text-5xl mt-3 mb-3 font-bold text-blue-400'>Digital</p>
        <p className='text-5xl mt-3 mb-3 font-bold text-blue-400'>Sanctuary</p>
        <p className='w-3/4 text-sm font-bold text-gray-400'>Access your secure vauit your assets with the peace of mind thet comes from end-to-end encription</p>
      </div>)
      }
      <div className={` ${width>868?'w-1/2 p-5':'w-full p-2'}   flex flex-col gap-3`}>
          <div className='flex flex-col gap-1'>
            <h2  className='text-2xl font-bold'>sigin in </h2>
            <p>pleas enter creaditels to proucessed</p>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="Email" className='text-sm font-bold'>Email Address</label>
            <div className='bg-blue-400/60  p-3 rounded-xl  flex items-center flex-nowrap'>
              <i class="fa-solid fa-envelope "></i>
              <input type="email" value={email} id='Email' className='W-90 bg-transparent border-none outline-0 pl-2 font-bold' onChange={(e)=>{setemail(e.target.value)}} />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-row justify-between'>
              <label htmlFor="pass" className='text-sm font-bold'>Password</label>
              <a href="">forget password</a>
            </div>
            <div className='bg-blue-400/60  p-3 rounded-xl flex items-center flex-nowrap'>
              <i class="fa-solid fa-key"></i>
              <input type="password" id='pass' className='bg-transparent border-none outline-0 w-90 pl-2' onChange={(e)=>{setpassword(e.target.value)}} />
              {/* icone */}
            </div>
          </div>
          <Btnrejest names={'Login'} setlogin={setlogin} email={email} pass={password}/>
          <div className='flex flex-row justify-between items-center w-full  '>
            <hr className='w-1/4'/>
            <p className='font-bold'>our count whit</p>
            <hr className='w-1/4'/>
          </div>
          <div className='flex flex-row justify-center gap-5'>
            <div className='bg-gray-400 py-2 rounded-xl w-1/4 flex flex-row justify-center items-center '>
              {/* icon */}
              <p className='font-bold'><i class="fa-brands fa-google"></i> Google</p>
            </div>
            <div className='bg-gray-400 py-2 px-2 rounded-xl  w-1/4 flex flex-row justify-center items-center '>
              {/* icon */}
              <p className='font-bold'><i class="fa-brands fa-facebook"></i> Facebook</p>
            </div>
          </div>
        <p className='text-center mt-3'>Dont have any account? <Link to={'/rejester'} className='font-bold underline'>sigin Up</Link></p>
      </div>
      
    </div>
  )
}

export default Login