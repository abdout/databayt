// // StepsLogic.tsx
// import React, { useState, useEffect } from 'react';

// interface StepsLogicProps {
//   initialStep: number;
//   conditions: boolean[];
//   conditionLabels: string[];
// }

// const Step: React.FC<StepsLogicProps> = ({ initialStep, conditions, conditionLabels }) => {
//   const [currentStep, setCurrentStep] = useState(initialStep);
//   const [steps, setSteps] = useState<string[]>([]);

//   const nextStep = () => {
//     if (currentStep < steps.length + 2) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   useEffect(() => {
//     const newSteps = [];
//     conditions.forEach((condition, index) => {
//       if (condition) newSteps.push(conditionLabels[index]);
//     });
//     setSteps(newSteps);
//   }, [conditions, conditionLabels]);

//   return (
//     <>
//       {currentStep}
//       {/* Render your steps based on currentStep */}
//       <button onClick={prevStep}>Previous</button>
//       <button onClick={nextStep}>Next</button>
//     </>
//   );
// };

// export default Step;