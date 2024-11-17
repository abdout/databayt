import { Clock, DollarSign } from "lucide-react";

// components/EstimatesDisplay.tsx
type EstimatesDisplayProps = {
    price: number;
    time: number;
  };
  
  export const EstimatesDisplay = ({ price, time }: EstimatesDisplayProps) => {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign size={32} />
          <h4 className="text-4xl font-bold">${price}</h4>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={32} />
          <h4 className="text-4xl font-bold">{time}w</h4>
        </div>
      </div>
    );
  };
  