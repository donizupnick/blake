import React, { useEffect } from 'react';
import Plotly from 'plotly.js';
import './CorrelationMatrix.css';

const CorrelationMatrix = () => {
    useEffect(() => {
        const variables = ['Vacancy', 'Socio-economic', 'Demographics', 'Urban Distance', 'Suburban Density', 'Race', 'Religion', 'Religious Institutions', 'Private Schools'];
        const timeSeriesLength = 10 * 12; // 10 years of monthly data
        const data = [];

        // Generate fake data
        for (let i = 0; i < variables.length; i++) {
            const timeSeriesData = Array.from({ length: timeSeriesLength }, () => Math.random());
            data.push(timeSeriesData);
        }

        // Calculate correlation matrix
        const correlationMatrix = [];
        for (let i = 0; i < variables.length; i++) {
            const row = [];
            for (let j = 0; j < variables.length; j++) {
                const correlation = Math.random(); // Placeholder for correlation calculation
                row.push(correlation);
            }
            correlationMatrix.push(row);
        }

        // Plot the correlation matrix
        const trace = {
            x: variables,
            y: variables,
            z: correlationMatrix,
            type: 'heatmap'
        };

        const layout = {
            title: 'Correlation Matrix',
            xaxis: {
                title: 'Variables'
            },
            yaxis: {
                title: 'Variables'
            }
        };

        Plotly.newPlot('correlationMatrix', [trace], layout);
    }, []);

    return (
        <div className="correlation-matrix-container">
            <div id="correlationMatrix"></div>
        </div>
    );
};

export default CorrelationMatrix;
