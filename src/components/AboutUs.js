import React from 'react';
import '../styles/components.css';

const AboutUs = () => {
    return (
        <div className="bp-about-us-container">
            <h2>About Us</h2>
            <p className="bp-intro">Welcome to Blake Partners, your trusted ally in commercial real estate investment. We are dedicated to providing innovative and value-driven investment solutions in the realm of commercial real estate.</p>

            <div className="bp-columns">

                <div className="bp-column bp-section">
                    <i className="fas fa-rocket bp-section-icon"></i>
                    <h3>Our Origin</h3>
                    <p>Blake Partners was founded with a vision to create a dynamic and versatile investment fund. Our co-founder, with a rich background in banking and investment banking, joined forces with a partner from Ross Rock, and together they embarked on a journey to redefine commercial real estate investment.</p>
                </div>

                <div className="bp-column bp-section">
                    <i className="fas fa-briefcase bp-section-icon"></i>
                    <h3>Our Expertise</h3>
                    <p>We specialize in value-added real estate investing, focusing on the lower-end middle market. Our portfolio includes distressed properties, Commercial Mortgage-Backed Securities (CMBS), and other financial instruments. Our expertise lies in identifying unique opportunities and adapting to market trends.</p>
                </div>

                <div className="bp-column bp-section">
                    <i className="fas fa-sync-alt bp-section-icon"></i>
                    <h3>Our Evolution</h3>
                    <p>Our journey has been marked by resilience and innovation. From initially buying loans to making loans, and eventually buying real estate, we have continuously evolved. The COVID-19 pandemic led us to reassess our direction, and we pivoted towards healthcare-related real estate, reflecting our ability to thrive in challenging times.</p>
                </div>

                <div className="bp-column bp-section">
                    <i className="fas fa-handshake bp-section-icon"></i>
                    <h3>Our Network</h3>
                    <p>At Blake Partners, relationships are our cornerstone. Our co-founder’s enduring relationships with industry peers have opened doors to new opportunities and collaborations. We believe in building lasting relationships with our clients and partners.</p                ></div>

            </div>

            <div className="bp-join-us">
                <h3>Join Us</h3>
                <p>We invite you to be a part of our journey as we continue to innovate and excel in commercial real estate investment. Thank you for choosing Blake Partners.</p>
            </div>
        </div>
    );
};

export default AboutUs;
