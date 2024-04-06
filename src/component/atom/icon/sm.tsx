import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmIcon = (props: {
  src: string;
  alt: string;
  path: string;
  onClick?: () => void;
}) => {
  return (
    <Link href={props.path}>
        <Image
          src={props.src}
          width={25}
          height={25}
          alt={props.alt}
          onClick={props.onClick}
        />
    </Link>
  );
};

export default SmIcon;