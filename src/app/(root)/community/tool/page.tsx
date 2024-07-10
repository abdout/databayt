import Card from "@/components/root/community/tool";
import toolData from "@/components/root/community/constant";
import React from "react";
import Image from "next/image";

const Tool = () => {
  return (
    <div className="-mx-8" dir="ltr">
      <div className="flex items-center gap-4">
        <Image src="/magic.png" width={50} height={50} alt="tool" />

      <p className="text-[11.5px] tracking-wide font-light md:text-lg md:pt-3">
        The most magical part of the Harry Potter books, <br/> is that they eventually
        used the skills they learned at school
      </p>
      </div>
      <div>
        <p className="text-[16px] md:pt-4 md:text-lg">+ 40 tool for</p>
        <p className="text-[28px] font-medium md:pb-4">bussiness automation</p>
      
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-8 md:items-center md:justify-center ">
        {toolData.map((values) => {
          return (
            <div className="py-[3PX]" key={values.id}>
              <Card
                id={values.id}
                title={values.title}
                subtitle={values.subtitle}
                desc={values.desc}
                path={values.path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tool;
