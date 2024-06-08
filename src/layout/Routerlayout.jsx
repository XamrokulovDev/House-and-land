// import { Outlet } react-router-dom 
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const Routerlayout = () => {
  return (
    <>
    <header>
      <Navbar/>
      <div className='mx-auto w-[80vw]'>
        <Outlet/>
      </div>
    </header>
    </>
  )
}

export default Routerlayout