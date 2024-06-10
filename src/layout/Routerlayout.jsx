// import { Outlet } react-router-dom 
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Routerlayout = () => {
  return (
    <>
    <header>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </header>
    </>
  )
}

export default Routerlayout