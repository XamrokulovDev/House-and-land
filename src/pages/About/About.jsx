// import img 
import img from "../../assets/about_img.svg"
const About = () => {
  return (
    <div className='about my-[10vh] container flex items-center justify-between gap-5 max-md:flex-col max-md:gap-10'>
        <div className="about_text w-[60%] max-lg:w-full">
            <h1 className="text-[#000000] text-[35px] max-xl:text-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</h1>
        </div>
        <div className="about_img w-[400px] h-[60vh] rounded-[50px] overflow-hidden max-lg:w-full">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default About