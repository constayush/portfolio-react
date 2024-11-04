import React from 'react'

function ProjectCard(props) {
  return (
    <a className="card rounded-lg max-w-[30rem]  ">

    <h1 className='projects-h1'>{props.projectName}</h1>
    <img  src={props.projectImg}/>
    <p className=''>{props.projectDescription}</p>

</a>

  )
}

export default ProjectCard