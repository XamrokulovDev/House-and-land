import React from 'react'
// Icons
import { AiOutlineMessage } from "react-icons/ai";

// import sidebar
import Sidebar from '../Sidebar/Sidebar'
const Sms = () => {

   
  return (

    <>
          <div className="page_out flex items-center gap-2">
           <div className="sidebar flex ">
            <div className="sidebar_page max-lg:hidden">
              <Sidebar />
            </div>
            <div className='flex max-lg:flex-col text-center  '>
                <div className='bg-[#EEEEEE] pt-5 max-lg:hidden w-[20vw]'>
                   <h1 className='text-[14px] font-[400] text-[#000000] max-xl:text-[11px]'>Siz suhbatni boshlamagansiz</h1>
                </div>
               
                   <h1 className='hidden max-lg:block max-lg:text-xl font-[600]  text-center mt-5'>Siz suhbatni boshlamagansiz</h1>
               
                <div className="w-full">
                   <div className='flex flex-col h-full items-center gap-2 w-[58vw] max-lg:h-[50vh] max-lg:w-[100vw] place-content-center '>
                      <AiOutlineMessage className='w-[50px] h-[50px] text-[#FBA460] '/>
                      <button className='text-[#FBA460]'>Chatni tanglang</button>
                   </div>
                </div>
            </div>
          </div>
       </div>
    </>
  )
}

export default Sms