import React from 'react'
import Navbar from './navbar'

function Terminal() {





function handleInputChange(e){

  console.log(e.target.value)

}










  return (
    <div className='w-full h-screen center flex-col '>



      <div className='termianl w-[80rem] h-[40rem] '>
        <nav className='w-full h-[8%] bg-[#1b1b1b] flex items-center justify-between p-[2rem] '> <div className=''>logo</div> <div className=''>terminal</div> <div>logos</div></nav>
        <div className='w-full h-[90%] bg-[#151515] rounded text-white tfont'>


<p> Welcome to termianl !</p>




         <input type='text' onChange={handleInputChange} className='w-full bg-transparent'></input>

        </div>






      </div>



    </div>
  )
}

export default Terminal