import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import InfoSection from './components/InfoSection';
import CategoryTabs from './components/CategoryTabs';
import ProductGrid from './components/ProductGrid';
import ProductSection from './components/ProductSection';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('HAFTANIN YILDIZLARI');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.name);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <HeroBanner />
        <InfoSection />
        <CategoryTabs onCategoryChange={handleCategoryChange} />
        <ProductGrid />
        <ProductSection />
      </main>
    </div>
  );
}

export default App;
