import Head from 'next/head';
import HeatPumpCalculator from '../src/components/HeatPumpCalculator';

export default function HeatPumpCalculatorPage() {
  return (
    <>
      <Head>
        <title>Heat Pump Savings Calculator | Kings Electrical Christchurch</title>
        <meta name="description" content="Calculate your potential savings with a heat pump installation in Christchurch. Get personalized estimates and find available incentives." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <HeatPumpCalculator />
      </main>
    </>
  );
} 