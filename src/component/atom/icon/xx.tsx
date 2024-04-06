import Image from "next/image";
import React from "react";

const XxIcon = (props: {
  src: string;
  alt: string;
  
}) => {
  return (
        <Image
          src={props.src}
          width={300}
          height={200}
          alt={props.alt}
        />
  );
};

export default XxIcon;