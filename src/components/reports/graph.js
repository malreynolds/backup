import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
  chart: {
      type: 'column'
  },
  title: {
    text: 'Driver Performance'
  },
  yAxis: {min: 0, max: 100},
  xAxis: {
    categories: ['Wc 28/03', 'Wc 28/03', 'Wc 28/03', 'Wc 28/03', 'Wc 28/03', 'Wc 28/03', 'Wc 28/03', 'Wc 28/03']
  },
  series: [{
    name: "Average Score",
    data: [29.9, 71.5, 96.4, 29.2, 48.5, 16.4, 92.6, 54.4]
  }]
};



export default class DataGraph extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <ReactHighcharts config={config}></ReactHighcharts>
        );
    }
}
