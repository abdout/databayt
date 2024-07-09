import { Component } from '@/components/chart/a';
// import { DountChart } from '@/components/chart/ch';
import { DountChart } from '@/components/chart/pie';
import React from 'react'

interface ChartProps {
  onClose: () => void;
}
const MemberChart: React.FC<ChartProps> = ({ onClose }) => {
  return (
    <div>
      <Component />
      <DountChart />
      <DountChart />
    </div>
  )
}

export default MemberChart




