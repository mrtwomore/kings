'use client';

import React from 'react';
import { useCalculator } from '@/context/CalculatorContext';

export function EnergyUsage() {
  const { energyUsage, updateEnergyUsage } = useCalculator();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateEnergyUsage({
      [name]: name === 'monthlyUsage' || name === 'electricityRate' || name === 'gasRate'
        ? Number(value)
        : value
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Energy Usage</h2>
      
      <div className="space-y-6">
        <div>
          <label
            htmlFor="currentMethod"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Current Heating Method
          </label>
          <select
            id="currentMethod"
            name="currentMethod"
            value={energyUsage.currentMethod}
            onChange={handleChange}
            className="
              mt-1 block w-full rounded-md border-gray-300
              py-2 pl-3 pr-10 text-base focus:border-green-500
              focus:outline-none focus:ring-green-500 sm:text-sm
            "
          >
            <option value="electric">Electric Heating</option>
            <option value="gas">Gas Heating</option>
            <option value="wood">Wood Burner</option>
            <option value="coal">Coal Burner</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="monthlyUsage"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Average Monthly Energy Usage (kWh)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              name="monthlyUsage"
              id="monthlyUsage"
              value={energyUsage.monthlyUsage}
              onChange={handleChange}
              min="0"
              max="5000"
              step="50"
              className="
                block w-full rounded-md border-gray-300 pl-3 pr-12
                focus:border-green-500 focus:ring-green-500 sm:text-sm
              "
              placeholder="900"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">kWh</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            You can find this on your power bill. If unsure, use 900 kWh for an average home.
          </p>
        </div>

        <div>
          <label
            htmlFor="electricityRate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Electricity Rate ($ per kWh)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              name="electricityRate"
              id="electricityRate"
              value={energyUsage.electricityRate}
              onChange={handleChange}
              min="0"
              max="1"
              step="0.01"
              className="
                block w-full rounded-md border-gray-300 pl-7 pr-12
                focus:border-green-500 focus:ring-green-500 sm:text-sm
              "
              placeholder="0.28"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">/kWh</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Check your latest power bill for this rate. The average in Christchurch is $0.28/kWh.
          </p>
        </div>

        {energyUsage.currentMethod === 'gas' && (
          <div>
            <label
              htmlFor="gasRate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gas Rate ($ per kWh)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="gasRate"
                id="gasRate"
                value={energyUsage.gasRate || 0}
                onChange={handleChange}
                min="0"
                max="1"
                step="0.01"
                className="
                  block w-full rounded-md border-gray-300 pl-7 pr-12
                  focus:border-green-500 focus:ring-green-500 sm:text-sm
                "
                placeholder="0.15"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 sm:text-sm">/kWh</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              The average natural gas rate in Christchurch is $0.15/kWh.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 