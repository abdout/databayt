import React, { useState, useEffect } from 'react';

const Tag = (props:{
    items: string[];
    setTag: (value: string) => void;
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [size, setSize] = useState<number[]>([]);

  useEffect(() => {
    const initialSizes = props.items.map(() => Math.random() * 18 + 12);
    setSize(initialSizes);
  }, [props.items]);

  const handleTag = (tag: string) => {
    setSelectedTags([tag]);
    props.setTag(tag);
  };
  
  return (
    <div className="flex flex-wrap">
      {props.items.map((item, index) => (
        <span 
          key={index} 
          style={{ 
            fontSize: `${size[index]}px`,
            opacity: selectedTags.includes(item) ? 1 : 0.5
          }}
          className="m-1 p-1 cursor-pointer"
          onClick={() => handleTag(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Tag;