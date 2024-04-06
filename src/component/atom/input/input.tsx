import React from 'react';

const Input = (props:{
    value: string,
    onChange: (value: string) => void,
    placeholder: string 
}) => {
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className="p-[10px] w-[280px] bg-[#fcfcfc] border border-[#818080] hover:border-black"
      type="text"
      style={{ fontWeight: "300", letterSpacing: "1px"}}
      placeholder={props.placeholder}
    />
  );
};

export default Input;