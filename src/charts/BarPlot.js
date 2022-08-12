import React from 'react';
import ReactECharts from 'echarts-for-react';
import { data } from '../data/WineData.js'
import '../css/Plot.css';

function ScatterPlot() {
    const getAlcoholAndMalicAcid = () => {
        // Map the data for Alcohol and Malic Acid into an array
        const combinedData = data.map((d) => {
            return [d[1], d[2]] // 1 and 2 are the indexes for alcohol and malic acid
        })
        return combinedData
    }

    const options = {
        xAxis: {
            name: "Alcohol",
            type: 'category',
        },
        yAxis: {
            name: "Malic Acid",
            type: 'value'
        },
        series: [
            {
                data: getAlcoholAndMalicAcid(),
                type: 'bar',
            }
        ]
    };

    return (
        <div>
            <h1 className="h1">Bar Plot</h1>
            <ReactECharts option={options} />
        </div>
    )
}

export default ScatterPlot;
