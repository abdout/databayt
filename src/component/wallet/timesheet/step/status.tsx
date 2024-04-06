import { FC } from 'react';

interface StatusProps {
  status: string;
  setStatus: (status: string) => void;
}

type Option = 'Undefined' | 'In Progress' | 'Done' | 'Stuck';

const Status: FC<StatusProps> = ({ status, setStatus }) => {
  const options: Option[] = ['Undefined', 'In Progress', 'Done', 'Stuck'];
  const colors: Record<Option, string> = {
    'Undefined': 'bg-gray-400',
    'In Progress': 'bg-yellow-400',
    'Done': 'bg-green-400',
    'Stuck': 'bg-red-400'
  };

  return (
    <div>
      {options.map((option) => (
        <div 
          key={option} 
          onClick={() => setStatus(option)}
          className={`flex items-center cursor-pointer text-lg ${status === option ? 'opacity-100' : 'opacity-50'}`}
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

export default Status;