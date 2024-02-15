import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom';

//Spring
import { useSpring, animated } from "@react-spring/web";

import heroImage from "../../images/image-hero.png"
import Button from 'react-bootstrap/Button';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Hero = () => {

  // Big turn animation on X axis
  const [rollIn] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: 'perspective(600px) rotateX(90deg)'
      },
      to: {
        opacity: 1,
        transform: 'perspective(600px) rotateX(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  // Small turn animation on X axis
  const [rollInSmall] = useSpring(
    () => ({
      from: {
        opacity: 0.5,
        transform: 'perspective(600px) rotateX(45deg)'
      },
      to: {
        opacity: 1,
        transform: 'perspective(600px) rotateX(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  // Big turn animation on X axis
  const [imageIntro] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: 'perspective(600px) rotateY(180deg)'
      },
      to: {
        opacity: 1,
        transform: 'perspective(600px) rotateY(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )


  return (

    <section className="jumbotron">
      <div className="container">
        <div className="row hero-row">
          <div className="col-md-6 hero-text">
            <animated.h1 style={rollIn}>👋 Hi, I’m Ewa</animated.h1>
            <animated.p style={rollInSmall} className="hero-p">I'm a growth-oriented professional, passionate about driving company success through strategic project and product management.
              <br /><br />
              Skilled in blending creativity, tech, and strategy, with expertise in product management, UI/UX design, and web development. Let's make something amazing happen!</animated.p>
            <div className="hero-buttons">
              <NavLink
                to="/mywork">
                <Button className="CTA" variant="primary" size="lg">
                  My Work
                </Button>
              </NavLink>
              <NavLink
                to="/contact">

                <Button className="CTA-secondary" variant="secondary" size="lg">
                  <MailOutlineRoundedIcon /> Contact Me
                </Button>
              </NavLink>
            </div>

          </div>
          <div className="col-md-1 hero-image">
          </div>
          <div className="col-md-5 hero-image">
            <animated.img style={imageIntro} src={heroImage} alt="Woman listening to music on headphones" className="img-fluid"></animated.img>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero