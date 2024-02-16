import React from 'react'
import './HibernianFC.css'
import PlusPageGrey from "../../images/plusPageGrey.png"
import PlusPageHero from "../../images/plusPageHero.png"
import PlusPageProcess from "../../images/plusPageProcess.png"
import PlusPageMarketing from "../../images/plusPageMarketing.png"


const HibernianFC = () => {

    return (
        <section className="jumbotron project-background">
            <div className="container ">
                <div className="row project-hero">
                    <div className="col-md-7 hero-text">
                        <h1>Plus.Page</h1>
                        <p>Plus.Page was a new product designed to cater to freelancers of all levels, providing them with a sleek and versatile alternative to linktree. This case study delves into the journey of conceptualising, designing, and launching Plus.Page, and its subsequent impact on revenue generation for the company.</p>
                    </div>
                    <div className="col-md-5 hero-image">
                        <img className="project-img" src={PlusPageHero} alt="" />
                    </div>
                </div>

                <div className="row project-section">
                    <div className="col-md-8 ">
                        <h2>The Project</h2>
                        <br />
                        <h5>The Challenge:</h5>
                        <p>Tasked with developing a product that would resonate with freelancers and contribute to the company's revenue stream, I faced the challenge of creating an attractive and universal solution within a tight timeframe of two weeks. Plus.Page needed to offer simplicity, versatility, and appeal to freelancers regardless of their experience level.</p>
                        <br />
                        <h5>The Solution:</h5>
                        <p>To meet these challenges, I conceptualised Plus.Page as a simple yet powerful platform for freelancers to showcase their work and personal brand. Embracing a minimalist design approach and offering a wide range of colour palette options, I ensured that Plus.Page would be visually appealing and universally adaptable. Additionally, I designed a user-friendly website to serve as the storefront for selling Plus.Pages, enhancing the overall user experience.</p>
                        <br />
                    </div>
                    <div className="col-md-4 hero-image">
                        <img className="project-img" src={PlusPageGrey} alt="" />
                    </div>
                </div>

                <div className="row project-section">
                    <div className="col-md-4 hero-image">
                        <img className="project-img" src={PlusPageProcess} alt="" />
                    </div>
                    <div className="col-md-8 ">
                        <h5>The Process:</h5>
                        <br />
                        <p>To address the challenge of creating Plus.Page within a tight two-week timeframe, I embarked on a comprehensive process that encompassed research, design preparation, collaboration with the marketing team, and iterative development.</p>
                        <br />
                        <ol>
                            <li><b>Research and Feature Prioritisation:</b> I conducted thorough research to identify key features that could be feasibly incorporated into Plus.Page without compromising quality or usability. Prioritising simplicity, versatility, and user-friendliness, I pinpointed essential aspects of the product to ensure genuine value for freelancers.</li>
                            <li><b>Design Preparation:</b> Meticulously preparing designs for all Plus.Page colour variants, I ensured a diverse range of options to cater to different freelancer preferences. Simultaneously, I crafted designs for the marketing page, focusing on clear messaging and compelling visuals to effectively communicate the value proposition of Plus.Page to potential users.</li>
                            <li><b>Collaboration with Marketing Team:</b> Working closely with the marketing team, I identified and established collaborations with freelance influencers. Leveraging their reach and influence, we effectively promoted Plus.Page within the freelance community, amplifying its visibility and driving adoption rates.</li>
                            <li><b>Iterative Development:</b> Adopting an iterative approach to development, I continuously refined features and designs based on feedback from internal stakeholders and potential users. This agile methodology ensured that Plus.Page evolved in response to user needs and market demands, enhancing its effectiveness and relevance within the freelance landscape.</li>
                        </ol>
                        <br />
                    </div>

                </div>

                <div className="row project-section">
                    <div className="col-md-8 ">
                        <h5>The Outcome:</h5>
                        <p>Despite the tight timelines, Plus.Page emerged as a resounding success, offering freelancers a simple yet powerful platform to showcase their work and personal brand. Collaborations with freelance influencers further amplified Plus.Page's visibility, driving strong adoption rates and revenue growth for the company.</p>
                    </div>
                    <div className="col-md-4 hero-image">
                        <img className="project-img" src={PlusPageMarketing} alt="" />
                    </div>
                </div>


            </div>
        </section >
    )
}

export default HibernianFC