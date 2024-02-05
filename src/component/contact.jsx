import React from 'react'

function Contact() {
    return (
      

        <div className='conMain w-full h-fit flex flex-col justify-center items-center'>


            <div className='conElems conH1 h-[100vh] w-[95vw] md:w-[70vw]  pt-[10vmax]   flex justify-center items-center md:text-[4rem]'><h1>Let's make<br />something great!</h1></div>

            <div className='conElems conLinksSec w-[95vw] md:w-[70vw]  pt-[10vmax] p-[2rem] flex flex-col justify-start  text-left '>

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