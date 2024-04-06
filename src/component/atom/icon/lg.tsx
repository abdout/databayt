import Image from "next/image";
import React from "react";

const LgIcon = (props: {
  src: string;
  alt: string;
  
}) => {
  return (
        <Image
          src={props.src}
          width={100}
          height={100}
          alt={props.alt}
        />
  );
};

export default LgIcon;