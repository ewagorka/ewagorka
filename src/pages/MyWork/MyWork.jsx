import React from 'react'
import './MyWork.css'
import { ContentRow2, ProjectCard } from '../../components';
import frontEndProjectsList from "../../FrontEndProjects.json"
import ProductAndDesignProjectList from "../../ProductAndDesignProjects.json"


const MyWork = () => {

  const frontEndProjects = frontEndProjectsList.map(project => <ProjectCard {...project} key={project.id} />)
  const productAndDesignProjects = ProductAndDesignProjectList.map(project=> <ProjectCard {...project} key={project.id}/>)

  return (
    <section>
      <ContentRow2
      t= "My Work Portfolio"
      >
      </ContentRow2>
      <ContentRow2
      t="Product and Design"
      p = "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation."
      displayArea={
        <>
        {productAndDesignProjects}
        </>
      }
      ></ContentRow2>
      <ContentRow2
      t="Front End Development"
      p = "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation."
      displayArea= 
      {<>
        {frontEndProjects}
      </>}
      ></ContentRow2>
      
    </section>
  )
}

export default MyWork