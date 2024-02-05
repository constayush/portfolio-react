import { NavLink } from "react-router-dom"



export default () => {


    return ( 
    
    
    <nav className="fixed  z-[999] navbar flex justify-between w-[100vw] h-[5vmax] p-[4vmax] lg:h-[5vmax] bg-[#19181B] items-center">
                <a href="#"><div className="logo">
                    <h1 className="ayush text-2xl lg:text-4xl"><a href="/">As.</a></h1>

                    
                   </div></a>
                

                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <div className=" navLinks">

                    <ul className="flex justify-center items-center">

                        <li ><NavLink to="/" className="navLink m-2 text-[1rem] lg:text-[1.25rem]">About</NavLink></li>
                        <li ><NavLink to="/projects" className="navLink m-2 text-[1rem] lg:text-[1.25rem]">Projects</NavLink></li>
                        <li ><NavLink to="/contact" className="navLink m-2 text-[1rem] lg:text-[1.25rem]">Contact</NavLink></li>
                        <li className="m-2 rounded-lg "><button class="rbutton text-[1rem] lg:text-[1.25rem] ">Resume</button></li>
                    </ul>

                </div>
            </nav>
       
    )


}