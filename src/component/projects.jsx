import SmallComp from "./ui/smallComp"
import LongComp from "./ui/longComp"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef, useEffect } from 'react'
import '../../src/locomotive-scoll.css'
import{gsap,Power3}from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)
export default () => {



    const containerRef = useRef(null)

useEffect(()=>{


  gsap.from('.projectsH1',{
    ease: Power3,
    y: 100,
    duration:.41,
opacity: 0
    
    })


    gsap.from('.projectParas',{
      ease: Power3,
      y: 100,
      duration:.41,
  opacity: 0
      
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
       <div data-scroll-container ref={containerRef} className="w-[98vw] h-fit pt-[3rem] lg:pt-[6rem]  flex justify-center items-center flex-col ">

            <h1  className="projectsH1 text-[2rem] lg:text-[4rem] my-[5rem] lg:my-[3rem]">Projects<span className="text-[#ffbe47]">.</span></h1>

            <div className="projectParas  w-[80%] lg:w-[55rem] flex flex-col justify-center items-center mt-4 overflow-hidden">


                <p className="projectPara  mb-[1rem]">Step into the world of my projects, where creativity meets functionality! This is the place where I pour my heart and soul into turning ideas into reality. Explore a mix of projects that capture the essence of my journey—a journey filled with challenges, triumphs, and a lot of learning.</p>

                <p className="projectPara  mb-[1rem]">Think of it as a collection of digital stories that reflect not just my technical skills, but also the joy I find in crafting beautiful and user-centric designs.</p>

                <p className="projectPara  mb-[4rem]">Whether it's cracking the code for efficiency, weaving together seamless user interfaces, or diving into the latest tech trends, these projects are my way of showing you the human side of technology.</p>

            </div>

            <div className="majorProjects flex flex-col md:flex-row justify-center items-center overflow-hidden gap-4 lg:gap-0">
                <div className="flex flex-col gap-4 lg:gap-0 firstSec">
                    <LongComp  name='Project' description=' building i have homework to do :['  link = 'https:/github.com/constayush'/>
                    <SmallComp  name='Project' description=' building i have homework to do :[' link = 'https:/github.com/constayush'/>
                </div>
                <div  className="flex flex-col gap-4 lg:gap-0 secondSec">
                    <SmallComp name='Project' description=' building i have homework to do :[' link = 'https://github.com/constayush'/>
                    <LongComp name='Project' description=' building i have homework to do :['  link = 'https://github.com/constayush'/>
                </div>
            </div>

            <div  className="minnorProjectsWapper w-[80%] lg:w-[57rem] mt-[5rem] mb-[5rem] overflow-hidden">
                <h3  className=" minnorH1 mb-[1rem]">Minnor Projects.</h3>
                <p   className="  projectPara mb-[1rem]">Discover a collection of my minor projects — small yet impactful endeavors that reveal the essence of my ongoing learning and creative exploration. Each minor project serves as a pixel, contributing to the larger canvas of my journey.</p>

                <div  className=" minnorProjects w-full h-fit] rounded-lg">

                    <ul >
                        <li className="para1 minnorprojectsLinks mb-[.75rem]"><a href="https://goboxin.vercel.app/" target="blank"> <span className="orange">•</span> GO BOXIN! - a shadow boxing trainer</a></li>
                        <li className="para2 minnorprojectsLinks mb-[.75rem]"><a href="https://weather-app-constayush.vercel.app/" target="blank"> <span className="orange">•</span> Weather App - simple weather application</a></li>
                        <li className="para3 minnorprojectsLinks mb-[.75rem]"><a href="https://rock-paper-scissors-constayush.vercel.app/" target="blank"> <span className="orange">•</span> Rock Paper Scissors - you vs computer game</a></li>
                        <li className="para4 minnorprojectsLinks mb-[.75rem]"><a href="#" target="blank"> <span className="orange">•</span> project</a></li>
                        <li className="para5 minnorprojectsLinks mb-[.4rem] "><a href="#" target="blank"> <span className="orange">•</span> project</a></li>
                    </ul>
                </div>

            </div>
            
        </div>
     </LocomotiveScrollProvider>
    )

}
