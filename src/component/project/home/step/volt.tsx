'use client';
import React, { useState } from "react";

const Volt = ({ onVoltChange }: { onVoltChange: (newActive: { [key: string]: boolean }) => void }) => {
  const [active, setActive] = useState<{ [key: string]: boolean }>({
    LV: false,
    MV: true,
    HV: false,
    EV: false,
  });

  const handleClick = (label: string) => {
    setActive(prev => {
      const newActive = { ...prev, [label]: !prev[label] };
      onVoltChange(newActive);
      return newActive;
    });
  };

  const labels = ["LV", "MV", "HV", "EV"];

  return (
    <div className="flex gap-4 mb-4">
      {labels.map((label) => (
        <button
          type="button" // Ensure this is on the same line as the opening tag
          key={label}
          onClick={() => handleClick(label)}
          className={`w-10 h-10 border p-2 ${
            active[label] ? "border-black" : "opacity-50"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Volt;