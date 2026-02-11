import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Features from './components/sections/Features';
import PowerFeatures from './components/sections/PowerFeatures';
import Ecosystem from './components/sections/Ecosystem';
import Privacy from './components/sections/Privacy';
import AnalyticsShowcase from './components/sections/AnalyticsShowcase';
import FinalCTA from './components/sections/FinalCTA';
import CustomCursor from './components/ui/CustomCursor';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading for smoother entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return null;

  return (
    <div className="relative min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Marquee direction="left" />
        <Features />
        <PowerFeatures />
        <AnalyticsShowcase />
        <Marquee direction="right" text="OPEN SOURCE /// GPL V3 /// LOCAL FIRST /// NO SUBSCRIPTIONS /// " />
        <Privacy />
        <Ecosystem />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;