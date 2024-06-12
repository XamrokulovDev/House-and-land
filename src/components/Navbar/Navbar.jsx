import { NavLink, useLocation } from 'react-router-dom';
// import Translation 
import Translation from '../Translation/Translation'; 
// import useTranslation
import { useTranslation } from 'react-i18next';
// import icons 
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCreditCard2Front } from "react-icons/bs";
import { SlArrowLeftCircle } from "react-icons/sl";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <>
      {(location.pathname === '/MyProfil' || location.pathname === '/MyWallet' || location.pathname === '/Xizmatlar' || location.pathname === '/Elon' || location.pathname === '/Sms') ? (
        <nav className='navbar-2 bg-[#002349] py-7 max-md:py-5 flex items-center'>
          <NavLink to="/">
            <div className="w-[25vw] max-lg:w-[30vw] flex items-center gap-2 px-10 max-md:px-0 max-md:pl-5">
              <SlArrowLeftCircle className='text-[#FBA460] text-3xl'/>
              <h1 className='text-[#FBA460] text-xl max-lg:text-[15px] max-sm:hidden'>Saytga qaytish</h1>
            </div>
          </NavLink>
          <div className="max-lg:w-[80vw] w-[75vw] max-lg:w-[70vw] px-[5vw] max-md:pr-5 mx-auto flex justify-between max-md:justify-end items-center">
            <div className="translation max-md:hidden">
              <Translation />
            </div>
            <div className="Profil flex items-center gap-3">
                <div className="balans flex items-center gap-2 max-lg:hidden mx-10">
                  <BsCreditCard2Front className='text-[#FBA460] text-2xl' />
                  <h1 className='text-[#FBA460] text-xl'>Balans: 0<span></span></h1>
                </div>
              <button className='text-[#FFFFFF] text-md bg-[#FBA460] py-1 px-3 rounded-xl font-medium max-md:text-[12px] max-md:rounded-lg'>
                {t('header.nav-button')}
              </button>
              <NavLink to="/MyProfil">
                <div className='flex items-center gap-1'>
                  <FaRegCircleUser className='text-[#FBA460] text-4xl max-md:text-lg' />
                  <span className='text-[#FFFFFF] text-lg max-md:text-sm'>{t('header.profil')}</span>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
      ) : (
        <nav className='navbar-1 bg-[#002349] py-7 max-md:py-5 flex items-center'>
          <div className="container flex justify-between items-center">
            <div className="translation">
              <Translation />
            </div>
            <div className="Profil flex items-center gap-3">
              <button className='text-[#FFFFFF] text-md bg-[#FBA460] py-1 px-3 rounded-xl font-medium max-md:text-sm max-md:rounded-lg'>
                {t('header.nav-button')}
              </button>
              <NavLink to="/MyProfil">
                <div className='flex items-center gap-1'>
                  <FaRegCircleUser className='text-[#FBA460] text-4xl max-md:text-lg' />
                  <span className='text-[#FFFFFF] text-lg max-md:text-sm'>{t('header.profil')}</span>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
