import React from 'react';

const Cross: React.FC = () => {
  return (
    <div className="w-5 h-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div className="w-full h-[2px] bg-white top-1/2 absolute -translate-y-1/2" />
      <div className="w-full h-[2px] bg-white top-1/2 absolute -translate-y-1/2 rotate-90" />
    </div>
  );
};

export default Cross; 