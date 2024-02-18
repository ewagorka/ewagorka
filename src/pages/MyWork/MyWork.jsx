import React from 'react'
import './MyWork.css'
import { ContentRow2, ProjectCard } from '../../components';
import frontEndProjectsList from "../../FrontEndProjects.json"
import ProductAndDesignProjectList from "../../ProductAndDesignProjects.json"


const MyWork = () => {

  const frontEndProjects = frontEndProjectsList.map(project => <ProjectCard {...project} key={project.id} />)
  const productAndDesignProjects = ProductAndDesignProjectList.map(project=> <ProjectCard {...project} key={project.id}/>)

  return (
    <section className="my-work">
      
      <ContentRow2
      t="Product and Design"
      p = "Featured projects showcasing end-to-end product launches and design expertise."
      displayArea={
        <>
        {productAndDesignProjects}
        </>
      }
      ></ContentRow2>
      <ContentRow2
      t="Front End Development"
      p ={ <>
      "Featured projects showcasing my front-end development skills. Visit my<a href="https://github.com/ewagorka"> Github Profile</a> to see more.
      </>
      }
      displayArea= 
      {<>
        {frontEndProjects}
      </>}
      ></ContentRow2>
      
    </section>
  )
}

export default MyWork