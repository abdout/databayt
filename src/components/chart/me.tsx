"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useMember } from '../platform/member/context';


Chart.register(...registerables);

const MemberChart: React.FC = () => {
  const { members } = useMember();

  const data = {
    labels: members.map(member => member.name),
    datasets: [
      {
        label: 'Member Interests',
        data: members.map(member => member.interest.length), // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MemberChart;
