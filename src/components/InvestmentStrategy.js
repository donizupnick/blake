import React from 'react';
import '../styles/components.css';

const InvestmentStrategy = ({ investmentStrategy }) => {
  return (
    <div className="investment-strategy-section">
      <h2>Investment Strategy</h2>
      <p>{investmentStrategy}</p>

      <div className="venn-diagram-container">
        <div className="venn-circle venn-circle-left" style={{ backgroundColor: 'rgba(76, 175, 80, 0.5)' }}>
          <span className="circle-text">Strategic</span>
        </div>
        <div className="venn-circle venn-circle-right" style={{ backgroundColor: 'rgba(33, 150, 243, 0.5)' }}>
          <span className="circle-text">Special Situation</span>
        </div>
        <div className="venn-overlap-label">
          Strategic Special Situations
        </div>
      </div>
    </div>
  );
};

export default InvestmentStrategy;
