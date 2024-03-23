import { NavLink } from "react-router-dom"
import { useRef } from "react"
import wavyBg from '../../public/wavyNavBG.jpg'

export default () => {

    const nav = useRef(null)
    let isNavClicked = false
    function handleClick() {



    }

    function handleMenu() {

        if (isNavClicked) {
isNavClicked = false

nav.current.style.height = '3rem'

        }

        else {
isNavClicked = true
console.log( nav.current.style)
nav.current.style.backgroundColor= `#19181bf1`
nav.current.style.height = '100vh'
        }





    }
    return (


        <nav ref={nav} className=" navbar fixed  z-[9] navbar flex justify-between w-[100vw] h-[3rem] p-[2rem] lg:h-[6rem] bg-[#19181B] items-center">
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


        </nav>

    )


}