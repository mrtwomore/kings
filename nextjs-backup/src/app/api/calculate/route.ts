import { NextResponse } from 'next/server';
import type {
  HomeDetails,
  EnergyUsage,
  Eligibility,
  CalculatorResults,
  Incentive,
  HeatPumpOption,
  HeatPumpUnitType
} from '@/types/calculator';

interface CalculationRequest {
  homeDetails: HomeDetails;
  energyUsage: EnergyUsage;
  eligibility: Eligibility;
}

const CHRISTCHURCH_HEATING_HOURS = {
  north: 1500,
  south: 1700,
  east: 1600,
  west: 1600
};

const INSULATION_EFFICIENCY = {
  poor: 0.7,
  average: 1.0,
  good: 1.2
};

const ENERGY_CONVERSION = {
  electric: 1.0,
  gas: 0.9,
  wood: 0.65,
  coal: 0.6
};

const CO2_EMISSIONS = {
  electric: 0.1, // kg CO2 per kWh
  gas: 0.2,
  wood: 0.1,
  coal: 0.36
};

// Define heat pump unit types with base costs and features
const HEAT_PUMP_UNITS: Record<HeatPumpUnitType, {
  name: string;
  description: string;
  baseCostPerKW: number;
  installationBaseCost: number;
  efficiencyModifier: number;
  features: string[];
}> = {
  highWall: {
    name: 'High Wall Unit',
    description: 'Wall-mounted units that are ideal for heating single rooms efficiently.',
    baseCostPerKW: 450,
    installationBaseCost: 800,
    efficiencyModifier: 1.0,
    features: [
      'Most affordable option',
      'Quick installation (2-4 hours)',
      'Great for bedrooms and living areas',
      'Simple maintenance and cleaning'
    ]
  },
  floorConsole: {
    name: 'Floor Console Unit',
    description: 'Floor-standing units that provide comfortable, low-level heating.',
    baseCostPerKW: 520,
    installationBaseCost: 900,
    efficiencyModifier: 0.95,
    features: [
      'Better for homes with high ceilings',
      'Great for replacing old radiators',
      'Less visible from outside the home',
      'Excellent heat distribution from floor level'
    ]
  },
  ceiling: {
    name: 'Ceiling Cassette Unit',
    description: 'Recessed ceiling units that provide discreet, even distribution of air.',
    baseCostPerKW: 600,
    installationBaseCost: 1200,
    efficiencyModifier: 0.9,
    features: [
      'Most aesthetically pleasing option',
      'Even 360° air distribution',
      'Ideal for larger open spaces',
      'Minimal visual impact'
    ]
  },
  ducted: {
    name: 'Ducted System',
    description: 'Whole-home ducted heat pump system providing consistent heating throughout.',
    baseCostPerKW: 750,
    installationBaseCost: 3000,
    efficiencyModifier: 0.85,
    features: [
      'Whole-home heating solution',
      'Completely hidden from view',
      'Consistent temperature throughout home',
      'Zone control possible for different areas'
    ]
  }
};

export async function POST(request: Request) {
  try {
    const body: CalculationRequest = await request.json();
    const { homeDetails, energyUsage, eligibility } = body;

    // Calculate heat pump size based on home size and insulation
    const baseSizeKW = Math.max(3.5, Math.ceil(homeDetails.size * 0.06));
    const adjustedSizeKW = baseSizeKW * INSULATION_EFFICIENCY[homeDetails.insulation];

    // Calculate current heating costs
    const currentAnnualUsage = energyUsage.monthlyUsage * 12;
    const currentAnnualCost = currentAnnualUsage * energyUsage.electricityRate;

    // Calculate baseline heat pump costs using high wall as reference
    const annualHeatingHours = CHRISTCHURCH_HEATING_HOURS[homeDetails.orientation];
    const baseHeatPumpEfficiency = 4.0; // COP (Coefficient of Performance)
    const heatPumpAnnualUsage = (adjustedSizeKW * annualHeatingHours) / baseHeatPumpEfficiency;
    const heatPumpAnnualCost = heatPumpAnnualUsage * energyUsage.electricityRate;

    // Calculate savings
    const annualSavings = currentAnnualCost - heatPumpAnnualCost;

    // Calculate base installation cost (using high wall as reference)
    const baseInstallationCost = 3000 + (adjustedSizeKW * 500);

    // Calculate incentives
    const appliedIncentives: Incentive[] = [];
    let incentiveValue = 0;

    if (eligibility.hasCSC && homeDetails.age === 'pre-2008' && eligibility.ownerOccupied && !eligibility.previousGrants) {
      const warmerKiwiHomes: Incentive = {
        id: 'warmer-kiwi-homes',
        name: 'Warmer Kiwi Homes',
        description: 'Government funding for heat pumps for eligible homeowners.',
        type: 'National',
        incentiveType: 'Grant',
        amount: {
          type: 'Percentage',
          value: 80,
          maxValue: 3000,
          unit: '%'
        }
      };
      
      incentiveValue = Math.min(baseInstallationCost * 0.8, 3000);
      appliedIncentives.push(warmerKiwiHomes);
    }

    // Calculate CO2 reduction
    const currentEmissions = currentAnnualUsage * CO2_EMISSIONS[energyUsage.currentMethod];
    const heatPumpEmissions = heatPumpAnnualUsage * CO2_EMISSIONS.electric;
    const co2Reduction = currentEmissions - heatPumpEmissions;

    // Create options for different heat pump types
    const recommendedOptions: HeatPumpOption[] = Object.entries(HEAT_PUMP_UNITS).map(([type, unitInfo]) => {
      const typeKey = type as HeatPumpUnitType;
      const unitEfficiency = baseHeatPumpEfficiency * unitInfo.efficiencyModifier;
      const unitAnnualUsage = (adjustedSizeKW * annualHeatingHours) / unitEfficiency;
      const unitAnnualCost = unitAnnualUsage * energyUsage.electricityRate;
      const unitAnnualSavings = currentAnnualCost - unitAnnualCost;
      
      // Calculate total cost for this unit type
      const unitBaseCost = adjustedSizeKW * unitInfo.baseCostPerKW;
      const unitInstallationCost = unitInfo.installationBaseCost + (adjustedSizeKW * 200);
      const totalCost = unitBaseCost + unitInstallationCost;
      
      // Calculate suitability score based on home factors
      let suitability = 0.5; // Base suitability
      
      // Adjust suitability based on size
      if (typeKey === 'ducted' && homeDetails.size > 180) suitability += 0.3;
      if (typeKey === 'highWall' && homeDetails.size < 150) suitability += 0.2;
      if (typeKey === 'ceiling' && homeDetails.size > 100) suitability += 0.2;
      
      // Adjust for insulation
      if (homeDetails.insulation === 'poor' && typeKey === 'ducted') suitability -= 0.1;
      if (homeDetails.insulation === 'good' && typeKey === 'highWall') suitability += 0.1;
      
      // Clamp suitability to 0-1 range
      suitability = Math.max(0, Math.min(1, suitability));
      
      return {
        type: typeKey,
        name: unitInfo.name,
        description: unitInfo.description,
        baseCost: unitBaseCost,
        installationCost: unitInstallationCost,
        efficiency: unitEfficiency,
        suitability,
        features: unitInfo.features
      };
    });
    
    // Sort options by suitability
    recommendedOptions.sort((a, b) => b.suitability - a.suitability);

    const results: CalculatorResults = {
      currentAnnualCost,
      heatPumpAnnualCost,
      annualSavings,
      baseInstallationCost,
      incentiveValue,
      adjustedInstallationCost: baseInstallationCost - incentiveValue,
      paybackPeriod: (baseInstallationCost - incentiveValue) / annualSavings,
      co2Reduction,
      heatPumpSizeKW: adjustedSizeKW,
      efficiency: baseHeatPumpEfficiency,
      appliedIncentives,
      recommendedOptions
    };

    return NextResponse.json(results);
  } catch (error) {
    console.error('Calculation error:', error);
    return NextResponse.json(
      { error: 'Failed to calculate results' },
      { status: 500 }
    );
  }
} 