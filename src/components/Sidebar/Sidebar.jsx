import { NavLink } from "react-router-dom";
// import images 
import MyProfile from "../../assets/sidebar_img/user.svg"
import commercial from "../../assets/sidebar_img/com.svg"
import cash from "../../assets/sidebar_img/cash.svg"
import Bulleted from "../../assets/sidebar_img/Bulleted.svg"
import chat from "../../assets/sidebar_img/chat.svg"
import heart from "../../assets/sidebar_img/Heart.svg"
import Logout from "../../assets/sidebar_img/Logout.svg"

const Sidebar = () => {
  return (
    <div className='w-[25vw] h-full bg-[#002349] text-[#FFFFFF] text-[18px] max-xl:text-[14px] font-medium flex flex-col gap-2 border-t-[3px] border-[#B7B7B7] pb-[50vh] py-3'>
        <NavLink to="/MyProfil" className="flex items-center gap-3 pl-10 focus-within:bg-[#6D7E9D] py-4">
            <img src={MyProfile} alt="" className="w-[35px] h-[35px]"/>
            <h1>Mening profilim</h1>
        </NavLink>
        <NavLink to="/Elon" className="flex items-center gap-3 px-10 focus-within:bg-[#6D7E9D] py-4">
            <img src={commercial} alt="" className="w-[35px] h-[35px]"/>
            <h1>Mening e’lonlarim</h1>
        </NavLink>
        <NavLink to="/MyWallet" className="flex items-center gap-3 px-10 focus-within:bg-[#6D7E9D] py-4">
            <img src={cash} alt="" className="w-[35px] h-[35px]"/>
            <h1>Mening hamyonim</h1>
        </NavLink>
        <NavLink to="/Xizmatlar" className="flex items-center gap-3 px-10 focus-within:bg-[#6D7E9D] py-4">
            <img src={Bulleted} alt="" className="w-[35px] h-[35px]"/>
            <h1>Hizmatlar va tariflar</h1>
        </NavLink>
        <NavLink to="/Sms" className="flex items-center gap-3 px-10 focus-within:bg-[#6D7E9D] py-4">
            <img src={chat} alt="" className="w-[35px] h-[35px]"/>
            <h1>Mening xabarlarim</h1>
        </NavLink>
        <NavLink className="flex items-center gap-3 px-10 focus-within:bg-[#6D7E9D] py-4">
            <img src={heart} alt="" className="w-[35px] h-[35px]"/>
            <h1>Tanlanganlar</h1>
        </NavLink>
        <NavLink className="flex items-center gap-3 px-10 focus-within:bg-[#6D7E9D] py-4">
            <img src={Logout} alt="" className="w-[35px] h-[35px]"/>
            <h1>Chiqish</h1>
        </NavLink>
    </div>
  )
}

export default Sidebar