import React from "react";

const XlInupt = (props: { placeholder: string }) => {
  return (
    <div>
      <input
        className="w-full h-[3rem] text-[16px]
        tracking-wider font-light px-4 border border-gray-400 bg-[#FCFCFC]
        focus:border-black focus:outline-none
        focus:rounded-none hover:border-black rounded-none"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default XlInupt;
