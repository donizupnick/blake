import React from 'react';
import '../styles/components.css';

const BlackRockStyleSection = () => {
    return (
        <div className="br-section-container">
            <div className="br-content">
                <h2><i className="fas fa-chart-line"></i> BLP is Tomorrow’s Alternatives Platform</h2>
                <p>At BLP, we are committed to providing innovative and forward-thinking investment solutions. Our alternative investment platform is designed for tomorrow, ensuring that our clients are always ahead in the ever-evolving financial landscape.</p>
                <div className="br-image-container">
                    <img src="path-to-your-image.jpg" alt="Alternative Investments" />
                </div>
                <div className="br-icons">
                    <div className="br-icon">
                        <i className="fas fa-hand-holding-usd"></i>
                        <p>Investment Solutions</p>
                    </div>
                    <div className="br-icon">
                        <i className="fas fa-balance-scale"></i>
                        <p>Risk Management</p>
                    </div>
                    <div className="br-icon">
                        <i className="fas fa-chart-pie"></i>
                        <p>Diverse Portfolio</p>
                    </div>
                </div>
                <div className="br-button-container">
                    <a href="link-to-more-info" className="br-explore-button">Explore more</a>
                </div>
            </div>
        </div>
    );
};

export default BlackRockStyleSection;
