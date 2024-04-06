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
          width={20}
          height={20}
          alt={props.alt}
          onClick={props.onClick}
          className=" rounded-full border"
        />
    </Link>
  );
};

export default SmIcon;