export interface HomeDetails {
  size: number;
  age: 'pre-2008' | 'post-2008';
  insulation: 'poor' | 'average' | 'good';
  suburb: string;
  orientation: 'north' | 'south' | 'east' | 'west';
}

export interface EnergyUsage {
  currentMethod: 'electric' | 'gas' | 'wood' | 'coal';
  monthlyUsage: number;
  electricityRate: number;
  gasRate?: number;
}

export interface Eligibility {
  hasCSC: boolean;
  ownerOccupied: boolean;
  previousGrants: boolean;
}

export type HeatPumpUnitType = 'highWall' | 'floorConsole' | 'ceiling' | 'ducted';

export interface HeatPumpOption {
  type: HeatPumpUnitType;
  name: string;
  description: string;
  baseCost: number;
  installationCost: number;
  efficiency: number;
  suitability: number; // 0-1 score indicating how suitable this option is for the user
  features: string[];
}

export interface CalculatorResults {
  currentAnnualCost: number;
  heatPumpAnnualCost: number;
  annualSavings: number;
  baseInstallationCost: number;
  incentiveValue: number;
  adjustedInstallationCost: number;
  paybackPeriod: number;
  co2Reduction: number;
  heatPumpSizeKW: number;
  efficiency: number;
  appliedIncentives: Incentive[];
  recommendedOptions: HeatPumpOption[];
}

export interface Incentive {
  id: string;
  name: string;
  description: string;
  type: 'National' | 'Regional' | 'Local';
  incentiveType: 'Grant' | 'Loan' | 'Rebate';
  amount: {
    type: 'Fixed' | 'Percentage';
    value: number;
    maxValue?: number;
    unit: '$' | '%';
  };
}

export interface CalculatorContextType {
  homeDetails: HomeDetails;
  energyUsage: EnergyUsage;
  eligibility: Eligibility;
  results: CalculatorResults | null;
  loading: boolean;
  error: string | null;
  updateHomeDetails: (details: Partial<HomeDetails>) => void;
  updateEnergyUsage: (usage: Partial<EnergyUsage>) => void;
  updateEligibility: (eligibility: Partial<Eligibility>) => void;
  calculateResults: () => Promise<void>;
  resetCalculator: () => void;
} 