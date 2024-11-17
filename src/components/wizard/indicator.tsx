
// components/StepIndicator.tsx
type StepIndicatorProps = {
    currentStep: number;
    totalSteps: number;
  };
  
  export const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
    return (
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${
              currentStep >= i + 1 ? 'bg-black' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };