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

  const terminal = useRef(null)
  const loader = useRef(null)
  let [prvInputsData, setPrvInputsData] = useState([]) // array to store all input data.
  let [commandOutputData, setcommandOutputData] = useState([])// array to store all commands output data.
  let [inputData, setInputData] = useState()// to store current input data.
  const input = useRef(null) //input div refSSSS
  const commandsArr = ['whoami', 'projects', 'contact'] // array of commands
const terminalContainer = useRef(null)
let bgCounter = 0
const bgImgArr = [orangeBg , whiteBg, blackBg, orangeDrak, multiBg]


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

    if (e.code == 'Enter' && input.current.value) {  // checking both condition if key is enter and input have some value in it. 

      if (commandsArr.includes(input.current.value)) {

        if (input.current.value == 'whoami') {

          input.current.value = null // setting input value to null


          //  setPrvInputsData([...prvInputsData, "whoami"])
          //  setPrvInputsData((x)=>{console.log(x)})
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


  function changeBg(e){

  terminalContainer.current.style.backgroundImage = `url(${bgImgArr[bgCounter] })`;

  if(bgCounter > bgImgArr.length -1 ){bgCounter = 0}

  else{bgCounter++}

  }

function backBtn(){
   terminal.current.style.width = 0
}



  return (
    <div ref={terminalContainer} className='terminal w-full lg:h-[100vh] h-[95vh] center flex-col p-[1rem] overflow-auto  rounded'>




      <div ref={terminal} className='  w-full h-full  bg-[#070707cf]  rounded-md'>



        <nav className='w-full  h-[8%] text-white bg-[#141414f3] flex items-center justify-between p-[2rem] rounded-md'>


          <div className=" text-xl "><img src={themeIco} className='changeBgBtn  cursor-pointer w-8 h-8 rounded-full' onClick={changeBg} /></div> <div className='text-xl '>terminal</div> <Link to='/'><img src={closeIco} onClick={backBtn} className='cursor-pointer w-8 h-8 rounded-full '/></Link>


        </nav>



        <div className='w-full p-[1rem] h-[90%] overflow-auto   text-white tfont '>


          <p> Welcome to termianl !</p>

          {prvInputsData.map((data) => <div className='oldCommand  flex'><p>root@ayush:~#</p><p>{data}</p></div>)}


          {/* {commandOutputData.map((data) => <div className='oldCommand  flex'><p>root@ayush:~#</p><p>{data}</p></div>)} */}

          <div className='newCommand flex'>


            <p>root@ayush:~#</p>

            <input ref={input} type='text' onKeyDown={handleKeyPress} onChange={handleInputChange} className='tinput w-full bg-transparent' />



          </div>

        </div>

      </div>

    </div>
  )
}

export default Terminal