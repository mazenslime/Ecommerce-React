import { Link, useLocation, useNavigate } from "react-router-dom"


function Navbar() {
  const Location=useLocation();
  const navigation=useNavigate()
  let path=Location.pathname
  return (
    <div className={`flex justify-between px-10 h-20 items-center `}>
      <Back path={path} navigation={navigation}/>
      <Logo/>
      <LogoCaart/>
    </div>
  )
}

function Logo(){
  return (
      <h1 className='text-black text-2xl font-bold'>Zearo</h1>
  )
}
function Back({path,navigation}){
  if(path=='/'){
    return (
      <h1 className='text-lg'></h1>
    )
  }else{
    return(
      <h1 className='text-xl cursor-pointer' onClick={()=>{navigation(-1)}}>←</h1>
    )
  }
}
function LogoCaart(){
  return (
    <div>
      <Link to="/favourt"><i class={`fa-solid  fa-heart text-xl text-red-500 cursour-pointer`}></i></Link>
    </div>
  )
}



export default Navbar