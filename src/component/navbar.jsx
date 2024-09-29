import { NavLink } from "react-router-dom"
import { useRef } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
export default () => {
    const link1 = useRef(null)
    const link2 = useRef(null)
    const link3 = useRef(null)
    const linkCon = useRef(null)
    const nav = useRef(null)
    const navUnClickedUi = useRef(null)
    const navClickedUi = useRef(null)
    let isNavClicked = false
let counter = 0;



useGSAP(()=>{

gsap.from(link1.current , {

    
    y: -100,
    duration:.5,
opacity: 0
})


})











    function handleClick() {
        
        navUnClickedUi.current.style.display = "flex"
        navClickedUi.current.style.display = "none"
        nav.current.style.height = '3rem'
    }

    function handleMenu() {

        gsap.from([link1.current ,link2.current,link3.current] , {

    
            y: -100,
            duration:.5,
            stagger: .1,
        opacity: 0
        })



counter++
   
        if (isNavClicked) { // when not clicked
            isNavClicked = false
linkCon.current.style.opacity = 0
            navUnClickedUi.current.style.display = "flex"
          
            

            nav.current.style.height = '3rem'
  navClickedUi.current.style.display = "none"
        }

        else {// when  clicked
   linkCon.current.style.opacity = 1
            
            navClickedUi.current.style.display = "flex"

         
            isNavClicked = true
            console.log(nav.current.style)
            // nav.current.style.backgroundColor = `#19181bf1`
            nav.current.style.height = '100vh'
            navUnClickedUi.current.style.display = "none"
        }





    }
    return (


        <nav ref={nav} className=" navbar fixed  z-[9]  w-[100vw] h-[3rem] lg:h-[6rem] bg-[#19181bdc] center bg-blur-md">

            <div ref={navUnClickedUi} className="flex w-full justify-between items-center  p-[2rem]">

                <a href="#">
                    <div className="logo">
                        <h1 className="ayush text-2xl lg:text-4xl"><a href="/">As.</a></h1>
                    </div>
                </a>


                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <div className="hidden md:block navLinks">

                    <ul className="flex justify-center items-center">
                        <li ><NavLink to="/" className="navLink m-2 text-[1rem] lg:text-[1.25rem]">About</NavLink></li>
                        <li ><NavLink to="/projects" className="navLink m-2 text-[1rem] lg:text-[1.25rem]">Projects</NavLink></li>
                        <li ><NavLink to="/contact" className="navLink m-2 text-[1rem] lg:text-[1.25rem]">Contact</NavLink></li>
                        <li className="m-2 rounded-lg "><button class="rbutton text-[1rem] lg:text-[1.25rem] ">Resume</button></li>
                    </ul>

                </div>



                <div onClick={handleMenu} class=" w-[30px] h-[20px] cursor-pointer   md:hidden menu flex flex-col justify-between">
                    <div className="w-full h-[2px] bg-white"> <input className="bar " type="checkbox"></input>  </div>
                    <div className="w-full h-[2px] bg-white"> <input className="bar " type="checkbox"></input>  </div>
                    <div className="w-full h-[2px] bg-white"> <input className="bar " type="checkbox"></input>  </div>
                </div>

            </div>

            <div ref={navClickedUi} className="w-full h-full bg-[#7473750b]  bg-grid-white/[.05] hidden justify-center items-start">


                <div className="center flex-col w-full">

                    <div className="flex items-center w-full p-[2rem] justify-between">
                        <a href="#">
                            <div className="logo">
                                <h1 className="ayush text-2xl lg:text-4xl"><a href="/">As.</a></h1>
                            </div>
                        </a>

                        <div onClick={handleMenu} class=" w-[30px] h-[20px] cursor-pointer  md:hidden menu flex flex-col justify-between">
                            <div className="w-full h-[2px] bg-white"> <input className="bar " type="checkbox"></input>  </div>
                            <div className="w-full h-[2px] bg-white"> <input className="bar " type="checkbox"></input>  </div>
                            <div className="w-full h-[2px] bg-white"> <input className="bar " type="checkbox"></input>  </div>
                        </div>
                    </div>


                    <ul ref={linkCon} className="linkCL center flex-col opacity-[0] ">


                        <li ref={link1} onClick={handleClick}><NavLink to="/" className="       fatfont     navLink m-2 text-[5rem] lg:text-[1.25rem]">About</NavLink></li>
                        <li ref={link2} onClick={handleClick}><NavLink to="/projects" className="fatfont navLink m-2 text-[5rem] lg:text-[1.25rem]">Projects</NavLink></li>
                        <li ref={link3} onClick={handleClick}><NavLink to="/contact" className=" fatfont navLink m-2 text-[5rem] lg:text-[1.25rem]">Contact</NavLink></li>
                        <li onClick={handleClick} className="m-2 rounded-lg "><button class="rbutton text-[1rem] lg:text-[1.25rem] ">Resume</button></li>


                    </ul>


                </div>
            </div>



        </nav>

    )


}