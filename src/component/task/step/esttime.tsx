import React, { useEffect, useState } from 'react';

const EstTime = (props: { estTime: string; setEstTime: (value: string) => void }) => {
  const options = ['2', '4', '6', '8', '10', '12'];
  const [selected, setSelected] = useState('4');

  useEffect(() => {
    props.setEstTime(selected);
  }, []);

  const handleClick = (option: string) => {
    setSelected(option);
    props.setEstTime(option);
  };

  return (
    <div className="space-y-2">
      <div className="text-2xl">{selected.padStart(2, '0')} hr</div>
      <hr className='mb-4'/>
      <div className="flex justify-between space-x-2">
        {options.map((option, i) => (
          <div 
            key={i} 
            className={`w-8 h-8 rounded-full border border-black flex items-center justify-center cursor-pointer ${selected === option ? 'opacity-100' : 'opacity-50'}`} 
            onClick={() => handleClick(option)}
          >
            {option.padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstTime;