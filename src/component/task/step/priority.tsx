import { FC } from 'react';

interface PriorityProps {
  priority: string;
  setPriority: (priority: string) => void;
}

type Option = 'Undefined' | 'Low' | 'Medium' | 'High';

const Priority: FC<PriorityProps> = ({ priority, setPriority }) => {
  const options: Option[] = ['Undefined', 'Low', 'Medium', 'High'];
  const colors: Record<Option, string> = {
    'Undefined': 'bg-gray-400',
    'Low': 'bg-green-400',
    'Medium': 'bg-yellow-400',
    'High': 'bg-red-400'
  };

  return (
    <div>
      {options.map((option) => (
        <div 
          key={option} 
          onClick={() => setPriority(option)}
          className={`flex items-center cursor-pointer text-lg ${priority === option ? 'opacity-100' : 'opacity-50'}`}
        >
          <span 
            className={`inline-block w-4 h-4 rounded-full mr-3 ${colors[option]}`}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default Priority;