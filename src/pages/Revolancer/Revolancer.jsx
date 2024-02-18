import React from 'react'
import './Revolancer.css'
import { ContentRow, ContentRow2, ProjectCard } from '../../components';
import AgileGraphic from "../../images/agile.png"
import RevolancerLaptop from "../../images/revolancerLaptop.png"
import PlatformChange from "../../images/platformChange.png"
import RevolancerPhones from "../../images/revolancerPhones.png"


const Revolancer = () => {

    return (
        <section className="jumbotron project-background">
            <div className="container ">
                <div className="row project-hero">
                    <div className="col-md-7 hero-text">
                        <h1>Revolancer</h1>
                        <p>As the Head of Product at Revolancer, I led a collaborative effort with my team to revolutionise the freelancing landscape. This case study highlights our journey in pivoting from a conventional freelance marketplace to a dynamic platform centred around skill swapping tools.</p>
                    </div>
                    <div className="col-md-5 hero-image">
                    <img className="project-img" src={RevolancerLaptop} alt="" />
                    </div>
                </div>

                <div className="row project-section">
                    <div className="col-md-9 ">
                        <h2>The Project</h2>
                        <br />
                        <h5>The Challenge:</h5>
                        <p>Revolancer faced a pivotal moment, requiring a departure from the traditional freelance marketplace model. Recognising the limitations of client-centric interactions, we aimed to empower freelancers through a platform fostering collaboration and professional development, independent of client reliance.</p>
                        <br />
                        <h5>The Solution:</h5>
                        <p>Our solution was informed by extensive research and user feedback, revealing a growing demand among freelancers for collaborative skill exchanges. This insight led us to develop a platform dedicated to facilitating such interactions, empowering freelancers to grow their businesses while reducing costs.</p>
                        <br />
                    </div>
                    <div className="col-md-3">
                    <img className="project-img" src={PlatformChange} alt="" />
                    </div>
                </div>

                <div className="row project-section">
                <div className="col-md-4">
                    <img className="project-img" src={AgileGraphic} alt="" />
                    </div>
                    <div className="col-md-8 left-paragraph">
                        <h5>The Process:</h5>
                        <p>My role in this transformation comprised several key phases:</p>
                        <br />
                        <ol>
                            <li> <b>Designing the MVP:</b> I initiated the process by creating designs for a Minimum Viable Product (MVP), laying the groundwork for subsequent development iterations.</li>
                            <li> <b>User-Centric Prototyping:</b> I established a dedicated user research team to create prototypes for rigorous testing, ensuring that user experience remained paramount throughout the development cycle.</li>
                            <li> <b>Collaborative Development Roadmap:</b> Working closely with our CTO, we mapped out development plans and conducted regular check-ins to monitor progress and address technical challenges.</li>
                            <li><b>Pre-Launch Marketing Strategy:</b> I collaborated with the marketing team to prepare a comprehensive pre-launch strategy, including introductory videos, articles, and targeted campaigns.</li>
                            <li><b>Rigorous Testing and User Engagement:</b> I managed a thorough testing phase to ensure platform readiness before launch. Post-launch, I led a user engagement team to gather insights and foster ongoing communication with our user base.</li>
                            <li><b>Continuous Improvement:</b> Leveraging user feedback and the company's KPIs, I collaborated with stakeholders to iterate on the platform's features, ensuring alignment with user needs and business objectives.</li>
                        </ol>
                        <br />
                    </div>
                    
                </div>

                <div className="row project-section">
                    <div className="col-md-8 ">
                        <h5>The Outcome:</h5>
                        <p>Our collaborative efforts yielded significant results, with Revolancer attracting over 140,000 users within less than a year of its launch. This success underscores the effectiveness of our strategic approach and our commitment to meeting user needs.</p>
                    </div>
                    <div className="col-md-4">
                    <img className="project-img" src={RevolancerPhones} alt="" />
                    </div>
                </div>

                
            </div>
        </section >
    )
}

export default Revolancer