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
const skillsH1 =useRef(null)



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
          touchMultiplier: .8,
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


    // let projectBoxAnimation = gsap.from(projectBox.current, {
    //   scrollTrigger: {
    //     trigger: projectBox.current,
    //     scrub: true,
    //   },
    //   ease: Power3,
    //   x: "200px",
    //   duration: .41,
    //   opacity: 0

    // })


    // let contactBoxAnimation = gsap.from(contactBox.current, {
    //   scrollTrigger: {
    //     trigger: contactBox.current,
    //     scrub: true,
    //   },
    //   ease: Power3,
    //   x: "-200px",
    //   duration: .41,
    //   opacity: 0

    // })

    let barAnimation = gsap.from(bar.current, {
      scrollTrigger: {
        trigger: bar.current,
        scrub: true,
      },
      ease: Power3,

      rotate: 360,
      duration: .41,
      opacity: 0

    })


    let paraAnimation = gsap.from(para.current, {
      scrollTrigger: {
        trigger: para.current,
        scrub: true,
      },
      ease: Power3,

      y: 10,
      duration: .41,


    })

    let networkAnimation = gsap.from(networks.current, {
      scrollTrigger: {
        trigger: networks.current,
        scrub: true,
      },
      ease: Power3,

      y: 10,
      duration: .41,


    })

    let skillsH1Animation = gsap.to(skillsH1.current, {
      scrollTrigger: {
        trigger: skillsH1.current,
        scrub: true,
      },
      ease: Power3,

    
      y: 50,
      duration: .41,


    })

  })












  return (

    <div ref={containerRef} id='top' className='smooth-scroll w-full h-fit lg:h-fit '  >





      <div ref={nameRef} className='w-full h-screen px-[1.5rem] py-[5rem] lg:py-[8rem]  flex flex-col justify-center items-center '>

        <div data-scroll  className='flex justify-center items-center'> <h1 className='nameH1 text-[3rem] lg:text-[4rem]'>Hi, I am Ayush Srivastava</h1></div>

        <p className='subH1   text-[1.5rem] lg:text-[2rem]'>a developer hailing from India<span className='greeting'>.</span></p>


      </div>









      <div lerp='0.01' className=' w-full lg:h-[100vh] flex flex-col justify-center items-center   bg-[#141314] pt-[3rem] px-[1rem]'>

        <div ref={para} className='flex flex-col justify-center items-center  '>
          <p className='subH1 p-2 text-[.8rem] text-center lg:text-[1.1rem] mb-[]'>Dreaming in HTML, crafting elegance with CSS, and sculpting experiences with JavaScript
<br/>Currently, pursuing a Diploma in Computer Science and Engineering <br/>
      learning MERN stack wth tailwind and typescript </p>
          <p className='subH1 p-2  text-[.8rem] lg:text-[1.1rem] mb-[.7rem]'>and also i love oranges  </p>
        </div>

        <div className='flex flex-col justify-center items-center  '>



          <div ref={bar} className=''><img className='w-[80px]' src={orange} /></div>
          <p className='myr   text-[.8rem] lg:text-[1rem]   mt-[2rem]'>My Resume (pdf 108kb)</p></div>
        <div ref={networks} className='networks mt-[2rem] p-[1rem]'>
          <div className='netbox rounded-lg w-[15rem] lg:w-[20rem]'>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://github.com/constayush"  ><img className='socailImg' src={github} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.linkedin.com/in/constayush/"  ><img className='socailImg' src={linkedin} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="https://www.instagram.com/maihoonayush/" ><img className='socailImg' src={insta} /></a>
            <a target='_blank' class="w-[5rem] lg:w-[4rem] icon " href="#" ><img className='socailImg' src={mail} /></a>
          </div>
        </div>

      </div>








      <div className='w-full center flex-col bg-[#0d0d0d] '>
        <h1 ref={skillsH1} className='w-fit h-[100vh] stack flex justify-center items-start pt-[15rem] nameH1 text-[2rem] lg:text-[3rem] '> My Array of Skills<span className='greeting'>.</span></h1>


        <div className='h-[100vh] stack  center   rounded-lg'>
          <div className='center bg-[#f9f3e6] w-[20rem] lg:w-[30rem] h-[25rem] rounded-lg flex-col gap-5 p-[1rem]'>
            <img className='w-[200px]  h-[100px]' src={htmllogo} />
            <h3 className='text-[2rem] skillsH1'>HTML</h3>
          </div>
        </div>


        <div className='h-[100vh] stack  center   rounded-lg'>
          <div className='center glass w-[20rem] lg:w-[30rem] h-[25rem] rounded-lg flex-col gap-5 p-[1rem]'>
            <img className='w-[200px] h-[100px]' src={csslogo} />
            <h3 className='text-[2rem] skillsH1'>CSS</h3>
          </div>
        </div>


        <div className='h-[100vh] stack  center  rounded-lg'>
          <div className='center glass w-[20rem] lg:w-[30rem] h-[25rem] rounded-lg flex-col gap-5 p-[1rem]'>
            <img className='w-[200px] h-[100px]' src={jslogo} />
            <h3 className='text-[2rem] skillsH1'>JavaScript</h3>
          </div>
        </div>


        <div className='h-[100vh] stack  center  rounded-lg'>
          <div className='center glass w-[20rem] lg:w-[30rem] h-[25rem] rounded-lg flex-col gap-5 p-[1rem]'>
            <img className='w-[200px] h-[100px]' src={tslogo} />
            <h3 className='text-[2rem] skillsH1'>TypeScript</h3>
          </div>
        </div>


        <div className='h-[100vh] stack  center  rounded-lg'>
          <div className='center glass w-[20rem] lg:w-[30rem] h-[25rem] rounded-lg flex-col gap-5 p-[1rem]'>
            <img className='w-[200px] h-[100px]' src={tailwindlogo} />
            <h3 className='text-[2rem] skillsH1'>Tailwind</h3>
          </div>
        </div>


        <div className='h-[100vh] stack  center  rounded-lg'>
          <div className='center glass w-[20rem] lg:w-[30rem] h-[25rem] rounded-lg flex-col gap-5 p-[1rem]'>
            <img className='w-[200px] h-[100px]' src={reactlogo} />
            <h3 className='text-[2rem] skillsH1'>React JS</h3>
          </div>
        </div>


        <div className='h-[100vh] stack  center  rounded-lg'>
          <div className='center glass w-[20rem] lg:w-[30rem] h-[25rem] rounded-lg flex-col gap-5 p-[1rem]'>
            <img className='w-[200px] h-[100px]' src={gsaplogo} />
            <h3 className='text-[2rem] skillsH1'>GSAP</h3>
          </div>
        </div>


      </div>







      <footer ref={scoialRef} className='footer w-full h-fit lg:h-[100vh]  bg-[#0d0d0d] flex lg:flex-row flex-col items-center justify-center gap-10 p-14'>
        <div ref={contactBox} className=''><Link className='' to='/contact'><div className='  LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center  subH1'>contact</div></Link></div>
        <div ref={projectBox} className='projectBox'><Link className='' to='/projects'><div className=' LINKTO lg:w-[20rem] lg:h-[20rem] w-[14rem] h-[14rem]  bg-[#FFF3DD] flex items-center justify-center subH1'>projects</div></Link></div>
     
{/* /     <a href='#top'>back to top</a> */}
     
      </footer>


















    </div>


  )
}


