import React from 'react'
import Cart from './componant/Cart'

function Favourit({Loveprouduct,setLoveprouduct,orders,defs}) {   
  return (
    <div className='w-full h-full'>
        <Found Loveprouduct={Loveprouduct} />
        <div className="w-3/4 mt-10 text-center overflow-x-auto h-full mx-auto">
            <div className='relative w-full  h-full flex flex-row  flex-wrap sm:justify-center gap-x-10 w-200 '>
                {Loveprouduct?.map((ele,i)=>{
                    return <Cart key={i}  proudact={ele} orders={orders} defs={defs} setLoveprouduct={setLoveprouduct} Loveprouduct={Loveprouduct} />
                })}
            </div>
        </div>
    </div>
  )
}

function Found({Loveprouduct=[]}){
    if(Loveprouduct.length==0){
      return(
        <div>
        <div className={`flex flex-col w-1/2 h-100 text-center mx-auto justify-center space-y-4 '}`}>
                  <i class={`fa-solid  fa-heart text-7xl text-gray-500 cursour-pointer`}></i>
                  <h2 className={` ont-bold text-xl  `}>No Favourit  Proudact Found</h2>
        </div>
        </div>
      ) 
     }else{
      return(
       <div clasName="mb-10">
        <h2 className='text-black font-bold text-center text-xl'>Your favourit prouduct</h2>
      </div>
      )
    }
  }



export default Favourit













