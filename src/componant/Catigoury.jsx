import { Link } from 'react-router-dom'
import React from 'react'

const Catigoury = ({pro}) => {
    let catigoury=[];
    
    pro.map((ele)=>{
        console.log(ele['category'])
        if(!catigoury.includes(ele['category'])){
            catigoury.push(ele['category'])
        }
    })
    let img=[]
    pro.map((ele)=>{
            if(!img.includes(ele['image'])){
                let a=[]
                    a.push(ele['image'])
                    a.push(ele['category'])
                img.push(a)
        }
    })
    console.log(img);
        
  return (
    <>
    <div className='w-full  flex flex-row items-center justify-between gap-2 px-10 py-2 pt-20'>
        <div className='w-1/2 h-full flex flex-col   gap-2'>
            <h2 className='font-bold text-2xl'>shop By catigoury</h2>
            <p className='text-sm'>Discover our wide range of products organized by category</p>
        </div>
        <Link to="/ALLPROUDACT" className=' text-blue-500   rounded-lg '>
            View All Products <i class="fa-solid fa-arrow-right"></i>
        </Link>
    </div>
    <div className={`relative w-full h-full py-20 px-10 grid md:grid-cols-${4} gap-10 justify-center`}>
        <div className={`w-full h-50 bg-[url(${img[0]||'/default-image.jpg'}))] bg-blue-500 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-700 cursor-pointer hover:bg-gray-300 transition duration-300`}>
            {catigoury[0]}
        </div>
        <div className={`w-full h-50 bg-[url(${img[1]||'/default-image.jpg'}))] bg-blue-500  rounded-lg flex items-center justify-center text-2xl font-bold text-gray-700 cursor-pointer hover:bg-gray-300 transition duration-300`}>
            {catigoury[1]}

        </div>
        <div className='w-full h-50 rounded-lg flex flex-col gap-5 items-center justify-center text-2xl font-bold text-gray-700 cursor-pointer '>
            <div className={`w-full h-25 bg-[url(${img[2]||'/default-image.jpg'}))] bg-blue-500 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-700 cursor-pointer hover:bg-gray-300 transition duration-300`}>
                {catigoury[2]}
            </div>
            <div className={`w-full h-25 bg-[url(${img[3]||'/default-image.jpg'}))] bg-blue-500 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-700 cursor-pointer hover:bg-gray-300 transition duration-300`}>
                {catigoury[3]}
            </div>
        </div>
        <div className={`w-full h-50 bg-[url(${img[4]||'/default-image.jpg'}))] bg-blue-500 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-700 cursor-pointer hover:bg-gray-300 transition duration-300`}>
            {catigoury[4]}
        </div>

    </div>
    </>
  )
}

export default Catigoury