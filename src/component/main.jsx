
import github from '../../public/github.svg'

import linkedin from '../../public/linked-in.svg'

import insta from '../../public/instagram.svg'

import mail from '../../public/mail.svg'
export default () => {

    return (<div className="flex flex-col lg:flex-row md:flex-row">

        <div className="mainWrap w-[90vw] h-[fit] z-0 pt-[12vmax] md:pt-[10vmax] lg:pt-[10vmax] flex justify-center items-center pb-2 px-[2.75vmax] md:px-[12vmax] lg:px-[12vmax] ">
            <div className="main  w-full h-full   p-0 mb-[1rem]">

                <p className=" text-left greeting mb-[.8rem]">Hi, my name is</p>
                <h1 className="text-left nameH1 text-[2rem] md:text-[4rem] lg:text-[4rem]">Ayush Srivastava</h1>
                <h1 className="text-left subH1  text-[2rem] md:text-[4rem] lg:text-[4rem]">I build things for the web.</h1>


                <div className="aboutParas  w-[80%] md:w-[50%] lg:w-[50%] mt-4">
                    <p className="aboutPara mb-[.75rem]">a web developer from Meerut, India. I'm passionate about crafting user-friendly and visually stunning websites.</p>
                    <p className="aboutPara mb-[.75rem]">
                        I am currently enrolled in a Computer Science and Engineering Diploma program at Invertis University, Bareilly.</p>

                    <h2 className="aboutPara mb-[.75rem]">Here are a few technologies I’ve been working with recently:</h2>
                    <ul className="mb-[1rem]">
                        <li className="aboutPara">JavaScript (ES6+)</li>
                        <li className="aboutPara">TypeScript</li>
                        <li className="aboutPara">React</li>
                        <li className="aboutPara">Tailwind</li>
                    </ul>
                    <hr className='w-[70%] mb-[.4rem] hr'></hr>
                    <p className="resumePara">My Resume (pdf 108kb)</p>
                </div>

            </div>
        </div>





        <div className="social z-40 w-fit md:w-[10vw] lg:w-[10vw] h-fit md:h-[80vh] lg:h-[80vh] flex flex-row md:flex-col md:pt-[10vmax] lg:flex-col lg:pt-[10vmax] justify-center items-center">

            <ul className="mr-1 md:mr-[10rem] lg:mr-[10rem] flex flex-row md:flex-col lg:flex-col justify-center items-center">
                <a target="_blank" href="https://github.com/constayush" className="ml-[1rem] github socailLi w-[55px] h-[55px] mb-[1.25rem] flex justify-center items-center">     <img src={github}></img>   </a>
                <a target="_blank" href="https://www.linkedin.com/in/constayush/" className="ml-[1rem] linkedin socailLi w-[55px] h-[55px] mb-[1.25rem] flex justify-center items-center">   <img src={linkedin}></img> </a>
                <a target="_blank" href="https://www.instagram.com/maihoonayush/" className="ml-[1rem] instagram socailLi w-[55px] h-[55px] mb-[1.25rem] flex justify-center items-center">  <img src={insta}></img>    </a>
                <a className="ml-[1rem] mail socailLi w-[45px] h-[55px] mb-[1.25rem] flex justify-center items-center">      <img src={mail}></img>      </a>
            </ul>

        </div>



    </div>)
}


