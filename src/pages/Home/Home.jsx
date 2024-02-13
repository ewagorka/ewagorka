import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom';

import { Hero, ContentRow, ContentRow2, SkillCard } from '../../components';

//Spring
import { useSpring, animated } from "@react-spring/web";

//images
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.png"
import Button from 'react-bootstrap/Button';
import skills from "../../Skills.json"
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Home = () => {

  const skillsList = skills.map(skill => <SkillCard {...skill} key={skill.id} />)
  const [rollInExtraSmall] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: 'perspective(600px) rotateX(15deg)'
      },
      to: {
        opacity: 1,
        transform: 'perspective(600px) rotateX(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  return (
    <section className="home">
      <Hero />
      <animated.div style={rollInExtraSmall}>
      </animated.div>
      <div className="about-me">
        <ContentRow
          left={false}
          t={"About Me"}
          p={
            <>
              As Head of Product at Revolancer, I spearheaded strategic planning and user-centric UI/UX design, and was in charge of the brand’s development. By integrating comprehensive user research and data analytics, I continually enhanced our product offerings. Additionally, I managed various projects, leading cross-functional teams and orchestrating platform overhauls that accelerated user growth.
              <br /><br />
              My leadership played a pivotal role in scaling Revolancer from 200 to over 140,000 users and securing significant funding, establishing us as an industry leader featured in Forbes and Business Insider.
            </>
          }
          img={img1}
          alt={"Preview of 3 songs"}
        ></ContentRow>
      </div>

      <div className="about-me-2">
        <ContentRow
          left={true}
          t={""}
          p={
            <>
              I hold an A+ grade in Front End Web Development and UX Programme from the University of Birmingham, where I received The Anna Lebiedziewicz Outstanding Student Award. Prior to this, I achieved a First-Class Honours Degree in BSc Computer Science from Aberystwyth University, where I developed innovative projects like a Python web app using AI face recognition and OpenGL.
              <br /><br />
              Outside of work, I'm passionate about interior design and architecture, often exploring charity shops for unique finds. I also enjoy diverse creative and problem-solving games, from tabletop RPGs to Sudoku.
            </>
          }
          img={img2}
          alt={"An explanation of a song lyric"}
        ></ContentRow>
      </div>

      <div className="my-skills">
      <ContentRow2
        t={"My Skills"}
        displayArea={skillsList}
      ></ContentRow2>
      </div>
          
      <div className="contact-me">
      <ContentRow2
        t={"Contact Me"}
        displayArea={
          <>
            <NavLink
              to="/contact">

              <Button className="CTA-secondary" variant="secondary" size="lg">
                <MailOutlineRoundedIcon /> Contact Me
              </Button>
            </NavLink>
          </>
        }
      ></ContentRow2>
      </div>

    </section>
  )
}

export default Home