import React from 'react';

const Differentiators = () => {
    return (
        <div className="differentiators-container column-container">
            <div className="column">
                <img src="path_to_differentiators_image" alt="Differentiators" />
            </div>
            <div className="column">
                <h2>What Sets Us Apart</h2>
                <ul>
                    <li><img className="icon" src="path_to_icon4" alt="icon"/> Micro-level Alpha Generation</li>
                    <li><img className="icon" src="path_to_icon5" alt="icon"/> Qualitative Approach backed by Quantitative Methods</li>
                    <li><img className="icon" src="path_to_icon6" alt="icon"/> Client-Centric Philosophy</li>
                </ul>
            </div>
        </div>
    );
};

export default Differentiators;
