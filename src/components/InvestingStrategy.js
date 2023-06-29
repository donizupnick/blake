import React from 'react';
import '../styles/components.css';

const InvestingStrategy = () => {
    return (
        <div className="investing-strategy">
            <h2>Investment Strategy</h2>
            
            {/* Process Step 1 */}
            <div className="process-row">
                <div className="process-step">
                    <i className="fas fa-envelope-open-text"></i>
                    <h3>Receive Off-Market Special Situations</h3>
                    <p>Our stellar reputation as discreet deal-makers make us the first stop for exclusive off-market opportunities through a vast network of sellers. </p>
                </div>
                <div className="process-detail">
                    <p>With years of experience and a large client base in Blake's advisory and Brokerage business, we have built a reputation as trustworthy deal makers. Our extensive network brings in a plethora of special situation deals, making us the first stop for institutional clients and family offices looking to offload assets. These assets range from institutional quality to opportunistic assets and securities.</p>
                </div>
            </div>
            
            {/* Process Step 2 */}
            <div className="process-row">
                <div className="process-step">
                    <i className="fas fa-filter"></i>
                    <h3>Screen for Value & Strategy Alignment</h3>
                    <p>We meticulously screen opportunities for alignment with our value and strategy. Our strategy is built around specific and creative market dislocations and structural shifts</p>
                </div>
                <div className="process-detail">
                    <p>We employ a rigorous screening process to evaluate the potential of each opportunity. By analyzing various factors such as market trends, asset quality, and financial projections, we ensure that the opportunities align with our investment values and strategies. This alignment is crucial for optimizing returns and mitigating risks.</p>
                </div>
            </div>
            
            {/* Process Step 3 */}
            <div className="process-row">
                <div className="process-step">
                    <i className="fas fa-shield-alt"></i>
                    <h3>Screen for Large Fundamental Margin of Safety</h3>
                    <p>We ensure a large fundamental margin of safety in our investments.</p>
                </div>
                <div className="process-detail">
                    <p>Our investment philosophy emphasizes the importance of a margin of safety. We seek opportunities where there is a significant difference between the intrinsic value of an investment and its market price. This margin acts as a safety net against uncertainties and fluctuations in the market, protecting our investments from downside risks.</p>
                </div>
            </div>
            
            {/* Process Step 4 */}
            <div className="process-row">
                <div className="process-step">
                    <i className="fas fa-wrench"></i>
                    <h3>Actively Add Value to Property</h3>
                    <p>We take an active role in adding value to the properties we invest in.</p>
                </div>
                <div className="process-detail">
                    <p>Adding value to properties is a cornerstone of our investment strategy. Through renovations, efficient property management, and strategic leasing, we enhance the appeal and functionality of our properties. This active involvement not only increases the property's market value but also attracts quality tenants, ensuring a steady stream of revenue.</p>
                </div>
            </div>
            
            {/* Process Step 5 */}
            <div className="process-row">
                <div className="process-step">
                    <i className="fas fa-chart-line"></i>
                    <h3>Passively Add Value</h3>
                    <p>We passively add value as our strategic dislocation converges to the market value.</p>
                </div>
                <div className="process-detail">
                    <p>Aside from our active involvement, we also recognize the importance of passive value addition. By strategically positioning our investments in markets with strong growth potential, we benefit from the natural appreciation of property values over time. This passive value addition complements our active strategies, creating a balanced and robust investment approach.</p>
                </div>
            </div>
            
            {/* Process Step 6 */}
            <div className="process-row">
                <div className="process-step">
                    <i className="fas fa-hand-holding-usd"></i>
                    <h3>Return Capital to Investors</h3>
                    <p>We prioritize returning capital to our investors.</p>
                </div>
                <div className="process-detail">
                    <p>Our ultimate goal is to generate substantial returns for our investors. After successfully adding value to our properties and realizing gains, we focus on returning capital to our investors in a timely manner. This commitment to our investors' success is what drives our strategies and operations.</p>
                </div>
            </div>
        </div>
    );
};

export default InvestingStrategy;
