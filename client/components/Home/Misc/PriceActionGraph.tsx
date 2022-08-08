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

const labels = ['-100', '-50', '0', '50', '100', '150', '200'];

const data1 = [-200, -100, 0, 100, 200, 300, 400];
const data2 = [-100, -75, 0, 125, 300, 525, 800];

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
    },
    {
      label: 'Power Perp',
      data: data2,
      borderColor: '#0ABAB5',
      backgroundColor: '#0ABAB5',
      pointRadius: 0,
      pointHoverRadius: 1,
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
