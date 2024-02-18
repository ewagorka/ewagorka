import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom';

//Spring
import { useSpring, animated } from "@react-spring/web";

import heroImage from "../../images/image-hero.png"
import Button from 'react-bootstrap/Button';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Hero = () => {

  return (

    <section className="jumbotron">
      <div className="container">
        <div className="row hero-row">
          <div className="col-md-6 hero-text">
            <h1>👋 Hi, I’m Ewa</h1>
            <p className="hero-p">I'm a growth-oriented professional, passionate about driving company success through strategic project and product management.
              <br /><br />
              Skilled in blending creativity, tech, and strategy, with expertise in product management, UI/UX design, and web development. Let's make something amazing happen!</p>
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
            <img src={heroImage} alt="Woman listening to music on headphones" className="img-fluid"></img>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero