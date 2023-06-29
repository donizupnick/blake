import React from 'react';
import '../src/styles/main.css';
import '../src/styles/components.css';
import TitlePage from '../src/components/TitlePage';
import AboutUs from '../src/components/AboutUs';
import MeetTheTeam from '../src/components/MeetTheTeam';
import InvestmentStrategy from '../src/components/InvestmentStrategy';
import Differentiators from '../src/components/Differentiators';
import InvestmentOpportunities from '../src/components/InvestmentOpportunities';
import ConclusionAndCallToAction from '../src/components/ConclusionAndCallToAction';
import BlackRockStyleSection from './components/TestBlackstone';

const App = () => {
    return (
        <div>
            <TitlePage />
            <BlackRockStyleSection />
            <AboutUs />
            <MeetTheTeam />
            <InvestmentStrategy />
            <Differentiators />
            <InvestmentOpportunities />
            <ConclusionAndCallToAction />
        </div>
    );
};

export default App;
