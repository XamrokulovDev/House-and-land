import { useState } from 'react';
// import sidebar page 
import Sidebar from '../Sidebar/Sidebar'
// import images 
import copy from "../../assets/sidebar_img/Copy.svg"
import cash from "../../assets/sidebar_img/cash of.svg"
import payme from "../../assets/sidebar_img/payme.png"
import click from "../../assets/sidebar_img/click.png"
import Folder from "../../assets/sidebar_img/Folder.svg"

const MyWallet = () => {
    const [state,setState] = useState(0);
    // ID ni copy qilish uchun funksiya
    const handleCopyText = () => {
      const textToCopy = document.getElementById('profile-id').innerText;
      navigator.clipboard.writeText(textToCopy)
    };
  return (
    <div className='flex gap-2'>
        <div className="side_bar max-lg:hidden">
            <Sidebar />
        </div>
        <div className="wallet w-[75vw] py-[3vh] px-[5vw] max-md:w-[96vw] max-lg:w-[100vw] max-md:px-5">
            <div className="my_text flex items-center gap-5 max-md:flex-col max-md:items-start max-md:gap-2">
                <h1 className='text-[#000000] text-[40px] font-semibold pb-2 max-sm:text-[30px]'>Mening profilim</h1>
                <div className='flex items-center border border-[#000000] pl-2 rounded-lg overflow-hidden'>
                  <h1 className='text-lg pr-12' id='profile-id'>ID: 446789</h1>
                  <div className="copy_img bg-[#9D9D9D] cursor-pointer relative" onClick={handleCopyText}>
                    <img src={copy} alt="Copy" className='bg-[#9D9D9D] p-1.5'/>
                  </div>
                </div>
            </div>
            <div className="my_card w-[300px] max-md:w-full max-md:mt-8 flex flex-col gap-2 p-5 border-2 border-[#C0C0C0] rounded-[35px]">
                <div className="balans flex items-end gap-3">
                    <div className="img w-[32px] h-[32px]">
                        <img src={cash} alt="" />
                    </div>
                    <h1 className='text-[18px] text-[#000000]'>Balans</h1>
                </div>
                <h1 className='text-[24px] text-[#FBA460] font-semibold ml-10'>{state} so’m</h1>
            </div>
            <div className="hamyon text-[#000000] text-[40px] font-semibold pt-8 pb-10 max-sm:text-[30px]">
                <h1>Balans To’ldirish</h1>
                <div className="cards flex items-center gap-2">
                    <button className='border border-[#B7B7B7] py-2 w-[250px] flex justify-center rounded-xl'>
                        <img src={payme} alt="" className='w-[130px] h-[38px]'/>
                    </button>
                    <button className='border border-[#B7B7B7] py-2 w-[250px] flex justify-center rounded-xl'>
                        <img src={click} alt="" className='w-[110px] h-[38px]'/>
                    </button>
                </div>
            </div>
            <div className="summa flex items-center justify-between gap-4 max-md:flex-col">
                <div className='border border-[#B7B7B7] py-1.5 rounded-md w-[420px] max-md:w-full'>
                    <input type="text" placeholder='Summa' className='outline-none px-3 w-full'/>
                </div>
                <div className="shartlar w-[500px] flex items-center gap-3 max-md:justify-start max-md:w-full">
                  <input type="checkbox" className='cursor-pointer w-[20px] h-[20px]'/>
                  <h1  className='text-[#000000] text-[12px]'>Men <a href="" className='text-[#FBA460]'>Foydalanish shartini </a>qabul qilaman</h1>
                </div>
                <button className='w-[250px] bg-[#FBA460] text-[#FFFFFF] py-2 rounded-md max-md:w-full max-md:mt-10'>To’ldirish</button>
            </div>
            <div className="story mt-20 flex items-center justify-between max-md:flex-col max-md:items-start">
                <h1 className='text-[40px] text-[#000000] font-semibold max-md:mb-5'>Tarix</h1>
                <div className="info flex items-center gap-3 max-md:flex-col max-md:items-start max-md:w-full">
                    <label for="" className='text-[13px]'>В период от</label>
                    <div className="input w-[130px] flex items-center justify-between border border-[#B7B7B7] pr-3 py-3 rounded-xl max-md:rounded-md max-md:w-full">
                        <input type="text" placeholder='dd/mm/yyyy' className='w-[70%] h-full text-[12px] outline-none pl-3'/>
                        <img src={Folder} alt="" className='w-[12%] max-md:hidden'/>
                    </div>
                    <label for="" className='text-[13px]'>gacha</label>
                    <div className="input w-[130px] flex items-center justify-between border border-[#B7B7B7] pr-3 py-3 rounded-xl max-md:rounded-md max-md:w-full">
                        <input type="text" placeholder='dd/mm/yyyy' className='w-[70%] h-full text-[12px] outline-none pl-3'/>
                        <img src={Folder} alt="" className='w-[12%] max-md:hidden'/>
                    </div>
                    <button className='text-[11px] border border-[#B7B7B7] py-3 w-[130px] max-md:w-[180px] rounded-xl max-md:rounded-md max-md:mt-2 max-md:py-2'>Qayta o’rnatish</button>
                </div>
            </div>
            <h1 className='text-center text-[15px] text-[#000000] font-semibold mt-28'>Bo’sh</h1>
        </div>
    </div>
  )
}

export default MyWallet