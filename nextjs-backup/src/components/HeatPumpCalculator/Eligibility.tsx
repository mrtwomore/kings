'use client';

import React from 'react';
import { useCalculator } from '@/context/CalculatorContext';

export function Eligibility() {
  const { eligibility, updateEligibility } = useCalculator();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateEligibility({ [name]: checked });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Grant Eligibility</h2>
      
      <div className="space-y-6">
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="hasCSC"
              name="hasCSC"
              type="checkbox"
              checked={eligibility.hasCSC}
              onChange={handleChange}
              className="
                h-4 w-4 rounded border-gray-300 text-green-600
                focus:ring-green-500
              "
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="hasCSC" className="font-medium text-gray-700">
              Community Services Card Holder
            </label>
            <p className="text-gray-500">
              Do you or someone in your household have a Community Services Card?
            </p>
          </div>
        </div>

        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="ownerOccupied"
              name="ownerOccupied"
              type="checkbox"
              checked={eligibility.ownerOccupied}
              onChange={handleChange}
              className="
                h-4 w-4 rounded border-gray-300 text-green-600
                focus:ring-green-500
              "
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="ownerOccupied" className="font-medium text-gray-700">
              Owner-Occupied Home
            </label>
            <p className="text-gray-500">
              Do you own and live in this home as your primary residence?
            </p>
          </div>
        </div>

        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="previousGrants"
              name="previousGrants"
              type="checkbox"
              checked={eligibility.previousGrants}
              onChange={handleChange}
              className="
                h-4 w-4 rounded border-gray-300 text-green-600
                focus:ring-green-500
              "
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="previousGrants" className="font-medium text-gray-700">
              Previous Grants
            </label>
            <p className="text-gray-500">
              Have you received any government heating or insulation grants in the past?
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-blue-700">
                You may be eligible for up to $3,000 in government grants if you meet certain criteria.
              </p>
              <p className="mt-3 text-sm md:mt-0 md:ml-6">
                <a
                  href="https://www.eeca.govt.nz/co-funding/insulation-and-heater-grants/warmer-kiwi-homes-programme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                >
                  Learn more
                  <span aria-hidden="true"> →</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 