import React from 'react';
import Card from './Card';
import { useOnboarding } from './hooks/useOnboarding';
import { tutorialData } from './data/tutorialData';

const App: React.FC = () => {
  const {
    step,
    currentStep,
    totalSteps,
    nextStep,
    prevStep
  } = useOnboarding(tutorialData);

  return (
    <Card
      key={step} // Força el remuntatge i animació correcte
      title={currentStep.title}
      description={currentStep.description}
      image={currentStep.image}
      bgColor={currentStep.bgColor}
      step={step}
      totalSteps={totalSteps}
      onNext={nextStep}
      onPrev={prevStep}
    />
  );
};

export default App;
