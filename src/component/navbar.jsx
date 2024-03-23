import { NavLink } from "react-router-dom"
import { useRef } from "react"
import wavyBg from '../../public/wavyNavBG.jpg'

export default () => {

    const nav = useRef(null)
    const navUnClickedUi =useRef(null)
    const navClickedUi =useRef(null)
    let isNavClicked = false
    function handleClick() {



    }

    function handleMenu() {

        console.log(navClickedUi.current.style.display)

        if (isNavClicked) { // when not clicked
            isNavClicked = false

            navUnClickedUi.current.style.display = "flex"
         navClickedUi.current.style.display = "none"


            nav.current.style.height = '3rem'

        }

        else {// when  clicked

            navUnClickedUi.current.style.display = "none"
            navClickedUi.current.style.display = "flex"


            isNavClicked = true
            console.log(nav.current.style)
            nav.current.style.backgroundColor = `#19181bf1`
            nav.current.style.height = '100vh'
        }





    }
    return (


        <nav ref={nav} className=" navbar fixed  z-[9]  w-[100vw] h-[3rem] lg:h-[6rem] bg-[#19181B] center">

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
                        <li onClick={handleClick}><NavLink to="/contact" className="navLink m-2 text-[1rem] lg:text-[1.25rem]">Contact</NavLink></li>
                        <li className="m-2 rounded-lg "><button class="rbutton text-[1rem] lg:text-[1.25rem] ">Resume</button></li>
                    </ul>

                </div>



                <div onClick={handleMenu} class=" w-[30px] h-[20px]   md:hidden menu flex flex-col justify-between">
                    <div className="w-full h-[2px] bg-white"> <input className="bar " type="checkbox"></input>  </div>
                    <div className="w-full h-[2px] bg-white"> <input className="bar " type="checkbox"></input>  </div>
                    <div className="w-full h-[2px] bg-white"> <input className="bar " type="checkbox"></input>  </div>
                </div>

            </div>

            <div ref={navClickedUi} className="w-full h-full bg-white hidden justify-center items-center">

               

                <div onClick={handleMenu} class=" w-[30px] h-[20px]   md:hidden menu flex flex-col justify-between">
                    <div className="w-full h-[2px] bg-black"> <input className="bar " type="checkbox"></input>  </div>
                    <div className="w-full h-[2px] bg-black"> <input className="bar " type="checkbox"></input>  </div>
                    <div className="w-full h-[2px] bg-black"> <input className="bar " type="checkbox"></input>  </div>
                </div>

            </div>



        </nav>

    )


}