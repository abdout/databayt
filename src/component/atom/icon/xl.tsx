import Image from "next/image";
import React from "react";

const XlIcon = (props: {
  src: string;
  alt: string;
  
}) => {
  return (
        <Image
          src={props.src}
          width={130}
          height={130}
          alt={props.alt}
        />
  );
};

export default XlIcon;