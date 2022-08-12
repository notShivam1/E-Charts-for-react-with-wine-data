import './App.css';
import React from 'react';
import ScatterPlot from './charts/ScatterPlot.js' 
import BarPlot from './charts/BarPlot.js' 

function App() {
  return (
    <div>
      <BarPlot />
      <ScatterPlot />
    </div>
  );
}

export default App;
