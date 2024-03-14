import React from 'react'
import { useEffect, useState, useRef } from 'react'

function Terminal() {


  let [commandCounterArr, setCommandCounterArr] = useState([])
  let [commandOutputCounterArr, setCommandOutputCounterArr] = useState([])
  let [inputData, setInputData] = useState()
  let [outputData, setOutputData] = useState()
  const commandInput = useRef(null)
  const commands = ['whoami', 'projects', 'contact']


  function handleInputChange(e) { setInputData(e.target.value); }


  function handleKeyPress(e) {

    if (e.code == 'Enter') {

      console.log(inputData , commandInput.current.value , "here")
      // handleCommands(inputData);
  

      setCommandCounterArr([...commandCounterArr, inputData]);


      commandInput.current.value= ""
      
      console.log(inputData , commandInput.current.value , "here")
    }
  }

  function handleCommands(data) {

    if (commands.includes(data)) {
      if (data === 'whoami') {

        setOutputData("Hi, my name is Ayush. I'm a developer hailing from India.")
  
      }
      if (data === 'projects') {

        setOutputData("Hi, my name is Ayush. I'm a developer hailing from India.")
     
      }
      if (data === 'contact') {

        setOutputData("Hi, my name is Ayush. I'm a developer hailing from India.")
     
      }

    }

    else {

      setOutputData("invalid command!");
    }

  }








  return (
    <div className='w-full h-screen center flex-col '>

      <div className='termianl  w-[20rem] h-[20rem] lg:w-[70rem] lg:h-[40rem]   md:w-[45rem] md:h-[30rem]  '>

        <nav className='w-full h-[8%] bg-[#1b1b1b] flex items-center justify-between p-[2rem] '>

          <div className=''>logo</div> <div className=''>terminal</div> <div>logos</div>

        </nav>

        <div className='w-full h-[90%] bg-[#151515] rounded text-white tfont'>


          <p> Welcome to termianl !</p>


          {commandCounterArr.map((data) => <div className='oldCommand  flex'><p>root@ayush:~#</p><p>{data}</p></div>)}
          {commandOutputCounterArr.map(() => <div className='oldCommand  flex'><p>root@ayush:~#</p><p>{outputData}</p></div>)}

          <div className='newCommand flex'>

            <p>root@ayush:~#</p>
            <input ref={commandInput} type='text' onKeyDown={handleKeyPress} onChange={handleInputChange} className='tinput w-full bg-transparent' />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Terminal