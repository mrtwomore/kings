'use client';

import React, { useState } from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeDetails } from './HomeDetails';
import { EnergyUsage } from './EnergyUsage';
import { Eligibility } from './Eligibility';
import { Results } from './Results';

const fadeIn = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

const steps = [
  { id: 1, title: 'Home Details', component: HomeDetails },
  { id: 2, title: 'Energy Usage', component: EnergyUsage },
  { id: 3, title: 'Grant Eligibility', component: Eligibility }
];

export default function HeatPumpCalculator() {
  const { loading, error, results, calculateResults } = useCalculator();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    calculateResults();
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="text-center mb-12"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Heat Pump Savings Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find out how much you could save by installing a heat pump in your Christchurch home.
          Get personalized recommendations and available incentives.
        </p>
      </motion.div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-center items-center space-x-4">
          {steps.map((step) => (
            <React.Fragment key={step.id}>
              <div 
                className={`flex items-center ${
                  step.id <= currentStep ? 'text-green-600' : 'text-gray-400'
                }`}
              >
                <div
                  className={`
                    flex items-center justify-center w-8 h-8 rounded-full
                    border-2 font-semibold text-sm
                    ${
                      step.id < currentStep
                        ? 'bg-green-600 border-green-600 text-white'
                        : step.id === currentStep
                        ? 'border-green-600 text-green-600'
                        : 'border-gray-300 text-gray-400'
                    }
                  `}
                >
                  {step.id < currentStep ? '✓' : step.id}
                </div>
                <span className="ml-2 hidden sm:inline">{step.title}</span>
              </div>
              {step.id < steps.length && (
                <div
                  className={`w-12 h-0.5 ${
                    step.id < currentStep ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="space-y-8"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeIn}
            >
              <CurrentStepComponent />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`
                inline-flex items-center px-6 py-3 border border-gray-300
                text-base font-medium rounded-md shadow-sm text-gray-700
                bg-white hover:bg-gray-50 focus:outline-none focus:ring-2
                focus:ring-offset-2 focus:ring-green-500
                ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={loading}
              className={`
                inline-flex items-center px-6 py-3 border border-transparent
                text-base font-medium rounded-md shadow-sm text-white
                bg-green-600 hover:bg-green-700 focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                ${loading ? 'opacity-75 cursor-not-allowed' : ''}
              `}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Calculating...
                </>
              ) : currentStep === steps.length ? (
                'Calculate Savings'
              ) : (
                'Next'
              )}
            </button>
          </div>
        </motion.div>

        {results && (
          <motion.div
            className="lg:sticky lg:top-6"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <Results />
          </motion.div>
        )}
      </div>
    </div>
  );
} 