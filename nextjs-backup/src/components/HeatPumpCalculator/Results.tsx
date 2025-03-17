'use client';

import React, { useState } from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { motion } from 'framer-motion';
import { HeatPumpOption, HeatPumpUnitType } from '@/types/calculator';

// Constants for calculations
const CHRISTCHURCH_HEATING_HOURS = {
  north: 1500,
  south: 1700,
  east: 1600,
  west: 1600
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const formatNumber = (number: number, decimals = 1) => {
  return new Intl.NumberFormat('en-NZ', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(number);
};

export function Results() {
  const { results, homeDetails, energyUsage } = useCalculator();
  const [selectedUnitType, setSelectedUnitType] = useState<HeatPumpUnitType | null>(null);

  if (!results) return null;

  const annualSavingsPercent = (results.annualSavings / results.currentAnnualCost) * 100;
  
  // Set selected unit type to the most suitable option if not already selected
  const mostSuitableOption = results.recommendedOptions[0];
  const selectedUnit = selectedUnitType 
    ? results.recommendedOptions.find(option => option.type === selectedUnitType) || mostSuitableOption
    : mostSuitableOption;
  
  if (!selectedUnitType && mostSuitableOption) {
    setSelectedUnitType(mostSuitableOption.type);
  }
  
  // Calculate adjusted installation cost for the selected unit
  const totalUnitCost = selectedUnit.baseCost + selectedUnit.installationCost;
  const adjustedUnitCost = Math.max(0, totalUnitCost - results.incentiveValue);
  
  // Calculate payback period for the selected unit
  const orientation = homeDetails?.orientation || 'north';
  const annualHeatingHours = CHRISTCHURCH_HEATING_HOURS[orientation];
  const unitAnnualUsage = (results.heatPumpSizeKW * annualHeatingHours) / selectedUnit.efficiency;
  const unitAnnualCost = unitAnnualUsage * (energyUsage?.electricityRate || 0.28);
  const unitAnnualSavings = results.currentAnnualCost - unitAnnualCost;
  const unitPaybackPeriod = adjustedUnitCost / unitAnnualSavings;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Results</h2>

      <div className="space-y-8">
        {/* Annual Savings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-green-50 p-6 rounded-lg"
        >
          <h3 className="text-lg font-medium text-green-800 mb-2">
            Estimated Annual Savings
          </h3>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-green-600">
              {formatCurrency(results.annualSavings)}
            </span>
            <span className="ml-2 text-green-600">
              ({formatNumber(annualSavingsPercent)}% reduction)
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Current Annual Cost</p>
              <p className="font-semibold text-gray-900">
                {formatCurrency(results.currentAnnualCost)}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Heat Pump Annual Cost</p>
              <p className="font-semibold text-gray-900">
                {formatCurrency(results.heatPumpAnnualCost)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Heat Pump Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-lg border border-gray-200"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recommended Heat Pump Options
          </h3>
          
          <div className="mb-6">
            <div className="flex flex-wrap gap-3 mb-6">
              {results.recommendedOptions.map((option) => (
                <button
                  key={option.type}
                  onClick={() => setSelectedUnitType(option.type)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    ${selectedUnitType === option.type
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }
                    transition-colors
                  `}
                >
                  {option.name}
                  {option.suitability > 0.7 && (
                    <span className="ml-2 inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                      Recommended
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {selectedUnit && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{selectedUnit.name}</h4>
                  <p className="text-gray-600">{selectedUnit.description}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Cost Breakdown</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Unit Cost</span>
                      <span className="font-medium">{formatCurrency(selectedUnit.baseCost)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Installation</span>
                      <span className="font-medium">{formatCurrency(selectedUnit.installationCost)}</span>
                    </div>
                    {results.incentiveValue > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Available Grants</span>
                        <span>-{formatCurrency(results.incentiveValue)}</span>
                      </div>
                    )}
                    <div className="pt-2 border-t border-gray-200 flex justify-between font-bold">
                      <span>Your Final Cost</span>
                      <span>{formatCurrency(adjustedUnitCost)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm">Annual Savings</p>
                    <p className="text-xl font-bold text-blue-900">{formatCurrency(unitAnnualSavings)}</p>
                  </div>
                  
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <p className="text-amber-800 text-sm">Payback Period</p>
                    <p className="text-xl font-bold text-amber-900">{formatNumber(unitPaybackPeriod)} years</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h5 className="font-medium text-gray-800 mb-2">Features</h5>
                  <ul className="space-y-1">
                    {selectedUnit.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Installation Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg border border-gray-200"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            System Details
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-500">Recommended Heat Pump Size</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatNumber(results.heatPumpSizeKW)} kW
              </p>
              <p className="text-sm text-gray-500">
                Based on your home size of {homeDetails?.size || 0}m² and {homeDetails?.insulation || 'average'} insulation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Environmental Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-blue-50 p-6 rounded-lg"
        >
          <h3 className="text-lg font-medium text-blue-800 mb-2">
            Environmental Impact
          </h3>
          <div>
            <p className="text-2xl font-bold text-blue-600">
              {formatNumber(results.co2Reduction / 1000)} tonnes
            </p>
            <p className="text-blue-600">CO₂ reduction per year</p>
          </div>
          <p className="mt-2 text-sm text-blue-600">
            Equivalent to planting {formatNumber(results.co2Reduction / 20)} trees
          </p>
        </motion.div>

        {/* Applied Incentives */}
        {results.appliedIncentives.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Available Incentives
            </h3>
            <div className="space-y-4">
              {results.appliedIncentives.map((incentive) => (
                <div key={incentive.id} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      {incentive.name}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8"
        >
          <a
            href="/contact"
            className="
              block w-full bg-green-600 text-white text-center
              py-3 px-4 rounded-md font-medium hover:bg-green-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-green-500 transition-colors
            "
          >
            Get a Free Consultation
          </a>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Our experts will help you choose the perfect heat pump for your home
          </p>
        </motion.div>
      </div>
    </div>
  );
} 