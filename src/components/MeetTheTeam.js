import React from 'react';

const MeetTheTeam = () => {
    return (
        <div className="team-container">
            <h2>Meet the Team</h2>
            <div className="column-container">
                <div className="column team-member">
                    <img className="team-member-image" src="path_to_personA_image.jpg" alt="Person A" />
                    <div>
                        <h3>Person A</h3>
                        <p>Co-founder with expertise in commercial real estate.</p>
                    </div>
                </div>
                {/* Add more team members in a similar fashion */}
            </div>
        </div>
    );
};

export default MeetTheTeam;
