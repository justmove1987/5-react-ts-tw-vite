import { useState } from 'react';

export interface TutorialStep {
  title: string;
  description: string;
  bgColor: string;
  image: string;
}

export const useOnboarding = (steps: TutorialStep[]) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return {
    step,
    currentStep: steps[step],
    totalSteps: steps.length,
    nextStep,
    prevStep
  };
};
