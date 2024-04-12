import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import { Power3 } from 'gsap'
function Terminal() {

const terminal = useRef(null)
const loader = useRef(null)
  let [prvInputsData, setPrvInputsData] = useState([]) // array to store all input data.
  let [commandOutputData, setcommandOutputData] = useState([])// array to store all commands output data.
  let [inputData, setInputData] = useState()// to store current input data.
  const input = useRef(null) //input div refSSSS
  const commandsArr = ['whoami', 'projects', 'contact'] // array of commands





/* .. ...........................................ANIMATIONS..................................................*/






useGSAP(()=>{



  let heading = gsap.from(terminal.current, {
    ease: Power3,
   width: 0 ,
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


  return (
    <div className='w-full lg:h-[100vh] h-[95vh] center flex-col p-[1rem] overflow-auto  '>




      <div ref={terminal} className='termianl  w-full h-full   '>



        <nav className='w-full  h-[8%] text-white bg-[#141414] flex items-center justify-between p-[2rem] '>


          <h1 className=" text-xl "><a href="/">As.</a></h1> <div className='text-xl '>terminal</div> <Link to='/'><div className='text-xl '>back</div></Link>


        </nav>


       
        <div   className='w-full p-[1rem] h-[90%] overflow-auto bg-[#070707] rounded text-white tfont '>


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