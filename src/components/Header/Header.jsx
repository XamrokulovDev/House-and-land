// import { useTransition } "react";
import { useTranslation } from "react-i18next";
// import images
import logo from "../../assets/navbar-logo.svg"
import header_img from "../../assets/header_img.svg"
// import icons 
import { SlArrowDown } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";

const Header = () => {
    const {t,i18n} = useTranslation();
  return (
    <>
      <div className="navbar_last flex justify-between items-center container">
          <div className="logo w-[70px] h-[100px] my-2 max-md:w-[60px] max-md:h-[60px]">
            <img src={logo} alt="Bu yerda logo bor!" className="w-full h-full object-cover"/>
          </div>
          <div className="category flex items-center gap-8 max-md:gap-3">
              <button className="flex items-center gap-5 bg-[#FBA460] text-[#FFFFFF] text-[24px] font-medium py-1 px-2 pl-8 rounded-xl max-md:text-[16px] max-md:rounded-lg max-md:pl-4 max-md:gap-3">
                  <p>{t('header.category-1')}</p>
                  <SlArrowDown className="text-lg"/>
              </button>
              <button className="flex items-center gap-5 bg-[#FBA460] text-[#FFFFFF] text-[24px] font-medium py-1 px-2 pl-8 rounded-xl max-md:text-[16px] max-md:rounded-lg max-md:pl-4 max-md:gap-3">
                  <p>{t('header.category-2')}</p>
                  <SlArrowDown className="text-lg"/>
              </button>
          </div>
      </div>
      <div className="header relative h-[80vh]">
        <div className="flex items-center gap-2 z-50 absolute top-[50%] left-[50%] translate-x-[-50%]">
        <div className="form bg-[#002349] flex items-center border border-[#FFFFFF] p-3 rounded-lg max-md:p-1.5">
            <form action="#" className="bg-[#FFFFFF] flex items-center px-3 rounded-lg">
              <div className="header_button flex items-center gap-12 border-r max-md:gap-0 max-md:px-0 max-md:py-2.5">
                <p className="text-2xl text-[#000000] max-md:text-sm">{t('header.header-1')}</p>
                <SlArrowDown className="text-md mx-3 max-md:text-[10px]"/>
              </div>
              <div className="input bg-[#FFFFFF] flex items-center px-3 rounded-lg rounded-l-none max-md:px-0">
                <input type="text" placeholder="Search..." className="outline-none w-[250px] py-4 text-lg max-md:w-[80px] max-md:py-2 max-md:text-sm max-md:px-1"/>
                <IoIosSearch className="text-2xl max-md:text-[18px]"/>
              </div>
            </form>
          </div>
          <div className="location bg-[#002349] flex items-center border border-[#FFFFFF] p-3 rounded-lg max-md:p-1.5">
              <button className="bg-[#FFFFFF] text-[#000000] flex items-center py-3 px-2 rounded-lg max-md:py-0.5 max-md:px-1">
                <MdOutlineLocationOn className="text-3xl max-md:text-[18px]"/>
                <p className="text-3xl max-md:text-[13px]">Toshkent</p>
              </button>
          </div>
        </div>
        <div className="header_img w-full h-full absolute top-0 left-0 z-40">
            <img src={header_img} alt=""/>
        </div>
      </div>
    </>
  )
}

export default Header