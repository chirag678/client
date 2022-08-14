import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [,'-100', '-75', '-25', '-50', '0', '25', '50', '75', '100', '125', '150', '175', '200'];

const data1 = [,-200, -150, -100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400];
const data2 = [,-100, -94, -75, -44, 0, 57, 125, 210, 300, 408, 528, 660,  800];

const data = {
  labels,
  datasets: [
    {
      label: '2x Leverage',
      data: data1,
      borderColor: '#4169E1',
      backgroundColor: '#4169E1',
      pointRadius: 0,
      pointHoverRadius: 1,
      borderWidth: 5,
    },
    {
      label: 'Power Perp',
      data: data2,
      borderColor: '#0ABAB5',
      backgroundColor: '#0ABAB5',
      pointRadius: 0,
      pointHoverRadius: 1,
      borderWidth: 5,
    },
  ],
};

const PriceActionGraph = ({ options }: { options: any }) => {
  return (
    <div className='w-full text-white h-full'>
      <Line options={options} data={data} />
    </div>
  )
}

export default PriceActionGraph
