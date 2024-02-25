import React from 'react'

function SmallComp(props) {
  return (


    <a href={props.link} target='blank'>

      <div className='smallcomp rounded-lg  m-[.5vmax] w-[15rem]  lg:w-[28rem] h-[20rem] lg:h-[30rem]'>


        <div className=' CompMainContent w-full h-full flex flex-col justify-end  '>

          <h1 className='m-[1rem] compH1 text-[1.65rem] mb-[.5rem]'>{props.name}</h1>
          <p className=' m-[1rem] compP mb-[1rem] text-[1rem]'>{props.description}</p>


        </div>

      </div>

    </a>




  )
}

export default SmallComp