import React from 'react'

function LongComp(props) {
  return (
    <a href={props.link} target='blank'>
    <div className='longcomp w-[80vw]  md:w-[28vw] h-[45vh] md:h-[70vh] rounded-lg  m-[.5vmax]'>

<div className=' CompMainContent w-full h-full flex flex-col justify-end  '>
 
 <h1 className='m-[1rem] compH1 text-[1.65rem] mb-[.5rem]'>{props.name}</h1>
 <p className=' m-[1rem] compP mb-[1rem] text-[1rem]'>{props.description}</p>


</div>


    </div></a>
  )
}

export default LongComp



