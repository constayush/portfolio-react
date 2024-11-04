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
import tempProjectsImg from '../../public/projects.jpg'
import ProjectCard from './ui/projectCard';
function Hero() {


// rendering project card with this obj
    let projects = [

         {
            projectName: "Project",
            projectDescription: " this is first project, it is in development",
            projectImg: tempProjectsImg
        },
        {
            projectName: "Project",
            projectDescription: " this is second project, it is in development",
            projectImg: tempProjectsImg
        },
        {
            projectName: "Project",
            projectDescription: " this is third project, it is in development",
            projectImg: tempProjectsImg
        },
        {
            projectName: "Project",
            projectDescription: " this is fourth project, it is in development",
            projectImg: tempProjectsImg
        }
    ]

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

// org spining animation
        let orangeAnimation = gsap.from(org.current, {
            ease: Power3,
            rotate: 360,
            duration: 80,
            repeat: -1
        })

    })

    return (
        <div className="hero w-full h-auto bg-grid-[#fc9930]/[.04]">


            <nav ref={nav} className="fixed top-0 w-full h-48 flex justify-center items-center z-99">

                <div className="flex justify-between items-center w-full h-full px-8 md:px-16 ">

                    <h1 className="logoNav text-2xl lg:text-4xl hover:text-[#fc9930]">
                        <a href="/">A<span className="accent">0.</span></a>
                    </h1>

                    <ul className="flex gap-4 font-semibold text-lg">

                        <li className="hover:text-[#fc9930] transition-all">
                            <Link to="/terminal">Terminal</Link>
                        </li>

                        <li className="hover:text-[#fc9930] transition-all">
                            <a href="#">Resume</a>
                        </li>

                    </ul>

                </div>

            </nav>

            <main className="flex justify-center w-full min-h-screen pt-48">

                <div className="flex flex-col gap-7 items-center w-11/12 md:w-3/5">

                    <div className="flex text-center">


                        <h1 className="text-[1.35rem] md:text-[3rem] font-medium text-[#fafafa]">
                            Creating User Experiences That Code with the Zest of Fresh Oranges!
                            <Link to="/terminal">
                                <img ref={org} className="ml-4 inline w-12 md:w-16" src={orange} alt="orange logo" />
                            </Link>
                        </h1>


                    </div>

                    <h2 className="text-lg md:text-2xl text-[#d3c6ba] font-medium">

                        — Hi, I’m <span className="font-semibold text-[#fff7ea]">Ayush</span>, a web developer from India.

                    </h2>

                    <div className="flex space-x-4">

                        <div className="networks ">

                            <div className="netbox border-[#ffffff] rounded-lg flex gap-4 p-3">

                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/constayush">
                                    <img className="w-10  heroSocialLogos" src={github} alt="GitHub" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/constayush/">
                                    <img className="w-10  heroSocialLogos" src={linkedin} alt="LinkedIn" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/maihoonayush/">
                                    <img className="w-10  heroSocialLogos" src={insta} alt="Instagram" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="mailto:aayush@mail.com">
                                    <img className="w-10  heroSocialLogos" src={mail} alt="Mail" />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <div ref={projectCon} className="flex justify-center w-full min-h-screen py-10">

                <div className="w-full max-w-5xl  p-8 flex flex-col gap-16">

                    <h1 className="text-3xl md:text-5xl font-semibold">Projects.</h1>

                    <div className="break-words grid grid-cols-1 md:grid-cols-2 gap-6  place-items-center ">


                 {
                    projects.map((i,a)=>{

                     return <ProjectCard projectDescription={projects[a].projectDescription} projectImg={projects[a].projectImg} projectName={projects[a].projectName}/>
                    })
                 }      
                 
                    </div>

                </div>

            </div>

        </div>


    )
}


export default Hero