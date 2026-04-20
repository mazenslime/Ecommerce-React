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
        <div className={` ${width > 868 ? 'w-full ' : 'w-full  text-center'} flex flex-row   w-300 align-center bg-black text-white p-5 justify-between`}>
            <img src={imag} alt="" className={` ${width > 868 ? 'w-50' : 'w-25'}`} />
            <div className={` ${width < 868 ? 'w-full flex-col justify-start  ' : 'w-full flex-row '} items-center flex gap-2`}>
              <h3 className={` ${width > 868 ? 'w-100' : 'w-full'}`}>{title}</h3>
              <p className='w-50'>{catigoury}</p>
              <p className='w-50'>{quantity==0?price:price*quantity}</p>
              <div className='flex flex-row items-center justify-center gap-3'>
                <button className='bg-gray-500 w-8 h-8  cursor-pointer ' onClick={Add}>+</button>
                <p>{quantity}</p>
                <button className='bg-gray-500 w-8 h-8 cursor-pointer' onClick={Sub}>-</button>
                <button className='bg-red-500  font-bold px-2 py-1 h-8   cursor-pointer' onClick={()=>{Delet(ids)}}>Delet</button>
              </div>
            </div>
        </div>
  )
}

export default Orderscart