import { select } from 'motion/react-client';
import { useNavigate } from 'react-router-dom'
const Sidepar = ({proudact, width}) => {
    
    const navigate = useNavigate();
    let list=["ALL"];
    proudact.map((ele)=>{
        if(!list.includes(ele['category'])){
            list.push(ele['category'])
        }
    })
    function clicked(category,Width) {
        // Handle category click event
        navigate("/ALLPROUDACT",{state:{search:category}});
    }
  return (
    <div className={`${width>868?'w-1/4 justify-left pl-20':'w-full justify-center'} flex flex-row   text-black gap-5 h-full  align-center mt-50 `}>
        <h2 className='text-2xl font-bold'>Categories</h2>
        {width>868? 
        <div className='flex flex-row gap-5 justify-center align-center '>
            {list.map((ele,index)=>{
                return <button key={index} onClick={()=>clicked(ele)} className='text-lg font-bold text-black-500  cursor-pointer'>{ele}</button>
            })}
        </div> :
        <select className='bg-gray-200 p-2 rounded outline-none ' onChange={(e)=>clicked(e.target.value)}>
            {list.map((ele,index)=>{
                return <option key={index} value={ele}>{ele}</option>
            })}
        </select>
        }
    </div>
  )
}

export default Sidepar