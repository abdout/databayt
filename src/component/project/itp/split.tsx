import React from 'react';

const Split = (props: {head?: boolean}) => {
  return (
    <div className={`border-l w-[180px] ${props.head ? 'border-t' : ''} border-black bg-gray-300`}>
      {props.head && (
        <div className="flex border-b border-black px-2 py-1 font-bold text-center justify-center">
          Inspection by
        </div>
      )}
      <div className="flex text-[8px]">
        <div className="flex-1 border-r border-black px-1 py-1 text-center text-base font-bold">cont</div>
        <div className="flex-1 border-r border-black px-1 py-1 text-center text-base font-bold">cust</div>
        <div className="flex-1 border-r border-black px-1 py-1 text-center text-base font-bold">cons</div>
        <div className="flex-1 px-2 py-1 text-center text-base font-bold">own</div>
      </div>
    </div>
  );
};

export default Split;