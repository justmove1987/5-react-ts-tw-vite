import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Indicator from './Indicator';


interface CardProps {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  step: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  bgColor,
  step,
  totalSteps,
  onNext,
  onPrev,
}) => {
  return (
    <div className="w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      {/* Imatge amb fons de color */}
      <div className="h-56 flex items-center justify-center" style={{ backgroundColor: bgColor }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={image}
            src={image}
            alt={title}
            className="h-40 object-contain"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {/* Contingut de la targeta */}
      <div className="flex flex-col px-6 py-4 gap-2 flex-grow ">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 w-[230px]">{description}</p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <Indicator step={step} totalSteps={totalSteps} />

          <div className="flex gap-2">
            {step > 0 && (
              <button
                onClick={onPrev}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-lg hover:bg-gray-100"
              >
                ←
              </button>
              
            )}
            {step < totalSteps - 1 && (
              <button
                onClick={onNext}
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg hover:bg-gray-800"
              >
                →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
