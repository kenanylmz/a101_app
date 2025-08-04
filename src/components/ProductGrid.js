import React from 'react';
import './ProductGrid.css';

const ProductGrid = () => {
  const categoryProducts = [
    {
      category: 'HAFTANIN YILDIZLARI',
      color: '#E53E3E',
      products: [
        {
          id: 1,
          title: '1 - 7 Ağustos',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isActive: true
        }
      ]
    },
    {
      category: 'ALDIN ALDINI',
      color: '#FFD700',
      products: [
        {
          id: 2,
          title: '7 Ağustos \'tan itibaren',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
      ]
    },
    {
      category: 'ALDIN ALDINI',
      color: '#FFD700',
      products: [
        {
          id: 3,
          title: '31 Temmuz \'dan itibaren',
          image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
      ]
    },
    {
      category: 'A101 ARTI',
      color: '#00D4E7',
      products: [
        {
          id: 4,
          title: '1 - 7 Ağustos',
          image: 'https://images.unsplash.com/photo-1556909114-4f92cd4e2b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
      ]
    },
    {
      category: 'HEP UCUZ',
      color: '#4ECDC4',
      products: [
        {
          id: 5,
          title: '1 - 7 Ağustos',
          image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
      ]
    }
  ];

  return (
    <div className="product-grid">
      <div className="grid-container">
        {categoryProducts.map((categoryGroup, index) => (
          <div key={index} className="category-product-group">
            <div 
              className="category-tab-header"
              style={{ backgroundColor: categoryGroup.color }}
            >
              {categoryGroup.category}
              {categoryGroup.category === 'A101 ARTI' && (
                <span className="stars">⭐⭐</span>
              )}
            </div>
            {categoryGroup.products.map((product) => (
              <div 
                key={product.id} 
                className={`product-card ${product.isActive ? 'active' : ''}`}
              >
                <div className="product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="product-image"
                  />
                  {product.isActive && (
                    <div className="active-badge">Aktif</div>
                  )}
                </div>
                <div className="product-title">{product.title}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;