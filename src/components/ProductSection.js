import React, { useRef } from 'react';
import './ProductSection.css';

const ProductSection = () => {
  const weeklyStarsRef = useRef(null);
  const tenTLRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  const weeklyStars = [
    {
      id: 1,
      title: "Domestos Çamaşır Suyu",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺165,00",
      salePrice: "₺145,00",
      discount: "%12",
      badge: "HAFTANIN YILDIZLARI",
      dates: "1-7 AĞUSTOS TARİHLERİ ARASINDA"
    },
    {
      id: 2,
      title: "Namet Dana Kangal Sucuk 280 G",
      image: "https://images.unsplash.com/photo-1599822829646-c3c17525e9b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺165,00",
      salePrice: "₺145,00",
      discount: "%12"
    },
    {
      id: 3,
      title: "Namet Dana Parmak Sucuk 280 G",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺165,00",
      salePrice: "₺145,00",
      discount: "%12"
    },
    {
      id: 4,
      title: "Şahin Çemeni Sıvılmış Dana Pastırma 80 G",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺200,00",
      salePrice: "₺159,00",
      discount: "%21"
    },
    {
      id: 5,
      title: "İçim Kaşar Peyniri 500 G",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺199,00",
      salePrice: "₺159,00",
      discount: "%20"
    },
    {
      id: 6,
      title: "Sütaş Kaşar Peyniri 500 G",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺199,00",
      salePrice: "₺159,00",
      discount: "%20"
    },
    {
      id: 7,
      title: "Sütaş Tam Yağlı Beyaz Peynir 700 G",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺175,00",
      salePrice: "₺145,00",
      discount: "%17"
    }
  ];

  const tenTLProducts = [
    {
      id: 8,
      title: "Papia BioCare 3 Katlı Kağıt Havlu 8'li",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺219,00",
      salePrice: "₺199,00",
      discount: "10 TL ve üzeri alışverişlerinizde",
      dates: "1-7 AĞUSTOS TARİHLERİ ARASINDA"
    },
    {
      id: 9,
      title: "Papia İnova 3 Katlı Kağıt Havlu 8'li",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺199,00",
      salePrice: "₺199,00"
    },
    {
      id: 10,
      title: "Marmarabirlik Doğal Yağlı Salamura Siyah Zeytin 3XS-4XS 800 G",
      image: "https://images.unsplash.com/photo-1596097264710-8c6e7b1b84f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺219,00",
      salePrice: "₺219,00"
    },
    {
      id: 11,
      title: "Bingo Yüzey Temizlik Havlusu Beyaz Sabun 96'lı",
      image: "https://images.unsplash.com/photo-1585515656418-f9f78a6c4531?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺120,00",
      salePrice: "₺120,00"
    },
    {
      id: 12,
      title: "Bingo Yüzey Temizlik Havlusu Lavanta 96'lı",
      image: "https://images.unsplash.com/photo-1556909114-f6e1ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺120,00",
      salePrice: "₺120,00"
    },
    {
      id: 13,
      title: "Finish Quantum Özel Seri Bulaşık Makinesi Kapsülü 45'li",
      image: "https://images.unsplash.com/photo-1556909191-71fd9d8beb28?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      originalPrice: "₺389,00",
      salePrice: "₺389,00"
    }
  ];

  return (
    <div className="product-section">
      {/* Weekly Stars Section */}
      <div className="section-header">
        <h2>Haftanın Yıldızları</h2>
        <button className="view-all-btn">Tümünü Gör →</button>
      </div>
      
      <div className="carousel-wrapper">
        <button 
          className="carousel-nav-btn left" 
          onClick={() => scrollLeft(weeklyStarsRef)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="products-horizontal-scroll" ref={weeklyStarsRef}>
          {weeklyStars.map((product) => (
            <div key={product.id} className="product-card-small">
              <div className="product-badge-red">HAFTANIN YILDIZLARI</div>
              <div className="product-image-container-small">
                <img src={product.image} alt={product.title} className="product-image-small" />
                <div className="discount-badge-small">%{product.discount?.replace('%', '')}</div>
              </div>
              <div className="product-info-small">
                <h3 className="product-title-small">{product.title}</h3>
                <div className="price-container-small">
                  <span className="original-price-small">{product.originalPrice}</span>
                  <span className="sale-price-small">{product.salePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-nav-btn right" 
          onClick={() => scrollRight(weeklyStarsRef)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* 10 TL Campaign Section */}
      <div className="campaign-section">
        <div className="campaign-header">
          <h2>10 TL ve üzeri alışverişlerinizde</h2>
          <button className="view-all-btn">Tümünü Gör →</button>
        </div>
        
        <div className="carousel-wrapper">
          <button 
            className="carousel-nav-btn left" 
            onClick={() => scrollLeft(tenTLRef)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="products-horizontal-scroll" ref={tenTLRef}>
            {tenTLProducts.map((product) => (
              <div key={product.id} className="product-card-small campaign">
                <div className="campaign-badge">10 TL ve üzeri alışverişlerinizde</div>
                <div className="product-image-container-small">
                  <img src={product.image} alt={product.title} className="product-image-small" />
                  <div className="price-tag-small">₺{product.salePrice?.replace('₺', '')}</div>
                </div>
                <div className="product-info-small">
                  <h3 className="product-title-small">{product.title}</h3>
                  <div className="price-simple-small">{product.salePrice}</div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-nav-btn right" 
            onClick={() => scrollRight(tenTLRef)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;