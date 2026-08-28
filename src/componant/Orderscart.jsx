import { image } from 'motion/react-client';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

const Orderscart = ({setorders,orders,ids,imag,title,catigoury,price,quatity,setcheack,width}) => {
    const [quantity,setquantity]=useState(1)
    let list=[];
    let prices=0  
    useEffect(()=>{
        setquantity(quatity)
    },[quatity])
    function cheackouts(){    
            prices=0
            orders.map((ele)=>{
                let quan=(ele['price']*ele['quntity'])
                quan=Number(quan)
                prices+=quan
    })
    }
    useEffect(()=>{
        cheackouts()
        setcheack(prices)
    },[orders,quantity])
    function Delet(id){
        orders.map((ele)=>{
            if(ele['id']===id){
            }else{
                list.push(ele)
            }
        })
        setorders([...list])
    }
        function Add(){
            setquantity(quantity+1)
            orders.find((ele)=>{
                if(ele['id']===ids){
                    ele['quntity']=quantity+1
                }
            })
            
            
        }
        function Sub(){
            if(quantity==1){
                setquantity(1)
            }else{
                setquantity(quantity-1)
                orders.find((ele)=>{
                if(ele['id']===ids){
                    ele['quntity']=quantity-1
                }
                })
                
            }
        }
  return (
        <div className={`${width>600?' w-3/4 px-4 ':'w-full'} flex flex-row border-b-1 border-gray-500 py-2 `}>
            <div className={`${width>600?' w-1/4':'w-1/2'} `}>
                <img src={imag} alt="" className={`w-full`} />
            </div>
            <div className={`${width>600?' w-1/4':'w-1/2'}  grid grid-row-2 content-between px-4`}>
                <div className={`w-full   ${width>600?'flex justify-between items-center':'flex flex-col'}   `} >
                    <div>
                       <h3 className={` ${width > 868 ? 'w-100' : 'w-full'}`}>{title}</h3>
                        <p className='w-50'>{catigoury}</p>
                    </div>
                    <div className={`${width>600?'w-full text-center':'text-left'} `}>
                        <p className='w-full  text-black'>{quantity==0?price:price*quantity}</p>
                    </div>
                </div>
                <div className='flex  justify-between '>
                    <div className='w-fit h-fit flex flex-row gap-2  border-1 border-gray-500 px-2 py-1  items-center '>
                        <button className=' w-8 h-8  cursor-pointer rounded-lg ' onClick={Add}>+</button>
                        <p>{quantity}</p>
                        <button className=' w-8 h-8 cursor-pointer rounded-lg' onClick={Sub}>-</button>
                    </div>
                    <div className='w-full '>
                        <button className='w-full text-end px-2 py-1 h-8 cursor-pointer' onClick={()=>{Delet(ids)}}>Delet</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Orderscart