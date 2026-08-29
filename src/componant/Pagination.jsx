import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function Pagination({paginate,setpaginate}) {
    const num=[1,2,3,4,5,,6,7,8,9,10];
    
  return (
    <div className="flex items-center justify-between border-t text-black border-white/10 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href="#"
          className="relative inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-black hover:bg-white/10"
          onClick={()=>{setpaginate(paginate-1)}}
        >
          Previous
        </Link>
        <Link
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-black hover:bg-white/10"
          onClick={()=>{setpaginate(paginate+1)}}
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-black">
            Showing <span className="font-medium">{paginate}</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md">
            <Link
              href="#"
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0`}
              onClick={()=>{setpaginate(paginate-1)}}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="size-5" />
            </Link>
            {/*Current: "z-10 text-white focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-500 focus-visible:outline-indigo-500", Default: "inset-ring focus:outline-offset-0 text-gray-200 inset-ring-gray-700 hover:bg-white/5" */}
            {
                num.map((ele,i)=>{
                    return(
                        <Link
                        key={ele}
                        href="#"
                        aria-current="page"
                        className={`${paginate==ele?'relative font-bold inline-flex items-center px-4 py-2 ':'relative z-10 inline-flex items-center bg-[#C5A059] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'}`}
                        onClick={()=>setpaginate(ele)}
                        >
                        {ele}
                        </Link>
                    )
                })
            }
            <Link
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0"
              onClick={()=>{setpaginate(paginate+1)}}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="size-5" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
