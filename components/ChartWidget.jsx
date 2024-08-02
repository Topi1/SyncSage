
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartWidget = ({ data, id, removeWidget }) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h3>Chart</h3>
        
      </div>
      <div className="widget-content">
        <Pie data={data} />
      </div>
      <button onClick={() => removeWidget(id)}>Remove</button>
    </div>
  );
};

export default ChartWidget;
