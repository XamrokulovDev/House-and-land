// import images 
import footer_img from "../../assets/footer_img.svg"
// improt icons 
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className='bg-[#002349] py-[10vh]'>
        <div className="container flex items-start justify-between gap-[20px] max-md:flex-col max-lg:gap-[23vw]">
            <div className="footer_icons flex flex-col items-center max-md:items-start gap-[50px] max-md:mb-[10vh] max-md:w-full">
                <div className="logo w-[120px] h-[120px] overflow-hidden rounded-[50%]">
                    <img src={footer_img} alt="" className=""/>
                </div>
                <div className="social_network flex items-center gap-10 max-md:gap-4 text-[#FFFFFF]">
                    <PiInstagramLogoThin  className="text-5xl p-1"/>
                    <FaTelegramPlane className="text-4xl rounded-[50%] border p-1"/>
                    <FaFacebookF className="text-4xl rounded-[50%] border p-1"/>
                </div>
            </div>
            <div className="footer_link flex items-center justify-between gap-[8vw] max-md:gap-[20vw] max-lg:flex-col max-xl:w-full">
                <div className="link flex flex-col gap-5 text-[16px] text-[#FFFFFF] max-xl:w-full min-lg:text-[12px]">
                    <a href="#" className="text-xl font-semibold pb-5">Foydalanuvchilarga</a>
                    <a href="#">Biz haqimizda</a>
                    <a href="#">Saytdan foydalanish qoidalari </a>
                    <a href="#">Xizmatdan foydalanish qoidalari</a>
                    <a href="#">Blog</a>
                </div>
                <div className="link flex flex-col gap-5 text-[16px] text-[#FFFFFF] max-xl:w-full">
                    <a href="#" className="text-xl font-semibold pb-5">Foydalanuvchilarga</a>
                    <a href="#">Biz haqimizda</a>
                    <a href="#">Saytdan foydalanish qoidalari </a>
                    <a href="#">Xizmatdan foydalanish qoidalari</a>
                    <a href="#">Blog</a>
                </div>
                <div className="link flex flex-col text-[16px] gap-5 text-[#FFFFFF] max-xl:w-full">
                    <div className="footer_location flex items-center gap-4">
                        <TfiLocationPin className="text-2xl"/>
                        <a href="#">Yunsabod</a>
                    </div>
                    <div className="phone flex items-center gap-4">
                        <FiPhone className="text-2xl"/>
                        <a href="+998 90 030 24 23">+998 90 030 24 23</a>
                    </div>
                    <div className="email flex items-center gap-4">
                        <TfiEmail className="text-2xl"/>
                        <a href="#">Info@uyvayer.uz</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer