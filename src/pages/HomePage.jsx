// src/pages/HomePage.jsx (Versi Final yang Bersih)

import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials'; // <-- Import kembali

const HomePage = () => {
  return (
    // Kita hanya akan menampilkan 3 seksi utama ini untuk sekarang
    <>
      <HeroSection />
      <StatsSection />
      <PricingSection />
       <Testimonials />
    </>
  );
};

export default HomePage;