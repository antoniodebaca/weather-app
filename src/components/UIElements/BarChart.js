import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import WeatherBox from '../WeatherBox';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



const BarChart = props => {

    const labels = props.items.daily.map(n => new Date(n.dt * 1000).getDate());
    const data = {
      labels,
      datasets: [
        {
          label: 'Highs',
          data: props.items.daily.map(n => n.temp.max),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Lows',
          data: props.items.daily.map(n => n.temp.min),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

   const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            displayColors: false,
            
            callbacks: {
                title: function(item, everything) {
                    return;
                },
                label: function(item, everything) { 
                    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                    let MonthOfTool = new Date(props.items.daily[item.dataIndex].dt * 1000).getMonth();
                    let label = item.label + ' of ' + month[MonthOfTool] +'.\n' +
                    'Min: ' + props.items.daily[item.dataIndex].temp.min + ' ' + 
                    'Max: ' + props.items.daily[item.dataIndex].temp.max;
                    return label;
                },
                footer: function(item, everything) {
                    let dataNew = 'Description ' + props.items.daily[item[0].dataIndex].weather[0].description;
                    return dataNew;
                }
            }
        },
        },
      };

    return (
        <div>
            <Bar options={options} data={data} />;
        </div>
    );
};

export default BarChart;