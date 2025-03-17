import { Metadata } from 'next';
import ClientCalculator from './ClientCalculator';

export const metadata: Metadata = {
  title: 'Heat Pump Savings Calculator | Kings Electrical',
  description: 'Calculate your potential savings with a heat pump installation in Christchurch. Get personalized recommendations and check available government grants.',
};

export default function CalculatorPage() {
  return <ClientCalculator />;
} 