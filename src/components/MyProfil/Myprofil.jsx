import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Myprofil = () => {
  return (
    <div>
        <div className="page_out flex items-center gap-2 max-lg:hidden">
           <div className="sidebar">
            <Sidebar />
           </div> 
        </div>
    </div>
  )
}

export default Myprofil