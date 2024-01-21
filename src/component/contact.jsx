import React from 'react'

function Contact() {
    return (
        <div className="contact w-[98vw] h-[fit] pt-[12vmax] md:pt-[5vmax] flex justify-center items-center flex-col ">


            <h1 className='conH1 ml-[2rem] text-[3.4rem] md:text-[5rem]  h-[89vh] flex justify-center items-center'>

                Let's make<br />
                something great!

            </h1>

            <div className=' mx-[7rem] h-[80vh] flex flex-col justify-start items-left text-left w-[80%] md:w-[60%] text-[1.125rem]'>
                <h1 className='   conH1 text-[3rem] mb-[6vh] '>Contact.</h1>

                <div className='flex flex-col '>
                    <p className='conPara mb-[1rem]'>Thank you for taking the time to explore my portfolio. I'm passionate about what I do and always on the lookout for exciting opportunities to collaborate and create. If you have a project in mind, want to discuss potential collaborations, or just want to say hello, please don't hesitate to get in touch.</p>

                    <p className='conPara  mb-[1rem]'>Feel free to reach out through any platforms bellow:</p>

                    <a href='' className='conLinks'>aayush@mail.com</a>
                    <a target='blank' href='https://www.linkedin.com/in/constayush/' className='conLinks'>linkedin</a>
                    <a target='blank' href='https://github.com/constayush' className='conLinks'>github</a>
                    <a target='blank' href='https://www.instagram.com/maihoonayush/' className='conLinks'>instagram</a>
                </div>
            </div>


        </div>
    )
}

export default Contact