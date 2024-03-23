import SmallComp from "./ui/smallComp"
import LongComp from "./ui/longComp"
import { useRef, useEffect } from 'react'
import '../../src/locomotive-scroll.css'
import{gsap,Power3}from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger)


export default () => {

const swiper = useRef(null)
const ppara = useRef(null)
const containerRef = useRef(null)


        scrollTo(0,0)




    useEffect(()=>{
    




        gsap.from(containerRef.current,{

            ease: Power3,
            y: 100,
            duration:.41,
        opacity: 0
        
            
            })

            gsap.from(ppara.current,{

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
                    touchMultiplier: 1.5,
                    normalizeWheel: true,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
                },
            });


    })



  
    return (
       
       <div  ref={containerRef} className="w-full h-fit pt-[3rem] lg:pt-[6rem]  flex justify-center items-center flex-col ">

            <h1 data-scroll data-scroll-speed='.2' className="projectsH1 text-[2rem] lg:text-[4rem] my-[5rem] lg:my-[3rem]">Projects<span className="text-[#ffbe47]">.</span></h1>

            <div data-scroll data-scroll-speed='.1' ref={ppara} className="projectParas  lg:leading-[1.5rem] w-[80%] lg:w-[55rem] flex flex-col justify-center items-center mt-4 overflow-hidden">


                <p  className="projectPara  mb-[1rem]">Step into the world of my projects, where creativity meets functionality! This is the place where I pour my heart and soul into turning ideas into reality. Explore a mix of projects that capture the essence of my journey—a journey filled with challenges, triumphs, and a lot of learning.</p>
                <p  className="projectPara  mb-[1rem]">Think of it as a collection of digital stories that reflect not just my technical skills, but also the joy I find in crafting beautiful and user-centric designs.</p>
                
            </div>

            <div className="majorProjects flex flex-col md:flex-row justify-center items-center overflow-hidden gap-4 lg:gap-0 mt-[4rem]">
                <div className="flex flex-col gap-4 lg:gap-0 firstSec">
                    <LongComp  name='Project' description=' uploading soon... I have homework to do :('  link = 'https:/github.com/constayush'/>
                    <SmallComp  name='Project' description=' uploading soon... I have homework to do :(' link = 'https:/github.com/constayush'/>
                </div>
                <div  className="flex flex-col gap-4 lg:gap-0 secondSec">
                    <SmallComp name='Project' description=' uploading soon... I have homework to do :(' link = 'https://github.com/constayush'/>
                    <LongComp name='Project' description=' uploading soon... I have homework to do :('  link = 'https://github.com/constayush'/>
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




{/* 
          
<div ref={swiper} className="swiper">

   
     <div  className=" w-[20rem] h-[20rem] bg-red-200">Slide 1</div>
     <div  className=" w-[20rem] h-[20rem] bg-red-200">Slide 2</div>
     <div  className=" w-[20rem] h-[20rem] bg-red-200">Slide 3</div>


 
</div> */}




            
        </div>

    )

}
