import React from 'react';

const Cell = (props: {
  data: string | string[];
  bg?: number;
  head?: boolean;
  alian?: boolean;
  bottom?: boolean;
  end?: boolean;
  top?: boolean;
  width?: string;
}) => {
  let bg = '';
  if (props.bg === 1) {
    bg = 'bg-gray-300';
  } else if (props.bg === 2) {
    bg = 'bg-yellow-400';
  }

  return (
    <div 
      style={{width: props.width ? `${props.width}px` : undefined}}
      className={`border-l border-black p-2 text-sm
      ${props.top !== false ? 'border-t' : ''}
      ${bg} 
      ${props.head ? 'font-bold' : 'font-normal'} 
      ${props.alian ? 'text-start' : 'text-center'} ${props.bottom ? 'border-b' : ''}
      ${props.end ? 'border-r' : ''}
      `}
    >
      {Array.isArray(props.data)
        ? <div className="flex flex-col items-center justify-center h-full ">
            {props.data.map((item, index) => <div key={index}>{item}</div>)}
          </div>
        : <div className={`${props.alian ? '' : 'flex items-center justify-center'} h-full`}>{props.data}</div>}
    </div>
  )
}

export default Cell;