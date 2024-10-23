import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import { Power3 } from 'gsap'
import orangeBg from '../../public/orangeBg.jpg'
import blackBg from '../../public/blackBg.jpg'
import whiteBg from '../../public/whiteBg.jpg'
import orangeDrak from '../../public/orangeDark.jpg'
import multiBg from '../../public/multiBg.jpg'
import themeIco from '../../public/themeIco.svg'
import closeIco from '../../public/closeIco.svg'
function Terminal() {



  const terminalContainer = useRef(null)
  const terminal = useRef(null)
  const input = useRef(null) //input div



  let [prvInputsData, setPrvInputsData] = useState([]) // array to store all input data.
  let [inputData, setInputData] = useState() // to store current input data.


  const commandsArr = ['whoami', 'projects', 'contact', 'help'] // array of commands



  //bgImgs 
  let bgCounter = 0
  const bgImgArr = [orangeBg, whiteBg, blackBg, orangeDrak, multiBg]


  /* .. ...........................................ANIMATIONS..................................................*/

  useGSAP(() => {

    let heading = gsap.from(terminal.current, {
      ease: Power3,
      width: 0,
      duration: .6,
      opacity: 0
    })
  })

  /* .. ...........................................ANIMATIONS End..................................................*/



  function handleInputChange(e) { setInputData(e.target.value); } //setting value of input






  function handleKeyPress(e) {

    if (e.code == 'Enter' && input.current.value) {  // checking both condition if key is  = enter and input command is not empty  

      if (commandsArr.includes(input.current.value)) {

        if (input.current.value == 'whoami') {

          input.current.value = null
          setPrvInputsData((prvInputsData) => [...prvInputsData, "whoami"])
          setPrvInputsData((prvInputsData) => [...prvInputsData, " Hey, I'm Ayush, an 18-year-old web developer fueled by curiosity and passionate about building ui interfaces. I'm all about turning ideas into digital reality and constantly seeking new challenges to tackle."])

        }
        else if (input.current.value == 'help') {

          input.current.value = null
          setPrvInputsData((prvInputsData) => [...prvInputsData, "help"])
          setPrvInputsData((prvInputsData) => [...prvInputsData, <p><span className='TconLinks'>whoami</span> - introduction of me, <span className='TconLinks'>contact</span> - list all my social links, <span className='TconLinks'>projects</span> - list my projects and you also can <span className=' font-extrabold'>cd</span> into each one of them </p>])

        }
        else if (input.current.value == 'contact') {

          input.current.value = null
          setPrvInputsData((prvInputsData) => [...prvInputsData, "contact"])
          setPrvInputsData((prvInputsData) => [...prvInputsData, 
          
          <>
          <p>Feel free to reach out through any platforms :</p>
          <a href='mailto:aayush@mail.com' className='TconLinks '>aayush@mail.com </a> 
          <a  target='blank' href='https://www.linkedin.com/in/constayush/' className='TconLinks'>linkedin </a>
          <a  target='blank' href='https://github.com/constayush' className='TconLinks'>github </a>
          <a  class='aniText' target='blank' href='https://www.instagram.com/maihoonayush/' className='TconLinks'>instagram </a>
          
          </> ])

        }
        

      }

      else {
        setPrvInputsData([...prvInputsData, inputData]); // updating array of input data
        input.current.value = null // setting input value to null
      }


    }

    else if (e.code == 'Enter') {

      setPrvInputsData([...prvInputsData, ""]); // updating array of input data with empty value to show blank output
      input.current.value = null // setting input value to null

    }


  }


  function changeBg(e) {

    terminalContainer.current.style.backgroundImage = `url(${bgImgArr[bgCounter]})`;

    if (bgCounter > bgImgArr.length - 1) { bgCounter = 0 }

    else { bgCounter++ }

  }




  return (

    <div ref={terminalContainer} className='terminal w-full lg:h-[100vh] h-[95vh] center flex-col p-[1rem] rounded'>


      <div ref={terminal} className='w-full h-full  bg-[#070707cf]  rounded-md'>


        <nav className='w-full  h-[8%] text-white bg-[#141414f3] flex items-center justify-between p-[2rem] rounded-md'>

          <div className=" text-xl ">
            <img src={themeIco} className='changeBgBtn  cursor-pointer w-8 h-8 rounded-full' onClick={changeBg} />
          </div>
          <div className='text-xl '>terminal</div>
          <Link to='/'><img src={closeIco} className='cursor-pointer w-8 h-8 rounded-full ' /></Link>

        </nav>

        <div className='w-full p-[1rem] h-[92%] overflow-auto text-white tfont '>


          <p> Welcome to my termianl portfolio!</p>
          <pre >
            <br />       __     ___    _  _____ _    _
            <br />     /\\ \   / / |  | |/ ____| |  | |
            <br />    /  \\ \_/ /| |  | | (___ | |__| |
            <br />   / /\ \\   / | |  | |\___ \|  __  |
            <br />  / ____ \| |  | |__| |____) | |  | |
            <br /> /_/    \_\_|   \____/|_____/|_|  |_|

            <br />
            <p className='pt-[1rem]'>------------------------------------</p>
            <p className=''> for list of commands type <span className='greeting'>`help`</span>.</p>
            <p className='pb-[1rem]'>------------------------------------</p></pre>





          {prvInputsData.map((data) => <div className='oldCommand  flex'><p>user@ayush:~#</p><p>{data}</p></div>)}




          <div className='newCommand flex'>


            <p>user@ayush:~#</p>

            <input ref={input} type='text' onKeyDown={handleKeyPress} onChange={handleInputChange} className='tinput w-full bg-transparent' />



          </div>

        </div>

      </div>

    </div>
  )
}

export default Terminal