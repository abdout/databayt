"use client";
import { Select, SelectOption } from "@/component/atom/select/select";
import React, { useState, useEffect } from "react";

interface SelectProps {
  label?: string;
  options: SelectOption[];
  onOptionChange: (options: SelectOption[]) => void;
  placeholder?: string;
}

const Item = ({ label, options, onOptionChange, placeholder }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption[]>([]);

  useEffect(() => {
    onOptionChange(selectedOption);
  }, [selectedOption, onOptionChange]);

  return (
    <div className=" items-center w-full">
      {/* <label className="mr-2">{label}</label> */}
      <Select
        multiple={true}
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Item;