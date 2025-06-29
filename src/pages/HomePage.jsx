// src/pages/HomePage.jsx

import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import AdsterraBanner from '../components/AdsterraBanner'; // <-- Import komponen iklan

// Definisikan kode iklan Anda di sini agar rapi
const nativeBannerCode = `
  <script async="async" data-cfasync="false" src="//archaicfondlefork.com/29dafd95f261753a35ac5ace57db6f3f/invoke.js"></script>
  <div id="container-29dafd95f261753a35ac5ace57db6f3f"></div>
`;

const banner300x250Code = `
  <script type="text/javascript">
    atOptions = {
      'key' : 'e6179e5263a5dfa712c5fcc4ac079873',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="//archaicfondlefork.com/e6179e5263a5dfa712c5fcc4ac079873/invoke.js"></script>
`;


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />

      {/* Kita letakkan Native Banner di antara Statistik dan Harga */}
      <AdsterraBanner code={nativeBannerCode} />

      <PricingSection />
      <Testimonials />

      {/* Kita bisa letakkan banner 300x250 di sini */}
      <AdsterraBanner code={banner300x250Code} />

      <CallToAction />
    </>
  );
};

export default HomePage;