import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './componant/Home'
import Rejster from './componant/Rejster'
import Login from './componant/Login'
import Navbar from './componant/Navbar'
import { useContext } from 'react'
import { ProudactContext } from './componant/contaextapi'
import Contaextapi from './componant/contaextapi'
import { useScroll } from 'motion/react'
import Pagecart from './componant/Pagecart'
import Pro from './componant/Pro'
import List from './componant/list'
import ALLPROUDACT from './componant/ALLPROUDACT'
function App() {
  const [orders,setorders]=useState([])
  const [scrll,setscrol]=useState(false)
  const {scrollY}=useScroll()
  const [login,setlogin]=useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(true);
  const [ALL,Setall]=useState(false)
  window.addEventListener('scroll', function() {
   if(scrollY.get() > 300){
    setscrol(true);
   }else{
    setscrol(false);
   }

    });
  addEventListener("resize", handleResize);
  function handleResize() {    
    setWidth(window.innerWidth);
}

  return (
    <>
    <BrowserRouter>
      <List width={width} open={open} setOpen={setOpen} setscrol={setscrol}  />
      <Navbar scro={scrll} logins={login} width={width} open={open} setOpen={setOpen} setWidth={setWidth} ALL={ALL} />
      <Routes>
          <Route path="/" element={<Contaextapi orders={orders} setorders={setorders}  />} />  
          <Route path="/rejester" element={<Rejster scrolls={setscrol} setlogin={setlogin} width={width} />} /> 
          <Route path="/Login" element={<Login scrolls={setscrol} setlogin={setlogin} width={width}/>} /> 
          <Route path="/Pagecart" element={<Pagecart orders={orders} setorders={setorders}  scrolls={setscrol} width={width}/>} />
          <Route path="/pro/:id" element={<Pro  orders={orders} defs={setorders} scrll={setscrol} width={width}/>} />
          <Route path="/ALLPROUDACT" element={<ALLPROUDACT width={width}   setscrol={setscrol} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
