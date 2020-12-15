import React from "react";
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,VerticalGridLines,HorizontalGridLines,XAxis,YAxis,VerticalBarSeries,MarkSeries} from 'react-vis';
import croc from "../croc.jpg"


const Chart = () => {
    const data = [
        
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9}
        
      ];
  return <div>
      
      <XYPlot height={200} width={400}>
  <VerticalBarSeries data={data} />
  <XAxis tickValues={[ 1,2, 3]} title="doors" />
  <YAxis />
</XYPlot>

  </div>;
};

export default Chart;
