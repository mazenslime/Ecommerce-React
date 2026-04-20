import React, { useState } from 'react'
import Pagecart from './Pagecart';
import { useNavigate } from 'react-router-dom';
const BButton = ({orders, defs, proudact,width}) => {
    
    
    
    const [alert,setalert]=useState(false)
    const navigation=useNavigate()
    function Alertcomponant(){
    if(alert===true){
         alert("done add ")
        // return(
        //     // <div className='sticky top-5 w-full  cursor-pointer px-2 py-0.5 rounded bg-blue-800 text-white text-xl font-semibold  h-8'>done add</div>
        // )
    }
}
      function addtocart(id,title,catigoury,price,photo){
          if(orders.length===0){
              
              
              let data={id:id,title:title,catigoury:catigoury,price:price,photo:proudact['images'][0],quntity:1}
              
              defs([...orders,data])
              navigation('/Pagecart')
          }else{
          
          orders.find((ele)=>{
            if(ele['id']==id){
              
              orders.find((ele)=>{
                if(ele['id']===id){
                    ele['quntity']=ele['quntity']+1
              }})
              
            //   setalert(true)
            Alertcomponant()
              return true
            }else{
              
              
              let data={id:id,title:title,catigoury:catigoury,price:price,photo:`${proudact['images'][0]}`,quntity:1}
              
              
              
              defs([...orders,data])
              navigation('/Pagecart')}
              return false
            })
            }
          }                                                                                                                                                        
       
  return (
      <button className={`${width>868?'w-1/2  ':'w-3/4'} cursor-pointer px-4 py-0.5 rounded bg-black text-white text-md font-italic   h-8`} onClick={()=>{addtocart(proudact['id'],proudact['title'],proudact['category'],proudact['price']),`${proudact['images'][0]}`}} attid={proudact['id']}>buy now</button>
  )
}
export default BButton