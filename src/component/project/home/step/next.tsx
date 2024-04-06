// PrevNextButtons.js

import React from 'react';
import { Icon } from "@iconify/react";

interface PrevNextButtonsProps {
  currentStep: number;
  totalSteps: number;
  prevStep: () => void;
  nextStep: () => void;
}

const PrevNextButtons: React.FC<PrevNextButtonsProps> = ({ currentStep, totalSteps, prevStep, nextStep }) => (
  <div className="absolute flex justify-between items-center w-full">
    <button
      type="button"
      onClick={prevStep}
      style={{
        color: 'white',
        marginLeft: '-80px',
        opacity: currentStep === 0 ? 0.3 : 1
      }}
    >
      <Icon icon="ooui:next-rtl" width="2em" height="2em" />
    </button>

    <button
      type="button"
      onClick={nextStep}
      style={{
        color: 'white',
        marginRight: '-80px',
        opacity: currentStep === totalSteps - 1 ? 0.7 : 1
      }}
    >
      <Icon icon="ooui:next-ltr" width="2em" height="2em" />
    </button>
  </div>
);

export default PrevNextButtons;