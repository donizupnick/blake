import React from 'react';
import './styles/components.css';
import TitlePage from './components/TitlePage';
import AboutUs from './components/AboutUs';
// import BlakePartnersStart from './components/BlakePartnersStart';
import InvestingStrategy from './components/InvestingStrategy';
import Differentiator from './components/Differentiator';
import Conclusion from './components/Conclusion';

function App() {
    return (
        <div className="App">
            <TitlePage />
            <AboutUs />
            {/* <BlakePartnersStart /> */}
            <InvestingStrategy />
            <Differentiator />
            <Conclusion />
        </div>
    );
}

export default App;
