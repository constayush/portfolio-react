import { Link } from "react-router-dom"



export default () => {


    return (
       
            <nav className="fixed  z-[999] navbar flex justify-between w-[100vw] h-[5vmax] p-[4vmax] lg:h-[5vmax] bg-[#19181B] items-center">
                <a href="#"><div className="logo">
                    <h1 className="ayush text-2xl lg:text-4xl"><a href="/">As.</a></h1>

                    
                   </div></a>
                

                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <div className="navLinks">

                    <ul className="flex justify-center items-center">

                        <Link to="/"><li className="navLink m-2 text-[1rem] lg:text-[1.25rem]">About</li></Link>
                        <Link to="/projects"><li className="navLink m-2 text-[1rem] lg:text-[1.25rem]">Projects</li></Link>
                        <Link to="/contact"><li className="navLink m-2 text-[1rem] lg:text-[1.25rem]">Contact</li></Link>
                        <li className="m-2 rounded-lg "><button class="rbutton text-[1rem] lg:text-[1.25rem] ">Resume</button></li>
                    </ul>

                </div>
            </nav>
       
    )


}