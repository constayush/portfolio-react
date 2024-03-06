import github from '../../public/github.svg'
import linkedin from '../../public/linked-in.svg'
import insta from '../../public/instagram.svg'
import mail from '../../public/mail.svg'
import orange from "../../public/orange.svg"
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Power3, } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll';
export default () => {


  const containerRef = useRef(null)
  const scoialRef = useRef(null)
  const nameRef = useRef(null)
  const projectBox = useRef(null)
  const contactBox = useRef(null)
  const bar = useRef(null)
  const para = useRef(null)
  const networks = useRef(null)



    
     useGSAP( () => {
  const locomotive = new LocomotiveScroll();
  
  let heading =  gsap.from(nameRef.current, {

      ease: Power3,
      y: 100,
      duration: .41,
      opacity: 0

    })


 let projectBoxAnimation =    gsap.from(projectBox.current, {
      scrollTrigger: {
        trigger: projectBox.current,
        scrub: true,
      },
      ease: Power3,
      x: "200px",
      duration: .41,
      opacity: 0

    })


    let contactBoxAnimation =     gsap.from(contactBox.current, {
      scrollTrigger: {
        trigger: contactBox.current,
        scrub: true,
      },
      ease: Power3,
      x: "-200px",
      duration: .41,
      opacity: 0

    })

    let barAnimation =    gsap.from(bar.current, {
      scrollTrigger: {
        trigger: bar.current,
        scrub: true,
      },
      ease: Power3,
      
      rotate: 360,
      duration: .41,
      opacity: 0

    })
 

    let paraAnimation =     gsap.from(para.current, {
      scrollTrigger: {
        trigger: para.current,
        scrub: true,
      },
      ease: Power3,
      
     y:-100,
      duration: .41,
    

    })

    let networkAnimation =     gsap.from(networks.current, {
      scrollTrigger: {
        trigger: networks.current,
        scrub: true,
      },
      ease: Power3,
      
     y:50,
      duration: .41,
    

    })

  

  })
  











  return (

    <div ref={containerRef} className='smooth-scroll w-full h-fit lg:h-[300vh] '  >





      <div ref={nameRef} className='w-full h-screen px-[1.5rem] py-[5rem] lg:py-[8rem]  flex flex-col justify-center items-center '>

        <div className='flex justify-center items-center'> <h1 className='nameH1 text-[3rem] lg:text-[4rem]'>Hi, I am Ayush Srivastava</h1></div>

        <p className='subH1   text-[1.5rem] lg:text-[2rem]'>a developer hailing from India<span className='greeting'>.</span></p>


      </div>









      <div lerp='0.01' className=' w-full lg:h-[100vh] flex flex-col justify-center items-center   bg-[#141314] pt-[3rem] px-[1rem]'>

        <div ref={para} className='flex flex-col justify-center items-center  '>
          <p className='subH1 p-2 text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>Dreaming in HTML, crafting elegance with CSS, and sculpting experiences with JavaScript</p>
          <p className='subH1 p-2  text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>Currently, pursuing a Diploma in Computer Science and Engineering </p>
          <p className='subH1 p-2  text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>learning MERN stack wth tailwind and typescript </p>
        </div>

        <div className='flex flex-col justify-center items-center  '>



          <div ref={bar} className=''><img className='w-[80px]' src={orange}/></div>
          <p className='myr   text-[.8rem] lg:text-[1rem]   mt-[2rem]'>My Resume (pdf 108kb)</p></div>
        <div ref={networks} className='networks mt-[2rem]'>
          <div className='netbox rounded-lg w-[15rem] lg:w-[20rem]'>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://github.com/constayush"  ><img className='socailImg' src={github} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.linkedin.com/in/constayush/"  ><img className='socailImg' src={linkedin} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.instagram.com/maihoonayush/" ><img className='socailImg' src={insta} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="#" ><img className='socailImg' src={mail} /></a>
          </div>
        </div>

      </div>


      <div ref={scoialRef} className='footer w-full h-[100vh]  bg-[#101010] flex lg:flex-row flex-col items-center justify-center gap-10 p-14'>
        <div ref={contactBox} className=''><Link className='' to='/contact'><div className='  LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center  subH1'>contact</div></Link></div>
        <div ref={projectBox} className='projectBox'><Link className='' to='/projects'><div className=' LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center subH1'>projects</div></Link></div>
      </div>


    </div>


  )
}


