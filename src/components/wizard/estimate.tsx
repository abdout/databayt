

// components/EstimatesDisplay.tsx
type EstimatesDisplayProps = {
    price: number;
    time: number;
  };
  
  export const EstimatesDisplay = ({ price, time }: EstimatesDisplayProps) => {
    return (
      <div className="absolute bottom-8 right-8 flex flex-col">
          <h4 className="text-3xl font-bold">${price}</h4>
          <h4 className="text-3xl font-bold">{time} d</h4> 
      </div>
    );
  };
  