import meditation from '../assets/meditation.svg';
import programming from '../assets/programming.svg';
import time from '../assets/time_managment.svg';

import type { TutorialStep } from '../hooks/useOnboarding';

export const tutorialData: TutorialStep[] = [
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
