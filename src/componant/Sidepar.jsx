import { useNavigate } from 'react-router-dom'
const Sidepar = ({proudact}) => {
    console.log(proudact);
    const navigate = useNavigate();
    let list=["ALL"];
    proudact.map((ele)=>{
        if(!list.includes(ele['category'])){
            list.push(ele['category'])
        }
    })
    function clicked(category) {
        // Handle category click event
        console.log("done");
        navigate("/ALLPROUDACT",{state:{search:category}});
    }
  return (
    <div className=' flex flex-row   text-black gap-5 h-full justify-left align-center mt-50 pl-20'>
        <h2 className='text-2xl font-bold'>Categories</h2>
        <div className='flex flex-row gap-5 justify-center align-center '>
            {list.map((ele,index)=>{
                return <button key={index} onClick={()=>clicked(ele)} className='text-lg font-bold text-black-500  cursor-pointer'>{ele}</button>
            })}
        </div> 
    </div>
  )
}

export default Sidepar