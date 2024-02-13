import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './ProjectCard.css'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const ProjectCard = ({ img, t, p, link, b,openType, tags }) => {

    return (
        <article className="result-card">
            <div className="card shadow-none project-card">
                <img className="result-card-img" src={img} />
                <div className="project-card-content">
                    <h3 className="result-card-title">{t}</h3>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <Badge className="tag" key={index} pill bg="">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <p className="result-card-text">{p}</p>
                    <NavLink
                        to={link}
                        target={openType} rel="noopener noreferrer">
                        
                        <Button className="CTA-secondary" variant="primary" size="sm">
                            {b} <ArrowForwardRoundedIcon />
                        </Button>
                    </NavLink>
                </div>
            </div>
        </article >
    )

}
export default ProjectCard;