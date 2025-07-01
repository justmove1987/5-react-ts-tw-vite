import React, { useState } from 'react';
import Card from './Card';


import meditation from './assets/meditation.svg';
import programming from './assets/programming.svg';
import time from './assets/time_managment.svg';

interface TutorialStep {
  title: string;
  description: string;
  bgColor: string;
  image: string;
}

const App: React.FC = () => {
  const tutorialData: TutorialStep[] = [
    {
      title: "Benvingut!",
      description: "Aquesta és la primera pantalla del teu onboarding.",
      bgColor: "#4da2a9",
      image: meditation
    },
    {
      title: "Funcionalitats",
      description: "Aquí aprendràs les funcionalitats clau.",
      bgColor: "#d3d4d9",
      image: programming
    },
    {
      title: "Comencem!",
      description: "Ja pots començar a utilitzar l'aplicació.",
      bgColor: "#ffd167",
      image: time
    }
  ];

  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    if (step < tutorialData.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
  if (step > 0) {
    setStep(step - 1);
  }
};

  const currentCardData = tutorialData[step];

  return (
     <Card
      title={currentCardData.title}
      description={currentCardData.description}
      image={currentCardData.image}
      bgColor={currentCardData.bgColor}
      step={step}
      totalSteps={tutorialData.length}
      onNext={nextStep}
      onPrev={prevStep}
    />
  );
};



export default App;
