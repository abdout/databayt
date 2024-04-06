import React from "react";

const Submit = (props:{label: string}) => {
  return (
    <button
      type="submit"
      className=" py-[14px] w-[280px] bg-black text-[#fcfcfc]  font-medium mt-4 tracking-widest text-[16px]"
    >
      {props.label}
    </button>
  );
};

export default Submit;
