import SmallComp from "./ui/smallComp"
import LongComp from "./ui/longComp"
import { useLocomotiveScroll } from 'react-locomotive-scroll/'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import '../../src/locomotive-scoll.css'
export default () => {
    const containerRef = useRef(null)
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
        <div data-scroll-container ref={containerRef} className="w-[98vw] h-fit pt-[3rem] lg:pt-[6rem]  flex justify-center items-center flex-col ">

            <h1  className="projectsH1 text-[2rem] lg:text-[4rem] my-[3rem]">Projects<span className="text-[#ffbe47]">.</span></h1>

            <div className="projectParas  w-[80%] lg:w-[57rem] flex flex-col justify-center items-center mt-4 overflow-hidden">


                <p className="projectPara mb-[1rem]">Step into the world of my projects, where creativity meets functionality! This is the place where I pour my heart and soul into turning ideas into reality. Explore a mix of projects that capture the essence of my journey—a journey filled with challenges, triumphs, and a lot of learning.</p>

                <p className="projectPara mb-[1rem]">From sleek web applications to user-friendly mobile experiences, each project is a testament to my love for finding innovative solutions. Think of it as a collection of digital stories that reflect not just my technical skills, but also the joy I find in crafting beautiful and user-centric designs.</p>

                <p className="projectPara  mb-[4rem]">Whether it's cracking the code for efficiency, weaving together seamless user interfaces, or diving into the latest tech trends, these projects are my way of showing you the human side of technology.</p>

            </div>

            <div className="majorProjects flex flex-col md:flex-row justify-center items-center overflow-hidden gap-4 lg:gap-0">
                <div data-scroll data-scroll-speed='2' data-scroll-direction='vertical' className="flex flex-col gap-4 lg:gap-0 ">
                    <LongComp  name='Project' description=' building i have homework to do :['  link = 'https:/github.com/constayush'/>
                    <SmallComp  name='Project' description=' building i have homework to do :[' link = 'https:/github.com/constayush'/>
                </div>
                <div data-scroll data-scroll-speed='2' data-scroll-direction='vertical' className="flex flex-col gap-4 lg:gap-0">
                    <SmallComp name='Project' description=' building i have homework to do :[' link = 'https://github.com/constayush'/>
                    <LongComp name='Project' description=' building i have homework to do :['  link = 'https://github.com/constayush'/>
                </div>
            </div>

            <div className="minnorProjectsWapper w-[80%] lg:w-[57rem] mt-[5rem] mb-[5rem] overflow-hidden">
                <h3 data-scroll-class='animeText'  data-scroll data-scroll-speed='2' className="aText minnorH1 mb-[1rem]">Minnor Projects.</h3>
                <p  data-scroll-class='animeText' data-scroll data-scroll-speed='2' className=" aText projectPara mb-[1rem]">Discover a collection of my minor projects — small yet impactful endeavors that reveal the essence of my ongoing learning and creative exploration. Each minor project serves as a pixel, contributing to the larger canvas of my journey.</p>

                <div data-scroll data-scroll-speed='2' className="minnorProjects w-full h-fit] rounded-lg">

                    <ul>
                        <li className="minnorprojectsLinks mb-[.75rem]"><a href="https://goboxin.vercel.app/" target="blank"> <span className="orange">•</span> GO BOXIN! - a shadow boxing trainer</a></li>
                        <li className="minnorprojectsLinks mb-[.75rem]"><a href="https://weather-app-constayush.vercel.app/" target="blank"> <span className="orange">•</span> Weather App - simple weather application</a></li>
                        <li className="minnorprojectsLinks mb-[.75rem]"><a href="https://rock-paper-scissors-constayush.vercel.app/" target="blank"> <span className="orange">•</span> Rock Paper Scissors - you vs computer game</a></li>
                        <li className="minnorprojectsLinks mb-[.75rem]"><a href="#" target="blank"> <span className="orange">•</span> project</a></li>
                        <li className="minnorprojectsLinks mb-[.4rem] "><a href="#" target="blank"> <span className="orange">•</span> project</a></li>
                    </ul>
                </div>

            </div>

        </div>
</LocomotiveScrollProvider>
    )

}
