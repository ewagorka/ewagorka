import React from 'react'
import './SkillCard.css'

const SkillCard = ({ img, t, p }) => {

  return (
    <article className="result-card">
      <div className="card shadow-none skill-card">
        <img className="result-card-img" src={img} />
        <h3 className="result-card-title">{t}</h3>
        <p className="result-card-text">{p}</p>
      </div>
    </article >
  )
}

export default SkillCard