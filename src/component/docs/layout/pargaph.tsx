import React, { ReactNode } from "react";

const Pargraph = (props: { 
    title: string,
    desc: ReactNode,
 }) => {
  return (
    <div className="flex-col">
      <h2 className="bg-yellow-400 px-2 py-[2px] inline-block">{props.title}</h2>
      <div className="mt-2">
        {props.desc}
      </div>
    </div>
  );
};

export default Pargraph;