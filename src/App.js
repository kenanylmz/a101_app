import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import InfoSection from './components/InfoSection';
import ProductGrid from './components/ProductGrid';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroBanner />
        <InfoSection />
        <ProductGrid />
        <ProductSection />
      </main>
    </div>
  );
}

export default App;
