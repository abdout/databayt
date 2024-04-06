import React, { ReactNode } from "react";

const Pargraph = (props: { 
    title: string,
    desc: ReactNode,
    sub?: boolean, // Add this line
 }) => {
  return (
    <div className="flex-col">
      <h4 className={props.sub ? "bg-gray-100 px-2 py-[2px] inline-block" : "bg-yellow-400 px-2 py-[2px] inline-block"}>{props.title}</h4>
      <div className="mt-2">
        {props.desc}
      </div>
    </div>
  );
};

export default Pargraph;