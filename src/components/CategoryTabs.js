import React, { useState } from 'react';
import './CategoryTabs.css';

const CategoryTabs = ({ onCategoryChange }) => {
  const [activeTab, setActiveTab] = useState('HAFTANIN YILDIZLARI');

  const categories = [
    { id: 'weekly-stars', name: 'HAFTANIN YILDIZLARI', color: '#E53E3E' },
    { id: 'aldin-aldini', name: 'ALDIN ALDINI', color: '#FFD700' },
    { id: 'aldin-aldini-2', name: 'ALDIN ALDINI', color: '#FFD700' },
    { id: 'a101-arti', name: 'A101 ARTI', color: '#00D4E7' },
    { id: 'hep-ucuz', name: 'HEP UCUZ', color: '#4ECDC4' }
  ];

  const handleTabClick = (category) => {
    setActiveTab(category.name);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="category-tabs">
      <div className="tabs-container">
        {categories.map((category, index) => (
          <button
            key={`${category.id}-${index}`}
            className={`tab-button ${activeTab === category.name ? 'active' : ''}`}
            style={{
              background: activeTab === category.name ? category.color : '#f5f5f5',
              color: activeTab === category.name ? 'white' : '#333'
            }}
            onClick={() => handleTabClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;