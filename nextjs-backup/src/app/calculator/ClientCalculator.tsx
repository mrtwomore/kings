'use client';

import React from 'react';
import { CalculatorProvider } from '@/context/CalculatorContext';
import HeatPumpCalculator from '@/components/HeatPumpCalculator';

export default function ClientCalculator() {
  return (
    <CalculatorProvider>
      <HeatPumpCalculator />
    </CalculatorProvider>
  );
} 