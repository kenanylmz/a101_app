import React, { useState, useEffect } from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const slides = [
    {
      id: 1,
      promotionText: "10 TL ve üzeri alışverişlerinizde",
      dateRange: "1-7 AĞUSTOS",
      dateSubtext: "KAMPANYA TARİHLERİ",
      productTitle: "Marmarabirlik Doğal Yağlı Salamura Siyah Zeytin 800 g",
      productDetails: ["*3X5=4X5", "*381-450 Kal."],
      originalPrice: "₺219",
      discount: "%55",
      finalPrice: "₺99,50",
      image: "https://images.unsplash.com/photo-1596097264710-8c6e7b1b84f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badgeText: "MARMARABIRLIK",
      badgeSubtext: "ŞEFKET SERİSİ"
    },
    {
      id: 2,
      promotionText: "15 TL ve üzeri alışverişlerinizde",
      dateRange: "8-14 AĞUSTOS",
      dateSubtext: "KAMPANYA TARİHLERİ",
      productTitle: "Premium Kahve Çeşitleri",
      productDetails: ["*Özel Blend", "*250g Paket"],
      originalPrice: "₺150",
      discount: "%40",
      finalPrice: "₺89,90",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badgeText: "PREMIUM",
      badgeSubtext: "KAHVE"
    },
    {
      id: 3,
      promotionText: "20 TL ve üzeri alışverişlerinizde",
      dateRange: "15-21 AĞUSTOS",
      dateSubtext: "KAMPANYA TARİHLERİ",
      productTitle: "Organik Bal Çeşitleri",
      productDetails: ["*Doğal", "*500g Cam Kavanoz"],
      originalPrice: "₺180",
      discount: "%45",
      finalPrice: "₺99,00",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badgeText: "ORGANİK",
      badgeSubtext: "BAL"
    },
    {
      id: 4,
      promotionText: "25 TL ve üzeri alışverişlerinizde",
      dateRange: "22-28 AĞUSTOS",
      dateSubtext: "KAMPANYA TARİHLERİ",
      productTitle: "Taze Meyve Sebze Paketi",
      productDetails: ["*Mevsimlik", "*5kg Karışık"],
      originalPrice: "₺120",
      discount: "%35",
      finalPrice: "₺77,90",
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badgeText: "TAZE",
      badgeSubtext: "MEYVE SEBZE"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [slides.length, isPaused]);

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="hero-banner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="promotion-badge">
            <span className="discount-text">{currentSlideData.promotionText}</span>
            <div className="date-badge">
              <span>{currentSlideData.dateRange}</span>
              <small>{currentSlideData.dateSubtext}</small>
            </div>
          </div>
          
          <div className="product-info">
            <h2>{currentSlideData.productTitle}</h2>
            <div className="product-details">
              {currentSlideData.productDetails.map((detail, index) => (
                <span key={index}>{detail}</span>
              ))}
            </div>
          </div>
          
          <div className="price-section">
            <div className="original-price">{currentSlideData.originalPrice}</div>
            <div className="discount-percentage">{currentSlideData.discount}</div>
            <div className="final-price">{currentSlideData.finalPrice}</div>
          </div>
        </div>
        
        <div className="product-image">
          <img 
            src={currentSlideData.image}
            alt={currentSlideData.productTitle}
            className="product-img"
          />
          <div className="product-badge">
            <div className="badge-icon">⭐</div>
            <div className="badge-text">
              <strong>{currentSlideData.badgeText}</strong>
              <span>{currentSlideData.badgeSubtext}</span>
            </div>
          </div>
        </div>
      </div>
      
      <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <div className="hero-note">
        <p>*Kampanya tarihleri arasında geçerlidir. Belirlenen ürün ve son kullanma tarihine kadar sınırlı adet ile geçerlidir. Mağaza stoklarında bulunduran ürünler diğer mağazalarda A101 uygulamasından diğer alabilirsiniz.</p>
      </div>
      
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;