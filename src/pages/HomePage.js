import React from 'react';
import HeroBanner from '../components/HeroBanner';
import InfoSection from '../components/InfoSection';
import ProductGrid from '../components/ProductGrid';
import ProductSection from '../components/ProductSection';

function HomePage() {
  return (
    <>
      <HeroBanner />
      <InfoSection />
      <ProductGrid />
      <ProductSection />
    </>
  );
}

export default HomePage;