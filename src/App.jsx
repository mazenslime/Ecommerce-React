import { useEffect, useState } from 'react'
import { Routes,Route, BrowserRouter, Link, useLocation } from 'react-router-dom'
import Rejster from './componant/Rejster'
import Login from './componant/Login'
import Navbar from './componant/Navbar'
import Contaextapi from './componant/contaextapi'
import { useScroll } from 'motion/react'
import Pagecart from './componant/Pagecart'
import Pro from './componant/Pro'
import List from './componant/list'
import ALLPROUDACT from './componant/ALLPROUDACT'
import Favourit from './Favourit'
function App() {
  const [orders,setorders]=useState([])
  const [scrll,setscrol]=useState(false)
  const {scrollY}=useScroll()
  const [login,setlogin]=useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(true);
  const [ALL,Setall]=useState(false)
  const [Loveprouduct,setLoveprouduct]=useState([])
  const [Listcategoury,setListcategoury]=useState([]);
  const [paginate,setpaginate]=useState(1)
  const [cat,setcat]=useState(null);  
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
     
    useEffect(()=>{
        const categoury=async ()=>{
            let response=await fetch(`https://api.escuelajs.co/api/v1/categories${Location=='/ALLPROUDACT'?'':'?limit=5'}`)
            let data=await response.json()
            setListcategoury(data)  
        }
        categoury()
    return ()=> categoury();
  },[Location])

  return (
    <>
    <BrowserRouter>
    <div className="cart text-3xl font-bold fixed bottom-10  z-[1000]  right-5  cursor-pointer text-blue-500">
      <Link to='/Pagecart'><i class={`${Location=='/Pagecart'?'hidden':''} fa-solid text-[#C5A059] fa-cart-arrow-down`}></i></Link>
     </div>
      <Navbar scro={scrll} logins={login} width={width} open={open} setOpen={setOpen} setWidth={setWidth} ALL={ALL} />
      <Routes>
          <Route path="/" element={<Contaextapi orders={orders} setorders={setorders} Listcategoury={Listcategoury} setpaginate={setpaginate} paginate={paginate} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct} cat={cat} setcat={setcat} width={width}  />} />  
          <Route path="/rejester" element={<Rejster scrolls={setscrol} setlogin={setlogin} width={width} />} /> 
          <Route path="/Login" element={<Login scrll={scrll} scrolls={setscrol} setlogin={setlogin} width={width}/>} /> 
          <Route path="/Pagecart" element={<Pagecart orders={orders} setorders={setorders}  scrolls={setscrol} width={width}/>} />
          <Route path="/pro/:id" element={<Pro  orders={orders} defs={setorders} scrll={setscrol} width={width}/>} />
          <Route path="/ALLPROUDACT"  element={<ALLPROUDACT Listcategoury={Listcategoury} width={width} orders={orders} setorders={setorders}  setscrol={setscrol} paginate={paginate} setpaginate={setpaginate} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct}  cat={cat} setcat={setcat}/>} />
          <Route path="/favourt"  element={<Favourit  setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct} orders={orders} defs={setorders} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
