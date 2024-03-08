import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { useRef, useEffect } from 'react'
import {gsap, Power3} from 'gsap/dist/gsap'
import '../../src/locomotive-scroll.css'
function Contact() {
  const containerRef = useRef(null)

useEffect(()=>{

  gsap.from('.letsMakeH1',{

    ease: Power3,
    y: 100,
    duration:.41,
opacity: 0
    
    })


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


})


  return (
   
      <div ref={containerRef} className='conMain w-full h-fit flex flex-col justify-center items-center'>


        <div className='conElems conLinksSec conH1 h-[100vh] w-[95vw] md:w-[70vw]  pt-[10vmax] text-[2rem]  flex justify-center items-center md:text-[3rem] sm:ml-[2rem]'><h1 className='letsMakeH1'>Let's make<br />something great<span className='greeting'>!</span></h1></div>
<hr className='w-full h-[.1px] boder-[#616161]'/>
        <div  className='conElems lg:h-[100vh] h-fit  w-full md:w-[70vw]  pt-[10vmax] p-[2rem] flex flex-col justify-start  text-left   '>

          <h1 className='   conH1 text-[3rem] mb-[6vh] '>Contact<span className='greeting'>.</span></h1>

          <div className='flex flex-col '>

            <p className='conPara mb-[1rem]'>Thank you for taking the time to explore my portfolio. I'm passionate about what I do and always on the lookout for exciting opportunities to collaborate and create. If you have a project in mind, want to discuss potential collaborations, or just want to say hello, please don't hesitate to get in touch.</p>

            <p className='conPara mb-[1rem]'>Feel free to reach out through any platforms bellow:</p>

            <a href='' className='conLinks'>aayush@mail.com</a>

            <a target='blank' href='https://www.linkedin.com/in/constayush/' className='conLinks'>linkedin</a>

            <a  target='blank' href='https://github.com/constayush' className='conLinks'>github</a>

            <a class='aniText' target='blank' href='https://www.instagram.com/maihoonayush/' className='conLinks'>instagram</a>

          </div>

        </div>

      </div>


  )
}

export default Contact