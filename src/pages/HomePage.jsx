// src/pages/HomePage.jsx

import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PricingSection />
      <Testimonials />
    </>
  );
};

export default HomePage;