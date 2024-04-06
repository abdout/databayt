import React from "react";

const Day = (props: { date: Date; setDate: (value: Date) => void }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const nextSevenDays = Array.from({ length: 4 }, (_, i) => {
    const day = new Date(tomorrow);
    day.setDate(day.getDate() + i);
    return day;
  });

  const nextSevenMonths = Array.from({ length: 4 }, (_, i) => {
    const month = new Date(today.getFullYear(), today.getMonth() + i, 1);
    return month;
  });

  return (
    <div className="space-y-4">
      <div className="text-2xl items-center justify-center">
        {props.date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
        })}
      </div>
      <div className="flex">
      <div className="flex justify-between">
        {nextSevenDays.map((day, i) => {
          const opacity = 1 - i * 0.1;
          const size = 100 - i * 10;
          return (
            <div
              key={i}
              className="w-8 h-8 gap-2 rounded-full border  flex items-center justify-center cursor-pointer"
              style={{ opacity, fontSize: `${size}%` }}
              onClick={() => props.setDate(day)}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        {nextSevenMonths.map((month, i) => {
          const opacity = 1 - i * 0.1;
          const size = 100 - i * 10;
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center cursor-pointer"
              style={{ opacity, fontSize: `${size}%` }}
              onClick={() => props.setDate(month)}
            >
              {month.toLocaleDateString("en-GB", { month: "short" })}
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Day;
