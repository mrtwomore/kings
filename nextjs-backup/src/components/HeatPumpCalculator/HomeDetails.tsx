'use client';

import React, { useState } from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { Tooltip } from '@/components/ui/Tooltip';

const SUBURBS = [
  'Addington',
  'Avonhead',
  'Burnside',
  'Cashmere',
  'Fendalton',
  'Halswell',
  'Hornby',
  'Ilam',
  'Linwood',
  'Merivale',
  'Papanui',
  'Riccarton',
  'Shirley',
  'St Albans',
  'Sumner',
  'Sydenham'
].sort();

const tooltips = {
  size: 'Enter the total floor area of your home. This helps us calculate the appropriate heat pump size.',
  age: 'Homes built after 2008 typically have better insulation due to updated building codes.',
  insulation: 'Better insulation means more efficient heating and potentially a smaller heat pump required.',
  orientation: 'North-facing rooms receive more sunlight and may require less heating.',
};

export function HomeDetails() {
  const { homeDetails, updateHomeDetails } = useCalculator();
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateHomeDetails({
      [name]: name === 'size' ? Number(value) : value
    });
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const getValidationError = (name: string) => {
    if (!touched[name]) return '';
    
    switch (name) {
      case 'size':
        if (!homeDetails.size) return 'Size is required';
        if (homeDetails.size < 30) return 'Minimum size is 30m²';
        if (homeDetails.size > 500) return 'Maximum size is 500m²';
        return '';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Home Details</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-700"
            >
              Home Size (m²)
            </label>
            <Tooltip content={tooltips.size}>
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-gray-500"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Tooltip>
          </div>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              name="size"
              id="size"
              value={homeDetails.size}
              onChange={handleChange}
              onBlur={() => handleBlur('size')}
              min="30"
              max="500"
              className={`
                block w-full rounded-md pl-3 pr-12 sm:text-sm
                ${
                  getValidationError('size')
                    ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-green-500 focus:ring-green-500'
                }
              `}
              placeholder="150"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">m²</span>
            </div>
          </div>
          {getValidationError('size') && (
            <p className="mt-2 text-sm text-red-600">
              {getValidationError('size')}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Home Age
            </label>
            <Tooltip content={tooltips.age}>
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-gray-500"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Tooltip>
          </div>
          <select
            id="age"
            name="age"
            value={homeDetails.age}
            onChange={handleChange}
            className="
              mt-1 block w-full rounded-md border-gray-300
              py-2 pl-3 pr-10 text-base focus:border-green-500
              focus:outline-none focus:ring-green-500 sm:text-sm
            "
          >
            <option value="pre-2008">Built before 2008</option>
            <option value="post-2008">Built after 2008</option>
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="insulation"
              className="block text-sm font-medium text-gray-700"
            >
              Insulation Quality
            </label>
            <Tooltip content={tooltips.insulation}>
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-gray-500"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Tooltip>
          </div>
          <select
            id="insulation"
            name="insulation"
            value={homeDetails.insulation}
            onChange={handleChange}
            className="
              mt-1 block w-full rounded-md border-gray-300
              py-2 pl-3 pr-10 text-base focus:border-green-500
              focus:outline-none focus:ring-green-500 sm:text-sm
            "
          >
            <option value="poor">Poor - Minimal or old insulation</option>
            <option value="average">Average - Standard insulation</option>
            <option value="good">Good - Well insulated</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="suburb"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Suburb
          </label>
          <select
            id="suburb"
            name="suburb"
            value={homeDetails.suburb}
            onChange={handleChange}
            className="
              mt-1 block w-full rounded-md border-gray-300
              py-2 pl-3 pr-10 text-base focus:border-green-500
              focus:outline-none focus:ring-green-500 sm:text-sm
            "
          >
            {SUBURBS.map(suburb => (
              <option key={suburb} value={suburb}>
                {suburb}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="orientation"
              className="block text-sm font-medium text-gray-700"
            >
              Main Living Area Orientation
            </label>
            <Tooltip content={tooltips.orientation}>
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-gray-500"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Tooltip>
          </div>
          <select
            id="orientation"
            name="orientation"
            value={homeDetails.orientation}
            onChange={handleChange}
            className="
              mt-1 block w-full rounded-md border-gray-300
              py-2 pl-3 pr-10 text-base focus:border-green-500
              focus:outline-none focus:ring-green-500 sm:text-sm
            "
          >
            <option value="north">North Facing</option>
            <option value="south">South Facing</option>
            <option value="east">East Facing</option>
            <option value="west">West Facing</option>
          </select>
        </div>
      </div>
    </div>
  );
} 