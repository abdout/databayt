import React from "react";
import { docs } from "@/constant/team";
import TextIcon from "../atom/icon/text";
import XlIcon from "../atom/icon/xl";

const Docs = (props: {
  image: string;
  alt: string;
  phone: string;
  mail: string;
  location: string;
}) => {
  return (
    <div>
      <div className="flex items-center space-x-4 -pl-4">
        <XlIcon src={props.image} alt={props.alt} />
        <div className="items-start justify-start flex flex-col space-y-2">
          <h3>{props.alt}</h3>
          <h5>{props.phone}</h5>
          <h5>{props.mail}</h5>
          <h5>{props.location}</h5>
        </div>
      </div>

      <div className="flex space-x-6 items-center justify-center pt-6">
        {docs.map((data, index) => (
          <TextIcon
            key={index}
            icon={data.icon}
            label={data.label}
            color={index === 2 ? "yellow" : "black"}
          />
        ))}
      </div>
    </div>
  );
};

export default Docs;
