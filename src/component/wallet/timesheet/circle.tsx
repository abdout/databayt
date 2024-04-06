import { FC } from 'react';

interface CircleProps {
  value: string;
}

type Option = 'Undefined' | 'In Progress' | 'Done' | 'Stuck' | 'Low' | 'Medium' | 'High';

const Circle: FC<CircleProps> = ({ value }) => {
  const colors: Record<Option, string> = {
    'Undefined': 'bg-gray-400',
    'In Progress': 'bg-yellow-400',
    'Done': 'bg-green-400',
    'Stuck': 'bg-red-400',
    'Low': 'bg-green-400',
    'Medium': 'bg-yellow-400',
    'High': 'bg-red-400'
  };

  return (
    <span 
      className={`inline-block w-4 h-4 rounded-full ${colors[value as Option]}`}
    />
  );
};

export default Circle;