// Indicator.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IndicatorProps {
  totalSteps: number;
  step: number;
}

const Dot = styled(motion.span)<{ active: boolean }>`
  width: ${({ active }) => (active ? '16px' : '8px')};
  height: 8px;
  border-radius: 16px;
  background-color: ${({ active }) => (active ? '#000' : '#ccc')};
  margin: 0 4px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Indicator: React.FC<IndicatorProps> = ({ totalSteps, step }) => {
  return (
    <DotsContainer>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <Dot
          key={index}
          active={index === step}
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      ))}
    </DotsContainer>
  );
};

export default Indicator;
