import { useState, useEffect } from "react";

export const useStep = (voltages: any, currentStep: number, setCurrentStep: (value: number) => void) => {
  const [step, setStep] = useState<string[]>([]);

  useEffect(() => {
    const newSteps = [];
    if (voltages.LV) newSteps.push("LV");
    if (voltages.MV) newSteps.push("MV");
    if (voltages.HV) newSteps.push("HV");
    if (voltages.EV) newSteps.push("EV");
    setStep(newSteps);
  }, [voltages]);

  const nextStep = () => {
    if (currentStep < step.length + 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return { step, nextStep, prevStep };
};