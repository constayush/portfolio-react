import React from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollContainer, ScrollPage, Animator, batch, Fade, Move, Sticky } from 'react-scroll-motion';
import { TypeAnimation } from 'react-type-animation';
import { Power3 } from 'gsap';
import gsap from 'gsap'
import styles from '../heroStyles.css'
import pfp from '../../public/pfp.jpg'
import { Link } from 'react-router-dom'
import Terminal from './Terminal'
import orange from "../../public/orange.svg"
import github from '../../public/github.svg'
import linkedin from '../../public/linked-in.svg'
import insta from '../../public/instagram.svg'
import mail from '../../public/mail.svg'
import resume from '../../public/resumeIcon.svg'
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
function Hero() {

    const org = useRef();
    const projectCon = useRef();

    //nav bar glass-fading  effect
    const nav = useRef();
    window.onscroll = () => {
        if (window.scrollY > 80) {
            nav.current.classList.add('nav-active');
        } else {
            nav.current.classList.remove('nav-active');
        }
    };


    //gsap animation
    useGSAP(() => {


        //smooth scrolling locomotive
        const locomotive = new LocomotiveScroll({
            lenisOptions: {
                wrapper: window,
                content: document.documentElement,
                lerp: 0.17,
                duration: 1.3,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                smoothTouch: true,
                wheelMultiplier: 1.2,
                touchMultiplier: 1.5,
                normalizeWheel: true,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            },
        });


        let orangeAnimation = gsap.from(org.current, {

            ease: Power3,

            rotate: 360,
            duration: 80,


            repeat: -1

        })

    })

    return (

        <div className='hero w-full h-fit bg-grid-[#fc9930]/[.04]'>

            <nav ref={nav} className='fixed top-0  w-full h-[12rem] flex justify-center items-center z-[99]'  >
                <div className='w-full h-full flex justify-between p-[4rem] items-center '>
                    <div className='flex justify-center items-center'>
                        <h1 className="logoNav hover:text-[#fc9930] text-2xl lg:text-4xl"><a href="/">A<span className='accent'>0.</span></a></h1>
                    </div>
                    <ul className='flex gap-4 font-semibold text-[1.15rem]'>
                        <li className=' hover:text-[#fc9930] transition-all decoration-[#a09d9d] '><Link to={"/terminal"} >Terminal</Link></li>
                        <li className='hover:text-[#fc9930] transition-all   decoration-[#a09d9d]' ><a href='' >Resume  </a></li>
                    </ul>
                </div>
            </nav>
            {/* <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: .9,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      > */}
            <main className='w-full h-[100vh] pt-[12rem] flex justify-center '>

                <div className='w-[80%] md:w-[60%] h-fit flex flex-col gap-7 justify-center items-center'>

                    <div className='flex'>


                        <h1 className='text-[1.35rem] md:text-[3rem] inline font-medium text-[#fafafa]'>Creating User Experiences That Code with the Zest of Fresh Oranges!<Link to={"/terminal"} ><img ref={org} className='ml-[1.5rem] inline w-[3rem] md:w-[4rem] ' src={orange} /></Link></h1>


                    </div>

                    <h2 className='text-[1.2rem] md:text-[1.75rem] text-[#d3c6ba] font-medium'>— Hi, I’m <span className='font-semibold text-[#fff7ea]'>Ayush</span>, a web developer from India.</h2>


                    <div className='flex'>
                        {/* <img className='resumeLogo w-[2.6rem] md:w-[3.25rem] cursor-pointer' src={resume} /> */}

                        <div className='networks  p-[1rem]'>
                            <div className='netbox border-[#ffffff]  rounded-lg w-fit lg:w-[15rem]'>
                                <a target='_blank' class="w-[3rem] lg:w-[3.5rem] icon " href="https://github.com/constayush"  ><img className='heroSocialLogos' src={github} /></a>
                                <a target='_blank' class="w-[3rem] lg:w-[3.5rem] icon " href="https://www.linkedin.com/in/constayush/"  ><img className='heroSocialLogos' src={linkedin} /></a>
                                <a target='_blank' class="w-[3rem] lg:w-[3.5rem] icon " href="https://www.instagram.com/maihoonayush/" ><img className='heroSocialLogos' src={insta} /></a>
                                <a target='_blank' class="w-[3rem] lg:w-[3.5rem] icon " href="mailto:aayush@mail.com" ><img className='heroSocialLogos' src={mail} /></a>
                            </div>
                        </div>
                    </div>

                </div>





            </main>
            {/* </motion.div>
            </AuroraBackground> */}

            <div ref={projectCon} className='w-full h-[100vh]  flex justify-center'>


                <div className='w-[70rem] h-[80rem] flex flex-col gap-5  bg-red-500'>


                    <h1 className=' text-[3.25rem] font-semibold'>Projects.</h1>

                </div>


            </div>

        </div>
    )
}


export default Hero