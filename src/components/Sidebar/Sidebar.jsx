import { NavLink } from "react-router-dom";
// import images 
import MyProfile from "../../assets/sidebar_img/user.svg"
import commercial from "../../assets/sidebar_img/com.svg"

const Sidebar = () => {
  return (
    <div className='bg-[#002349] pl-10'>
        <NavLink className="flex items-center">
            <img src={MyProfile} alt="" />
            <h1>Mening profilim</h1>
        </NavLink>
        <NavLink className="flex items-center">
            <img src={commercial} alt="" />
            <h1>Mening e’lonlarim</h1>
        </NavLink>
        <NavLink className="flex items-center">
            <img src="" alt="" />
            <h1>Mening hamyonim</h1>
        </NavLink>
        <NavLink className="flex items-center">
            <img src="" alt="" />
            <h1>Hizmatlar va tariflar</h1>
        </NavLink>
        <NavLink className="flex items-center">
            <img src="" alt="" />
            <h1>Mening xabarlarim</h1>
        </NavLink>
        <NavLink className="flex items-center">
            <img src="" alt="" />
            <h1>Tanlanganlar</h1>
        </NavLink>
        <NavLink className="flex items-center">
            <img src="" alt="" />
            <h1>Chiqish</h1>
        </NavLink>
    </div>
  )
}

export default Sidebar

// salom