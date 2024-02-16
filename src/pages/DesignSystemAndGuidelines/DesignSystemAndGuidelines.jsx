import React from 'react'
import './DesignSystemAndGuidelines.css'
import DesignAndGuidelines from "../../images/design&guidelines.png"
import DesignSystem from "../../images/designSystem.png"
import ConsistentBranding from "../../images/consistentBranding.png"
import DesignSystemOutcome from "../../images/designSystemOutcome.png"


const DesignSystemAndGuidelines = () => {

    return (
        <section className="jumbotron project-background">
            <div className="container ">
                <div className="row project-hero">
                    <div className="col-md-7 hero-text">
                        <h1>Design System & Brand Guidelines</h1>
                        <p>As the Head of Product at Revolancer, I recognised the importance of establishing a cohesive design framework to drive efficiency in development and maintain brand consistency across various channels. This case study explores my role in creating a comprehensive Design System in Figma, alongside guidelines to unify the team's understanding and execution of our brand vision.</p>
                    </div>
                    <div className="col-md-5 hero-image">
                        <img className="project-img" src={DesignAndGuidelines} alt="" />
                    </div>
                </div>

                <div className="row project-section">
                    <div className="col-md-9 ">
                        <h2>The Project</h2>
                        <br />
                        <h5>The Challenge:</h5>
                        <p>Revolancer faced the challenge of maintaining consistency in design elements across the platform and marketing channels. With a growing team and evolving product, it became imperative to establish a robust framework that would streamline development and reinforce our brand identity.</p>
                        <br />
                        <h5>The Solution:</h5>
                        <p>I spearheaded the creation of a Design System in Figma. This system encompassed a range of design elements, including colour palette, typography, buttons, navigation, modals, pop-ups, forms, and bespoke Revolancer-specific components. By consolidating these elements into a single repository, we ensured consistency in both product design and marketing materials.</p>
                        <br />
                    </div>
                    <div className="col-md-3 hero-image">
                        <img className="project-img" src={ConsistentBranding} alt="" />
                    </div>
                </div>

                <div className="row project-section">
                    <div className="col-md-4 hero-image">
                        <img className="project-img" src={DesignSystem} alt="" />
                    </div>
                    <div className="col-md-8 ">
                        <h5>The Process:</h5>
                        <br />
                        <ol>
                            <ol>
                                <li><b>Research and Analysis:</b> I began by conducting research into industry best practices and analysing our existing design assets and branding guidelines.</li>
                                <li><b>Component Identification:</b> Working closely with our design team, I identified core components used across the platform and marketing channels, including UI elements and brand assets.</li>
                                <li><b>Design System Development:</b> Using Figma, I created a centralised Design System that housed all essential design elements, categorised by function and purpose. This included defining a cohesive colour palette, typography styles, and reusable components such as buttons, forms, and modals.</li>
                                <li><b>Documentation and Guidelines:</b> In addition to the Design System, I developed comprehensive guidelines to ensure alignment across the team. This included brand overview, brand voice, persona, target audience, communication guidelines, and design principles.</li>
                                <li><b>Team Training and Onboarding:</b> I conducted training sessions to familiarise the team with the Design System and guidelines, ensuring everyone understood their role in maintaining consistency and efficiency.</li>
                            </ol>
                        </ol>
                        <br />
                    </div>

                </div>

                <div className="row project-section">
                    <div className="col-md-8 ">
                        <h5>The Outcome:</h5>
                        <p>The implementation of the Design System and guidelines yielded significant benefits for Revolancer:</p>
                        <br />
                        <ul>
                            <li><b>Improved Efficiency:</b> Developers and designers could quickly access and utilise pre-defined design components, reducing development time and effort.</li>
                            <li><b>Consistent Branding:</b> The Design System ensured consistency in branding across all touchpoints, enhancing the user experience and reinforcing brand identity.</li>
                            <li><b>Streamlined Onboarding:</b> New team members could easily familiarise themselves with the brand and design standards, accelerating their integration into the team.</li>
                        </ul>

                    </div>
                    <div className="col-md-4 hero-image">
                        <img className="project-img" src={DesignSystemOutcome} alt="" />
                    </div>
                </div>


            </div>
        </section >
    )
}

export default DesignSystemAndGuidelines