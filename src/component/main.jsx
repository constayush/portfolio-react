import github from '../../public/github.svg'
import linkedin from '../../public/linked-in.svg'
import insta from '../../public/instagram.svg'
import mail from '../../public/mail.svg'
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import '../../src/locomotive-scoll.css'
export default () => {

gsap.registerPlugin(ScrollTrigger)

    const containerRef = useRef(null)
    const scoialRef = useRef();

    useEffect(() => {
        const el = scoialRef.current;
        gsap.fromTo(el, {translate: "0px 4rem"}, {
            translate: "none", duration: 3, scrollTrigger: {
                trigger: el,
                scrub:true
            }
        })
    }, [])
    return (
<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      
    }
  }
  watch={
    [
      
      
      
    ]
  }
  containerRef={containerRef}
>

        <div data-scroll-container ref={containerRef}  className=' w-full h-fit lg:h-[300vh] '  >





            <div data-scroll data-scroll-speed='2' data-scroll-direction='horizontal'   className='w-full h-screen px-[1.5rem] py-[5rem] lg:py-[8rem]  flex flex-col justify-center items-center '>


                <h1 className='nameH1 text-[3rem] lg:text-[4rem]'>Hi, I am Ayush Srivastava</h1>
                <p className='subH1   text-[1.5rem] lg:text-[2rem]'>a developer hailing from India<span className='greeting'>.</span></p>


            </div>









            <div  className=' w-full lg:h-[100vh] flex flex-col justify-center items-center   bg-[#141314] pt-[7rem] p-x-14'>

                <div className='flex flex-col justify-center items-center  '>
                    <p  className='subH1 p-2 text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>Dreaming in HTML, crafting elegance with CSS, and sculpting experiences with JavaScript</p>
                    <p  className='subH1 p-2  text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>Currently, pursuing a Diploma in Computer Science and Engineering </p>
                    <p  className='subH1 p-2  text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>learning MERN stack wth tailwind and typescript </p>
                </div> 

                <div className='flex flex-col justify-center items-center  '>
             
               
                    
                    <div className='w-[2px] h-[10rem] lg:h-[15rem] bg-white'></div>
                    <p className='myr   text-[.8rem] lg:text-[1rem]   mt-[2rem]'>My Resume (pdf 108kb)</p></div>
                <div ref={scoialRef} className='networks mt-[2rem]'>
                    <div className='netbox rounded-lg w-[15rem] lg:w-[20rem]'>
                        <a  class="w-[5rem] lg:w-[4rem] icon " href="#"  ><img src={github} /></a>
                        <a  class="w-[5rem] lg:w-[4rem] icon " href="#"  ><img src={linkedin} /></a>
                        <a  class="w-[5rem] lg:w-[4rem] icon " href="#" ><img src={insta} /></a>
                        <a  class="w-[5rem] lg:w-[4rem] icon " href="#" ><img src={mail} /></a>
                    </div>
                </div>

            </div>


            <div   className=' w-full lg:h-[100vh]  h-[100vh]  bg-[#101010] flex lg:flex-row flex-col items-center justify-center gap-10 p-14'>
                <Link   className=' LINKTO' to='/projects'><div className='lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center subH1'>projects</div></Link>
                <Link   className=' LINKTO' to='/contact'><div className=' lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center  subH1'>contact</div></Link>
            </div>


        </div>
</LocomotiveScrollProvider>
    )
}


