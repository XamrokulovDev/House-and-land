import React from 'react'

// import Sidebar
import Sidebar from '../Sidebar/Sidebar'

const Xizmatlar = () => {
  return (
    <>
        <div className="page_out flex items-center gap-2">
           <div className="sidebar flex ">
            <div className="sidebar_page max-lg:hidden">
              <Sidebar />
            </div>
                <div className="w-[75vw] profile py-[3vh] px-[5vw] max-lg:w-[100vw]">
                    <h1 className='text-[#000000] text-[40px] font-semibold pb-2 mb-[2vw] max-sm:text-[32px]'>Xizmat va tariflar</h1>
                    <h1 className='font-[500] text-[24px] mb-[3vw] '>Mening xizmatlarim</h1>

                    <div className='max-lg:text-center w-full'>
                        <div className="rounded-[10px] border border-[#9D9D9D] w-[815px] max-xl:w-full h-[165px] place-content-center text-center max-md:w-full">
                           <h1 className='font-[500] text-[15px] '>Sizda aktiv hizmatlar yo’q</h1>
                        </div>
                    </div>
                </div>
          </div>
       </div>
    </>
  )
}

export default Xizmatlar