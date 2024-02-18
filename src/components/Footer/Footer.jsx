import React from 'react'
import './Footer.css'
import Github from "../../images/GithubIcon.png"
import LinkedIn from "../../images/LinkedInIcon.png"


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 footer-elements">
            <p> © 2024 Ewa Gorka</p>
            <div className= "icons">
            <a href="https://www.linkedin.com/in/ewa-g%C3%B3rka-9003b2167/"><img src={LinkedIn} alt="" /></a>
            <a href="https://github.com/ewagorka"><img src={Github} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer