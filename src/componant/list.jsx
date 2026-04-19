export default function List({width, open, setOpen, setscrol}) {
    if(width < 868){
        return(
            <i class={`fa-solid fa-list  fixed top-5 left-10 z-200 text-xl font-bold  cursor-pointer ${open?'text-white':'text-black'} `} onClick={() => setOpen(!open)}></i>
        )
    }else{
        return(null)
    }
}
