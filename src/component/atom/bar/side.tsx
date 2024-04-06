import Bottom from "@/component/layout/bottom";
import Brand from "@/component/layout/brand";
import Item from "@/component/layout/item";
import React from "react";

const Side = () => {
  return (
    <div className="sticky h-screen w-60  bg-gray-100 px-6">
      <div className="pl-4 pt-6">
        <Brand />
      </div>
      <div className="mt-8">
        <Item />
      </div>
      <div className="mt-14">
        <Bottom />
      </div>
    </div>
  );
};

export default Side;
