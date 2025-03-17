'use client';

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import type {
  HomeDetails,
  EnergyUsage,
  Eligibility,
  CalculatorResults,
  CalculatorContextType
} from '../types/calculator';

const initialState = {
  homeDetails: {
    size: 150,
    age: 'pre-2008' as const,
    insulation: 'average' as const,
    suburb: 'Riccarton',
    orientation: 'north' as const
  },
  energyUsage: {
    currentMethod: 'electric' as const,
    monthlyUsage: 900,
    electricityRate: 0.28
  },
  eligibility: {
    hasCSC: false,
    ownerOccupied: true,
    previousGrants: false
  },
  results: null,
  loading: false,
  error: null
};

type State = typeof initialState;
type Action =
  | { type: 'UPDATE_HOME_DETAILS'; payload: Partial<HomeDetails> }
  | { type: 'UPDATE_ENERGY_USAGE'; payload: Partial<EnergyUsage> }
  | { type: 'UPDATE_ELIGIBILITY'; payload: Partial<Eligibility> }
  | { type: 'SET_RESULTS'; payload: CalculatorResults }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_HOME_DETAILS':
      return {
        ...state,
        homeDetails: { ...state.homeDetails, ...action.payload }
      };
    case 'UPDATE_ENERGY_USAGE':
      return {
        ...state,
        energyUsage: { ...state.energyUsage, ...action.payload }
      };
    case 'UPDATE_ELIGIBILITY':
      return {
        ...state,
        eligibility: { ...state.eligibility, ...action.payload }
      };
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.payload,
        error: null
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        results: null
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const CalculatorContext = createContext<CalculatorContextType | null>(null);

export function CalculatorProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomeDetails = useCallback((details: Partial<HomeDetails>) => {
    dispatch({ type: 'UPDATE_HOME_DETAILS', payload: details });
  }, []);

  const updateEnergyUsage = useCallback((usage: Partial<EnergyUsage>) => {
    dispatch({ type: 'UPDATE_ENERGY_USAGE', payload: usage });
  }, []);

  const updateEligibility = useCallback((eligibility: Partial<Eligibility>) => {
    dispatch({ type: 'UPDATE_ELIGIBILITY', payload: eligibility });
  }, []);

  const calculateResults = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          homeDetails: state.homeDetails,
          energyUsage: state.energyUsage,
          eligibility: state.eligibility
        })
      });

      if (!response.ok) {
        throw new Error('Calculation failed');
      }

      const results = await response.json();
      dispatch({ type: 'SET_RESULTS', payload: results });
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: error instanceof Error ? error.message : 'An error occurred'
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [state.homeDetails, state.energyUsage, state.eligibility]);

  const resetCalculator = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const value = {
    ...state,
    updateHomeDetails,
    updateEnergyUsage,
    updateEligibility,
    calculateResults,
    resetCalculator
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
} 