import React, { useState, useRef } from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isReturnConditionsOpen, setIsReturnConditionsOpen] = useState(false);
  const [selectedRelatedProducts, setSelectedRelatedProducts] = useState([]);
  
  const similarProductsRef = useRef(null);
  const recentProductsRef = useRef(null);

  const relatedProducts = [
    { id: 1, name: 'Ekmeği 200 G', price: '₺5.00', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400' },
    { id: 2, name: 'Yumurta M Boy 30\'lu', price: '₺139.00', image: 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?w=400' },
    { id: 3, name: 'Limon Kg', price: '₺135.00', image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?w=400' },
    { id: 4, name: 'Beypazarı Sade Maden Suyu 6x200', price: '₺42.00', oldPrice: '₺42.00', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400' },
    { id: 5, name: 'Soğan Kg', price: '₺12.75', image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400' },
    { id: 6, name: 'Su 0.5 L', price: '₺3.75', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400' },
    { id: 7, name: 'Kırmızı Lahana Kg', price: '₺49.00', image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400' },
    { id: 8, name: 'Solay %2.5 Yağlı Süt 1', price: '₺37.50', oldPrice: '₺45.00', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400' }
  ];

  const similarProducts = [
    { id: 1, name: 'Namet Dana Parmak Sucuk 280 G', price: '₺145.00', oldPrice: '₺160.00', image: 'https://images.unsplash.com/photo-1595786577748-8105a0f4fef5?w=400' },
    { id: 2, name: 'Şahin Çemen Kıyımlık Dana Jambon 50 Gr', price: '₺159.00', oldPrice: '₺200.00', image: 'https://images.unsplash.com/photo-1626082927389-261d826c327f?w=400' },
    { id: 3, name: 'Başdaş Dana Kavurma 150 G', price: '₺159.00', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400' },
    { id: 4, name: 'Başdaş Çemen Kıyımlık Dana Jambon 50 Gr', price: '₺189.00', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400' },
    { id: 5, name: 'Doyform Piliç Böfe Sucuk 450 G', price: '₺82.50', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400' },
    { id: 6, name: 'Cumhuriyet Antrikot Çemenez Pastırma Dilimli 100 Gr', price: '₺125.00', image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400' },
    { id: 7, name: 'Gedik Piliç Böfe Sucuk 450 G', price: '₺82.50', image: 'https://images.unsplash.com/photo-1621285895722-0c710271bb9e?w=400' },
    { id: 8, name: 'Maret Dana Fermente Sucuk 400 G', price: '₺179.00', image: 'https://images.unsplash.com/photo-1626082927389-261d826c327f?w=400' }
  ];

  const recentProducts = [
    { id: 1, name: 'Solay Laktozsuz Süt 200 ml', price: '₺12.50', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400' },
    { id: 2, name: 'Namet Dana Kangal Sucuk 280 G', price: '₺145.00', oldPrice: '₺160.00', image: 'https://images.unsplash.com/photo-1626082927389-261d826c327f?w=400' },
    { id: 3, name: 'Solay %2.5 Yağlı Süt 1', price: '₺37.50', oldPrice: '₺45.00', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400' },
    { id: 4, name: 'Solay Yarım Yağlı Süt 4x1 L', price: '₺129.00', oldPrice: '₺159.00', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400' },
    { id: 5, name: 'Biraşlı Yarım Yağlı Süt 1 L', price: '₺28.50', image: 'https://images.unsplash.com/photo-1517448151705-0e8d8e570cd6?w=400' },
    { id: 6, name: 'Biraşlı Yağsız Süt 1 L', price: '₺23.50', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400' },
    { id: 7, name: 'Biraşlı %3.1 Yağlı Süt 1', price: '₺33.75', image: 'https://images.unsplash.com/photo-1517448151705-0e8d8e570cd6?w=400' },
    { id: 8, name: 'Biraşlı Mikozlu Kakaolu Süt 200 ml', price: '₺10.75', image: 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?w=400' }
  ];

  const toggleRelatedProduct = (productId) => {
    setSelectedRelatedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const calculateTotalPrice = () => {
    const mainPrice = 145.00;
    const selectedPrices = relatedProducts
      .filter(product => selectedRelatedProducts.includes(product.id))
      .reduce((sum, product) => sum + parseFloat(product.price.replace('₺', '').replace(',', '.')), 0);
    return (mainPrice + selectedPrices).toFixed(2);
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <span>Anasayfa</span>
        <span className="separator">›</span>
        <span>Et, Balık, Tavuk</span>
        <span className="separator">›</span>
        <span>Şarküteri</span>
      </div>

      <div className="product-main">
        <div className="product-image-section">
          <div className="discount-badge">
            <span className="discount-percent">%12</span>
            <span className="discount-text">İNDİRİM</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1626082927389-261d826c327f?w=800" 
            alt="Namet Dana Kangal Sucuk"
            className="product-image"
          />
          <div className="special-badge">
            <img src="https://cdn.a101.com.tr/assets/images/yerli-uretim.png" alt="Yerli Üretim" />
          </div>
        </div>

        <div className="product-info-section">
          <div className="product-label">HAFTANIN YILDIZLARI</div>
          <h1 className="product-title">Namet Dana Kangal Sucuk 280 G</h1>
          <p className="product-code">Ürün Kodu: 11000305</p>
          
          <div className="product-price">
            <span className="price-current">₺145,00</span>
            <span className="price-old">₺165,00</span>
          </div>

          <button className="add-to-cart-btn">Sepete Ekle</button>

          <div className="product-actions">
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 2L15 5M15 5L18 8M15 5H3M6 22L9 19M9 19L6 16M9 19H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 21L10.55 19.77C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 19.77L12 21Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="store-finder-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Mağazada Bul</span>
            </button>
          </div>

          <div className="product-description">
            <button 
              className="description-toggle"
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            >
              <span>Ürün Açıklaması</span>
              <svg 
                className={`arrow ${isDescriptionOpen ? 'open' : ''}`}
                width="12" 
                height="8" 
                viewBox="0 0 12 8"
              >
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            {isDescriptionOpen && (
              <div className="description-content">
                <h3>Namet Dana Kangal Sucuk 280 Gr</h3>
                <p>Namet Dana Kangal Sucuk, özenle seçilmiş dana etinden üretilen geleneksel bir Türk şarküteri ürünüdür. %100 dana eti kullanılarak hazırlanan bu sucuk, doğal bağırsak içerisinde özel baharatlarla harmanlanmıştır. Yüksek protein içeriği ve karakteristik lezzeti ile sofraların vazgeçilmezi olan Namet Dana Kangal Sucuk, kahvaltılarınızda, tostlarınızda ve yemeklerinizde güvenle kullanabileceğiniz bir üründür.</p>
                
                <h4>Ürün Özellikleri:</h4>
                <ul>
                  <li>%100 dana eti içerir</li>
                  <li>Doğal bağırsak kullanılmıştır</li>
                  <li>Geleneksel yöntemlerle üretilmiştir</li>
                  <li>MSG içermez</li>
                  <li>280 gram ağırlığında</li>
                </ul>
                
                <h4>Besin Değerleri (100g):</h4>
                <ul>
                  <li>Enerji: 469 kcal</li>
                  <li>Protein: 19.2g</li>
                  <li>Yağ: 43.2g</li>
                  <li>Karbonhidrat: 2.1g</li>
                  <li>Tuz: 2.8g</li>
                </ul>
                
                <h4>Saklama Koşulları:</h4>
                <p>Ürün 0-4°C arasında buzdolabında muhafaza edilmelidir. Açıldıktan sonra hava almayacak şekilde sarılarak 1 hafta içinde tüketilmesi önerilir. Son kullanma tarihine dikkat ediniz.</p>
                
                <div className="return-conditions-section">
                  <button 
                    className="description-toggle sub-toggle"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsReturnConditionsOpen(!isReturnConditionsOpen);
                    }}
                  >
                    <span>İade Koşulları</span>
                    <svg 
                      className={`arrow ${isReturnConditionsOpen ? 'open' : ''}`}
                      width="12" 
                      height="8" 
                      viewBox="0 0 12 8"
                    >
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                  {isReturnConditionsOpen && (
                    <div className="return-conditions-content">
                      <p>A101 müşteri memnuniyetini ön planda tutar. Satın aldığınız ürünlerde herhangi bir problem yaşamanız durumunda aşağıdaki koşullar dahilinde iade işlemi yapabilirsiniz:</p>
                      
                      <h5>İade Şartları:</h5>
                      <ul>
                        <li>Ürün faturası veya fişi ile birlikte iade edilmelidir</li>
                        <li>Gıda ürünlerinde ambalajı açılmamış olmalıdır</li>
                        <li>Son kullanma tarihi geçmemiş olmalıdır</li>
                        <li>Ürün hasarlı veya bozuk olmamalıdır (üretim hatası hariç)</li>
                        <li>Satın alma tarihinden itibaren 14 gün içinde iade edilmelidir</li>
                      </ul>
                      
                      <h5>İade Süreci:</h5>
                      <p>İade işlemi için ürünü satın aldığınız A101 mağazasına başvurabilirsiniz. Müşteri hizmetleri personelimiz size yardımcı olacaktır.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="related-products-section">
        <h2>Birlikte Satın Alınanlar</h2>
        <div className="related-products-grid">
          {relatedProducts.map(product => (
            <div 
              key={product.id} 
              className={`related-product-card ${selectedRelatedProducts.includes(product.id) ? 'selected' : ''}`}
              onClick={() => toggleRelatedProduct(product.id)}
            >
              <img src={product.image} alt={product.name} />
              <button className="add-btn">
                {selectedRelatedProducts.includes(product.id) ? '−' : '+'}
              </button>
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                {product.price}
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
              </p>
            </div>
          ))}
        </div>
        {selectedRelatedProducts.length > 0 && (
          <div className="total-price">
            Toplam: ₺{calculateTotalPrice()}
          </div>
        )}
      </div>

      <div className="similar-products-section">
        <h2>Benzer Ürünler</h2>
        <div className="products-carousel">
          <button 
            className="carousel-btn prev"
            onClick={() => scrollLeft(similarProductsRef)}
          >
            ‹
          </button>
          <div className="products-grid" ref={similarProductsRef}>
            {similarProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <button className="add-btn">+</button>
                <h3>{product.name}</h3>
                <div className="price-info">
                  <span className="current-price">{product.price}</span>
                  {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                </div>
              </div>
            ))}
          </div>
          <button 
            className="carousel-btn next"
            onClick={() => scrollRight(similarProductsRef)}
          >
            ›
          </button>
        </div>
      </div>

      <div className="recent-products-section">
        <h2>Son Gezdiğin Ürünler</h2>
        <div className="products-carousel">
          <button 
            className="carousel-btn prev"
            onClick={() => scrollLeft(recentProductsRef)}
          >
            ‹
          </button>
          <div className="products-grid" ref={recentProductsRef}>
            {recentProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <button className="add-btn">+</button>
                <h3>{product.name}</h3>
                <div className="price-info">
                  <span className="current-price">{product.price}</span>
                  {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                </div>
              </div>
            ))}
          </div>
          <button 
            className="carousel-btn next"
            onClick={() => scrollRight(recentProductsRef)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;