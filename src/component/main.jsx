import github from '../../public/github.svg'
import linkedin from '../../public/linked-in.svg'
import insta from '../../public/instagram.svg'
import mail from '../../public/mail.svg'
import orange from "../../public/orange.svg"
import { useGSAP } from "@gsap/react";
import { Link , } from 'react-router-dom'
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
  const bar2 = useRef(null)
  const para = useRef(null)
  const networks = useRef(null)
  const skillsH1 = useRef(null)



  const scrollToTopAndNavigate = () => {

  };

const words= [
  {
    text: "Click",
  },
  {
    text: "on",
  },
  {
    text: "the",
  },
  {
    text: "orange",  
    className: "text-orange-500 dark:text-blue-500",
  },
  {
    text: "to",
  
  },
  {
    text: "switch",
    
  },
  {
    text: "realms",
   
  },
];

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

    let barAnimation2 = gsap.from(bar2.current, {

      ease: Power3,

      rotate: 360,
      duration: 50,


      repeat: -1

    })


  })




  return (<>
    <div ref={containerRef} id='top' className=' smooth-scroll w-full h-fit  top-[5rem]  bg-[#19181B] '  >


      <div ref={nameRef} className=' w-full h-screen  flex flex-col justify-center items-center px-[1.5rem] bg-dot-white/[.1]'>



        <div data-scroll data-scroll-speed='.08' className='flex flex-col lg:flex-row gap-[1rem] justify-center items-center'>
          <Link to='/terminal'><div ref={bar} className=''><img className='hidden lg:block w-[80px]' src={orange} /></div></Link>
          <h1 className='name nameH1 text-[2.5rem] lg:text-[3.5rem]'> Hi, I am Ayush Srivastava</h1>     
        </div>


        <p data-scroll data-scroll-speed='.08' className='subH1 subm  text-[1.5rem] lg:text-[2rem]'>a developer hailing from India<span className='greeting'>.</span></p>
      
        <div ref={networks} data-scroll data-scroll-speed='.2' className='networks mt-[2rem] p-[1rem]'>
          <div className='netbox rounded-lg w-[15rem] lg:w-[15rem]'>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://github.com/constayush"  ><img className='socailImg' src={github} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.linkedin.com/in/constayush/"  ><img className='socailImg' src={linkedin} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.instagram.com/maihoonayush/" ><img className='socailImg' src={insta} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="mailto:aayush@mail.com" ><img className='socailImg' src={mail} /></a>
          </div>
        </div>


{/* 
        <p className='myr   text-[.8rem] lg:text-[1rem]  mb-[1rem] mt-[2rem]'>My Resume (pdf 108kb)</p> */}
        <p className='subH1 subm  text-[.8rem] lg:text-[1rem] mb-[1rem] lg:mb-[0] mt-[2rem]'>"Click on the <span className='greeting'><Link to='/terminal' className='underline'>orange</Link></span> to switch realms"</p> 
{/* <TypewriterEffectSmooth className='subH1 subm  text-[1.5rem] lg:text-[1rem]' words={words}/> */}
        <Link  to='/terminal'><div ref={bar2} className=''><img className='lg:hidden  w-[80px] ' src={orange} /></div></Link>

      </div>




      <hr className='w-full h-[.1px] border-[#4a4a4a] border-dashed border-[2px] ' />

      <div className='bggra'>

   

        <div className='w-full h-screen center flex-col'>
      

          <h1 data-scroll data-scroll-speed='.03' className="projectsH1 text-[2rem] lg:text-[3rem] my-[5rem]  lg:my-[3rem]">About me<span className="text-[#ffbe47]">.</span></h1>
          <p className=' w-[80%] md:w-[60%] projectPara  mb-[1rem]'>Hey, I'm Ayush, an 18-year-old web developer fueled by curiosity and passionate about building ui interfaces. I'm all about turning ideas into digital reality and constantly seeking new challenges to tackle.</p>
          <p className=' w-[80%] md:w-[60%] projectPara  mb-[1rem]'> When I'm not coding, you'll find me exploring coffee shops, strumming on my guitar or you'll often catch me playing Valorant, Counter-Strike 2, or diving into the blocky adventures of Minecraft.</p>
          <p className=' w-[80%] md:w-[60%] projectPara  mb-[1rem]'>currently pursuing a diploma in Computer Science Engineering at Invertis University. Alongside my studies, I'm immersing myself in mastering the MERN stack <span className='text-[#ffe3b5c0]'>(MongoDB, Express.js, React, Node.js)</span></p>

          <hr data-scroll data-scroll-speed='.01' className=' w-[80%] md:w-[60%] mt-[3rem] h-[.1px] border-[#4a4a4a] border-solid border-[2px] ' />


        </div>



        <footer ref={scoialRef} className='footer w-full h-[100vh] bg-grid-white/[.03]  flex flex-col items-center justify-center gap-10 p-14'>

          <div className='flex lg:flex-row flex-col gap-10 p-14'>

            <div ref={contactBox} className=''><Link onClick={scrollToTopAndNavigate} className='' to='/contact'><div className=' rounded-lg footbg LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[9rem]  bg-[#FFF3DD] flex items-center justify-center             hover:bg-grid-small-black/[.5] hover:text-[1.4rem] '           >         <div className='foothide w-full h-full center'>contact</div> </div></Link></div>
            <div ref={projectBox} className='projectBox'><Link onClick={scrollToTopAndNavigate} className='' to='/projects'><div className=' footbg rounded-lg LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[9rem]  bg-[#FFF3DD] flex items-center justify-center  hover:bg-grid-small-black/[.5] hover:text-[1.4rem] ' ><div className='foothide w-full h-full center'>projects </div></div></Link></div>
            <div ref={projectBox} className='terminalBox'><Link onClick={scrollToTopAndNavigate} className='' to='/terminal'><div className=' footbg rounded-lg LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[9rem]  bg-[#FFF3DD] flex items-center justify-center hover:bg-grid-small-black/[.5] hover:text-[1.4rem] ' ><div className='foothide w-full h-full center'>termianl </div></div></Link></div>
          </div>

          <p className='text-white'>© 2024 Ayush Srivastava</p>

        </footer>
      </div>

    </div>
  </>)
}


