import React from 'react';
import ReactECharts from 'echarts-for-react';
import { data } from '../data/WineData.js'

function ScatterPlot() {
    const getColorIntensityAndHue = () => {
        // Map the data for Color Intensity and Hue into an array
        const combinedData = data.map((d) => {
            return [d[11], d[10]] // 11 and 10 are the indexes for color intensity and hue
        })
        return combinedData
    }

    const options = {
        xAxis: {
            name: 'Hue'
        },
        yAxis: {
            name: 'Color Intensity'
        },
        series: [
            {
                symbolSize: 20,
                data:
                    getColorIntensityAndHue()
                ,
                type: 'scatter',

            }
        ]
    };

    return <ReactECharts option={options} />;

}

export default ScatterPlot;
