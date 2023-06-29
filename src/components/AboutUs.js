import React from 'react';
import '../styles/components.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <h2>About Us</h2>
            <div className="row">
                <div className="column">
                    <i className="fas fa-history"></i>
                    <h3>Generations of Experience</h3>
                    <p>Blake Partners was founded upon generations of real estate experience. Our vision is to leverage the wisdom, experience, and invaluable relationships that entrench us in the market.</p>
                </div>
                <div className="column">
                    <i className="fas fa-lightbulb"></i>
                    <h3>Creative Strategy Think-Tank</h3>
                    <p>Blake is a proven value buyer and creative strategy think-tank. We apply cutting-edge quantitative analysis to enhance our qualitative abilities.</p>
                </div>
                <div className="column">
                    <i className="fas fa-handshake"></i>
                    <h3>Discreet Deal Makers</h3>
                    <p>Blake has a long history as discreet deal makers. We thrive in times of uncertainty. Through our vast network, we have no shortage of special situation opportunities both in debt, outright purchase, and the restructuring of portfolios.</p>
                </div>
            </div>
            <div className="additional-blurb">
                <p>At Blake Partners, we buy loans, underwrite loans, buy real estate outright. We focus on value-added real estate investing. We primarily target the lower-end middle market, with a preference for story deals. Currently, Blake owns about a million and a quarter to a million and a half square feet of real estate.</p>
            </div>
        </div>
    );
};

export default AboutUs;
