import { lazy, Suspense } from 'react';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import CustomCursor from '@ui/CustomCursor';

// Lazy load sections for better performance
const Hero = lazy(() => import('@sections/Hero'));
const Marquee = lazy(() => import('@sections/Marquee'));
const Features = lazy(() => import('@sections/Features'));
const PowerFeatures = lazy(() => import('@sections/PowerFeatures'));
const AnalyticsShowcase = lazy(() => import('@sections/AnalyticsShowcase'));
const Privacy = lazy(() => import('@sections/Privacy'));
const Ecosystem = lazy(() => import('@sections/Ecosystem'));
const FinalCTA = lazy(() => import('@sections/FinalCTA'));

// Loading component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-lime-400/20 border-t-lime-400 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-dark-900">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Marquee direction="left" />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <PowerFeatures />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AnalyticsShowcase />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Marquee 
            direction="right" 
            text="OPEN SOURCE /// GPL V3 /// LOCAL FIRST /// NO SUBSCRIPTIONS /// " 
          />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Privacy />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Ecosystem />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <FinalCTA />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
