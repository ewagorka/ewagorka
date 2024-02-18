import React from 'react'
import './HibernianFC.css'
import HibernianProcess from "../../images/HibernianFCProcess.png"
import HibernianHero from "../../images/HibernianHero.png"
import HibernianPhotos from "../../images/HibernianPhotos.png"
import PlusPageMarketing from "../../images/plusPageMarketing.png"
import Slide1 from "../../images/Hibernian1.png"
import Slide2 from "../../images/Hibernian2.png"
import Slide3 from "../../images/Hibernian3.png"
import Slide4 from "../../images/Hibernian4.png"
import Slide5 from "../../images/Hibernian5.png"
import Slide6 from "../../images/Hibernian6.png"


const HibernianFC = () => {

    return (
        <section className="jumbotron project-background">
            <div className="container ">
                <div className="row project-hero">
                    <div className="col-md-7 hero-text">
                        <h1>Hibernian FC<br /> Pitch Deck</h1>
                        <p>One of my most significant projects in my freelance journey was overseeing the creation of Hibernian FC's commercial partnership deck in collaboration with a skilled copywriter. This case study showcases the process of crafting a compelling pitch deck designed to appeal to potential advertisers and drive revenue growth for the club.</p>
                    </div>
                    <div className="col-md-5 hero-image">
                        <img className="project-img" src={HibernianHero} alt="" />
                    </div>
                </div>

                <div className="row project-section">
                    <div className="col-md-8 ">
                        <h2>The Project</h2>
                        <br />
                        <h5>The Task:</h5>
                        <p>Hibernian FC required a presentation to attract advertisers for the 2022/23 season. They needed a comprehensive pitch deck that showcased key elements such as their reach, blanket coverage, audience demographic, and unique value propositions.</p>
                        <br />
                        <h5>The Solution:</h5>
                        <p>A professional pitch deck that highlighted Hibernian FC's strengths and unique selling points. Through strategic design and compelling messaging, we aimed to create a document that would effectively communicate the club's value proposition to potential advertisers, ultimately driving revenue growth through commercial partnerships.</p>
                        <br />
                    </div>
                    <div className="col-md-4 hero-image">
                        <img className="project-img" src={HibernianPhotos} alt="" />
                    </div>
                </div>

                <div className="row project-section">
                <div className="col-md-3 hero-image">
                        <img className="project-img" src={HibernianProcess} alt="" />
                    </div>
                    <div className="col-md-9 ">
                        <h5>The Process:</h5>
                        <br />
                        <ol>
                            <li><b>Understanding Club Expectations:</b> Prior to commencement, I engaged in discussions with the club's manager to fully grasp their expectations and vision for the commercial partnership deck, ensuring alignment with their objectives and requirements.</li>
                            <li><b>Leveraging Company Assets:</b> Utilising Hibernian FC's brand assets, including logos, colours, and imagery, I created a visually cohesive and brand-aligned pitch deck. These elements were strategically incorporated to reinforce the club's identity and appeal to potential advertisers.</li>
                            <li><b>Value-Driven Design:</b> Each slide was meticulously crafted to highlight the value proposition for potential advertisers. From showcasing the club's rich history and fan base to outlining sponsorship opportunities and marketing benefits, every aspect of the deck was designed to resonate with advertisers' needs and objectives.</li>
                            <li><b>Client Collaboration:</b> Throughout the process, I maintained open communication with the client, seeking their input and feedback to ensure the deck aligned with their goals and expectations. Regular updates and revisions were made based on their feedback, ensuring the final product met their requirements.</li>
                        </ol>
                    </div>

                </div>
                <div className="row project-section">
                <h5>Featured Slides:</h5>
                <div className="col-md-12 slide-gallery">
                        <img src={Slide1} alt="" />
                        <img src={Slide2} alt="" />
                        <img src={Slide3} alt="" />
                        <img src={Slide4} alt="" />
                        <img src={Slide5} alt="" />
                        <img src={Slide6} alt="" />
                    </div>

                </div>

                <div className="row project-section">
                    <div className="col-md-8 ">
                        <h5>The Outcome:</h5>
                        <p>Dhe commercial partnership deck received positive feedback from the Hibernian FC team, with Murray Milligen, Hibs Commercial Manager, praising our professionalism and attention to detail. </p>
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