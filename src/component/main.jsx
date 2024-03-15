import github from '../../public/github.svg'
import linkedin from '../../public/linked-in.svg'
import insta from '../../public/instagram.svg'
import mail from '../../public/mail.svg'
import orange from "../../public/orange.svg"
import htmllogo from "../../public/html.svg"
import csslogo from "../../public/css.svg"
import jslogo from "../../public/javascript.svg"
import tslogo from "../../public/typescript.svg"
import reactlogo from "../../public/react.svg"
import gsaplogo from "../../public/gsap.svg"
import tailwindlogo from "../../public/tailwind.svg"
import { LampContainer } from './ui/lamp'
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Power3, } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll';
import { current } from 'tailwindcss/colors'

export default () => {


  const containerRef = useRef(null)
  const scoialRef = useRef(null)
  const nameRef = useRef(null)
  const projectBox = useRef(null)
  const contactBox = useRef(null)
  const bar = useRef(null)
  const para = useRef(null)
  const networks = useRef(null)
  const skillsH1 = useRef(null)



  useGSAP(() => {
    const locomotive = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      },
    });

    let heading = gsap.from(nameRef.current, {
      ease: Power3,
      y: 100,
      duration: .41,
      opacity: 0

    })



    let barAnimation = gsap.from(bar.current, {

      ease: Power3,

      rotate: 360,
      duration: 50,


      repeat: -1

    })




  })




  return (<>
    <div ref={containerRef} id='top' className=' smooth-scroll w-full h-fit  top-[5rem]  bg-[#19181B] bg-dot-white/[0.2]'  >


      <div ref={nameRef} className=' w-full h-screen  flex flex-col justify-center items-center px-[1.5rem]'>

        <div data-scroll data-scroll-speed='.08'  className='flex flex-col lg:flex-row gap-[1rem] justify-center items-center'>
          <Link to='/terminal'><div ref={bar} className=''><img className='w-[50px] lg:w-[80px]' src={orange} /></div></Link>
          <h1 className='name nameH1 text-[2.5rem] lg:text-[3.5rem]'> Hi, I am Ayush Srivastava</h1>
        </div>


        <p data-scroll data-scroll-speed='.08' className='subH1 subm  text-[1.5rem] lg:text-[2rem]'>a developer hailing from India<span className='greeting'>.</span></p>


        <div ref={networks} data-scroll data-scroll-speed='.2' className='networks mt-[2rem] p-[1rem]'>
          <div className='netbox rounded-lg w-[15rem] lg:w-[15rem]'>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://github.com/constayush"  ><img className='socailImg' src={github} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.linkedin.com/in/constayush/"  ><img className='socailImg' src={linkedin} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.instagram.com/maihoonayush/" ><img className='socailImg' src={insta} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="#" ><img className='socailImg' src={mail} /></a>
          </div>
        </div>



        <p className='myr   text-[.8rem] lg:text-[1rem]   mt-[2rem]'>My Resume (pdf 108kb)</p>



      </div>

      {/* 
<div className='flex justify-center items-center'>
<h3 className='text-[1.5rem]'>My tech stack : </h3>
<img className='w-[40px]' src={htmllogo}/>
<img className='w-[40px]' src={csslogo}/>
<img className='w-[40px]' src={jslogo}/>
<img className='w-[40px]' src={tslogo}/>
<img className='w-[40px]' src={tailwindlogo}/>
<img className='w-[40px]' src={reactlogo}/>
</div> */}


      <hr className='hrf' />



      <footer ref={scoialRef} className='footer w-full h-[100vh] bggra  flex flex-col items-center justify-center gap-10 p-14'>

        <div className='flex lg:flex-row flex-col gap-10 p-14'>

          <div ref={contactBox} className=''><Link className='' to='/contact'><div className=' rounded-lg  LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center  subH1'>contact</div></Link></div>
          <div ref={projectBox} className='projectBox'><Link className='' to='/projects'><div className=' rounded-lg LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center subH1'>projects</div></Link></div>

        </div>

        <p className='text-white'>© 2024 Ayush Srivastava</p>

      </footer>


    </div>
  </>)
}


