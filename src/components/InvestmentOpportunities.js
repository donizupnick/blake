import React from 'react';

const InvestmentOpportunities = () => {
    return (
        <div className="opportunities-container column-container">
            <div className="column">
                <img src="path_to_opportunities_image" alt="Opportunities" />
            </div>
            <div className="column">
                <h2>Investment Opportunities and Scenarios</h2>
                <ul>
                    <li><img className="icon" src="path_to_icon7" alt="icon"/> Cross Asset Dislocations</li>
                    <li><img className="icon" src="path_to_icon8" alt="icon"/> Retail Market Nuances</li>
                    <li><img className="icon" src="path_to_icon9" alt="icon"/> Warehouse Balloon Payments</li>
                </ul>
            </div>
        </div>
    );
};

export default InvestmentOpportunities;
