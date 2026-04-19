import React from 'react'
import { useNavigate } from 'react-router-dom'

const Btnrejest = ({names, setlogin, email, pass, namerejest, conpassrejest}) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigation=useNavigate()
    function clicked(){
        if(names === 'Login'){
            if(email === "" || pass ===""){
                alert('pleas fill all the fields')
            }else{
                if(emailPattern.test(email) && pass.length >= 6){
                    setlogin(true)
                    navigation('/')
                }else{
                    alert('pleas enter a valid email or password')
                }

            }
    }else{
        if(email === "" || pass === "" || namerejest === "" || conpassrejest === ""){
            alert('pleas fill all the fields')
        }else{
            if(pass === conpassrejest){
                if(emailPattern.test(email) && pass.length >= 6){
                    setlogin(true)
                    navigation('/')
                }else{
                    alert('pleas enter a valid email or password')
                }
            }else{
                alert('pleas enter the same password')
            }
        }
    }
    }
  return (
        <button className='w-full bg-green-950 py-4 mt-4 rounded-xl text-white font-bold cursor-pointer' onClick={clicked}>{names}</button>
  )
}

export default Btnrejest