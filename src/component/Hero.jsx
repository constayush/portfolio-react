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


import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
function Hero() {

    const org = useRef();



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
                lerp: 0.15,
                duration: 1.2,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                smoothTouch: true,
                wheelMultiplier: .7,
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
                        <li className=' hover:text-[#fc9930] transition-all underline decoration-[#a09d9d] '><Link to={"/terminal"} >Terminal</Link></li>
                        <li className='hover:text-[#fc9930] transition-all underline decoration-[#a09d9d]' ><a href='' >Resume  </a></li>
                    </ul>
                </div>
            </nav>

                <main className='w-full h-[100vh] pt-[12rem] flex justify-center '>

                    <div className='w-[80%] md:w-[60%] h-fit flex flex-col gap-10 justify-center items-center'>

                        <div className='flex'>


                            <h1 className='text-[1.35rem] md:text-[3rem] inline font-medium text-[#fafafa]'>Creating User Experiences That Code with the Zest of Fresh Oranges!<Link to={"/terminal"} ><img ref={org} className='ml-[1.5rem] inline w-[3rem] md:w-[4rem] ' src={orange} /></Link></h1>


                        </div>

                        <h2 className='text-[1.2rem] md:text-[2rem] text-[#d3c6ba] font-medium'>— Hi, I’m <span className='font-semibold text-[#fff7ea]'>Ayush</span>, a developer from India.</h2>
                        {/* <TypeAnimation

                        sequence={["— Hi, I’m Ayush, a developer from India."]}
                        wrapper='span'
                        speed={50}
                        repeat={0}
                        className='text-[2rem] text-[#d3c6ba] font-medium'
                    >

                    </TypeAnimation> */}

                        {/* <h2 className='text-[2rem]'>— Hi, I’m Ayush, a <span className='underline decoration-[#6b6b6b]'>developer</span> from India.</h2> */}
                        <div className='flex'>
                            <img className='resumeLogo w-[2.6rem] md:w-[3.25rem] cursor-pointer' src={resume} />

                            <div className='networks  mt-[.] p-[1rem]'>
                                <div className='netbox border-[#ffffff]  rounded-lg w-fit lg:w-[15rem]'>
                                    <a target='_blank' class="w-[3rem] lg:w-[4rem] icon " href="https://github.com/constayush"  ><img className='heroSocialLogos' src={github} /></a>
                                    <a target='_blank' class="w-[3rem] lg:w-[4rem] icon " href="https://www.linkedin.com/in/constayush/"  ><img className='heroSocialLogos' src={linkedin} /></a>
                                    <a target='_blank' class="w-[3rem] lg:w-[4rem] icon " href="https://www.instagram.com/maihoonayush/" ><img className='heroSocialLogos' src={insta} /></a>
                                    <a target='_blank' class="w-[3rem] lg:w-[4rem] icon " href="mailto:aayush@mail.com" ><img className='heroSocialLogos' src={mail} /></a>
                                </div>
                            </div>
                        </div>

                    </div>





                </main>


                <div className='w-full h-[100vh] '>

**this site is under construction**

                </div>

        </div>
    )
}


export default Hero