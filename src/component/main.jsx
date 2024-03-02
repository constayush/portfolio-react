import github from '../../public/github.svg'
import linkedin from '../../public/linked-in.svg'
import insta from '../../public/instagram.svg'
import mail from '../../public/mail.svg'
import orange from "../../public/org.png"
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import gsap from 'gsap'
import { Power3 } from 'gsap'
export default () => {



const containerRef = useRef(null)
const scoialRef = useRef(null)
const nameRef = useRef(null)


useEffect(()=>{

  gsap.from('.nameH1',{

    ease: Power3,
    y: 100,
    duration:.41,
opacity: 0
    
    })

    gsap.from('.subH1',{

      y: 100,
      duration:.41,
  opacity: 0
      
      })
      
    gsap.from('.greeting',{

      scale: 2,
      duration:.41
      })
    
})

    return (
        <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            smartphone: {
              smooth: true,
              
            },
            tablet: {
              smooth: true
            },
            touchMultiplier:3.5,
            multiplier: 1.1, 
            lerp:	0.065
          }
        }
        watch={[]}
  
        containerRef={containerRef}
  
      >

        <div data-scroll-container  data-scroll-speed='-1' ref={containerRef}  className=' w-full h-fit lg:h-[300vh] '  >





            <div data-scroll data-scroll-speed='2' data-scroll-direction='horizontal' lerp='1'  className='w-full h-screen px-[1.5rem] py-[5rem] lg:py-[8rem]  flex flex-col justify-center items-center '>

<div className='flex justify-center items-center'> <h1 ref={nameRef} className='nameH1 text-[3rem] lg:text-[4rem]'>Hi, I am Ayush Srivastava</h1></div>
               
                <p className='subH1   text-[1.5rem] lg:text-[2rem]'>a developer hailing from India<span className='greeting'>.</span></p>


            </div>









            <div lerp='0.01' className=' w-full lg:h-[100vh] flex flex-col justify-center items-center   bg-[#141314] pt-[3rem] px-[1rem]'>

                <div  data-scroll data-scroll-speed='1' data-scroll-direction='vertical' className='flex flex-col justify-center items-center  '>
                    <p  className='subH1 p-2 text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>Dreaming in HTML, crafting elegance with CSS, and sculpting experiences with JavaScript</p>
                    <p  className='subH1 p-2  text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>Currently, pursuing a Diploma in Computer Science and Engineering </p>
                    <p  className='subH1 p-2  text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>learning MERN stack wth tailwind and typescript </p>
                </div> 

                <div className='flex flex-col justify-center items-center  '>
             
               
                    
                    <div data-scroll data-scroll-speed='.51' data-scroll-direction='vertical' className='w-[2px] h-[10rem] lg:h-[12rem] bg-white'></div>
                    <p className='myr   text-[.8rem] lg:text-[1rem]   mt-[2rem]'>My Resume (pdf 108kb)</p></div>
                <div  className='networks mt-[2rem]'>
                    <div className='netbox rounded-lg w-[15rem] lg:w-[20rem]'>
                        <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://github.com/constayush"  ><img           className='socailImg'  src={github} /></a>
                        <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.linkedin.com/in/constayush/"  ><img className='socailImg'  src={linkedin} /></a>
                        <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.instagram.com/maihoonayush/" ><img  className='socailImg' src={insta} /></a>
                        <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="#" ><img  className='socailImg' src={mail} /></a>
                    </div>
                </div>

            </div>


            <div ref={scoialRef} className='footer w-full h-[100vh]  bg-[#101010] flex lg:flex-row flex-col items-center justify-center gap-10 p-14'>
                <Link className='' to='/contact'><div className='  LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center  subH1'>contact</div></Link>
                <Link className='' to='/projects'><div className=' LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center subH1'>projects</div></Link>
            </div>


        </div>


   </LocomotiveScrollProvider>
    )
}


