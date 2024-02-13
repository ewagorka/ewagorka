import React from 'react'
import './MyWork.css'
import { ContentRow2, SkillCard, ProjectCard } from '../../components';


const MyWork = () => {

  return (
    <section>
      <ContentRow2
      t= "My Work Portfolio"
      >
      </ContentRow2>
      <ContentRow2
      t="Product and Design"
      p = "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation."
      ></ContentRow2>
      <ContentRow2
      t="Front End Development"
      p = "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation."
      displayArea= 
      {<>
        <ProjectCard
        img='https://yt3.ggpht.com/0aGM9FXt_a918fMcBn6VsybJ_7vxGQHEqyAQ4EXRXW9kKPpPhS0FtCeKehF9kVznUpjoL4YLroM=s48-c-k-c0x00ffffff-no-rj'
        t='TITLTe'
        tags={['html','css']}
        p= 'YOYOYOYOY'
        link='/contact'
        b='Click Me'
        openType="_blank"
        >
        </ProjectCard>
        <ProjectCard
        img='https://yt3.ggpht.com/0aGM9FXt_a918fMcBn6VsybJ_7vxGQHEqyAQ4EXRXW9kKPpPhS0FtCeKehF9kVznUpjoL4YLroM=s48-c-k-c0x00ffffff-no-rj'
        t='TITLTe'
        tags={['html','css']}
        p= 'YOYOYOYOY'
        link='/contact'
        b='Click Me'
        >
        </ProjectCard>
      </>}
      ></ContentRow2>
      
    </section>
  )
}

export default MyWork