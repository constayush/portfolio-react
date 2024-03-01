import React from 'react'
import { useRef, useEffect } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import '../../src/locomotive-scoll.css'
function Contact() {
  const containerRef = useRef(null)




  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,

          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
          }
        }
      }
      watch={[]}

      containerRef={containerRef}

    >
      <div data-scroll-container ref={containerRef} className='conMain w-full h-fit flex flex-col justify-center items-center'>


        <div data-scroll-section data-scroll data-scroll-speed='2' data-scroll-direction='horizontal' className='conElems conLinksSec conH1 h-[100vh] w-[95vw] md:w-[70vw]  pt-[10vmax] text-[2rem]  flex justify-center items-center md:text-[4rem] sm:ml-[2rem]'><h1 className=''>Let's make<br />something great!</h1></div>

        <div data-scroll-section className='conElems h-[100vh]  w-[95vw] md:w-[70vw]  pt-[10vmax] p-[2rem] flex flex-col justify-start  text-left '>

          <h1 className='   conH1 text-[3rem] mb-[6vh] '>Contact.</h1>

          <div className='flex flex-col '>

            <p className='conPara mb-[1rem]'>Thank you for taking the time to explore my portfolio. I'm passionate about what I do and always on the lookout for exciting opportunities to collaborate and create. If you have a project in mind, want to discuss potential collaborations, or just want to say hello, please don't hesitate to get in touch.</p>

            <p className='conPara mb-[1rem]'>Feel free to reach out through any platforms bellow:</p>

            <a href='' className='conLinks'>aayush@mail.com</a>

            <a data-scroll data-scroll-class='aniText' target='blank' href='https://www.linkedin.com/in/constayush/' className='conLinks'>linkedin</a>

            <a data-scroll data-scroll-class='aniText' target='blank' href='https://github.com/constayush' className='conLinks'>github</a>

            <a data-scroll data-scroll-class='aniText' target='blank' href='https://www.instagram.com/maihoonayush/' className='conLinks'>instagram</a>

          </div>

        </div>

      </div>

    </LocomotiveScrollProvider>
  )
}

export default Contact