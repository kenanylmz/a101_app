import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section-wrapper">
      <div className="info-container">
        <div className="info-main-section">
          <div className="info-card">
            <div className="info-card-image">
              <img 
                src="https://images.unsplash.com/photo-1556909114-4f7e0b4a5bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                alt="Abane Ol"
              />
            </div>
            <div className="info-card-content">
              <h3>Sana özel indirim ve fırsatlardan yararlanmak için Afişlere Abone Ol.</h3>
              <button className="info-btn primary">Abone Ol</button>
            </div>
          </div>
        </div>

        <div className="info-details">
          <div className="detail-section">
            <h4>En Yakın Mağazalar</h4>
            <p>Ev/iş adresinin yakınındaki A101 Mağazalarında seni bekliyor. Sana en yakın A101 Mağazasını bulmak için tıkla.</p>
            <button className="info-btn secondary">Mağazaları Gör</button>
          </div>
          
          <div className="detail-section gift-card">
            <div className="gift-card-visual">
              <div className="gift-card-image">
                <div className="a101-logo">A101</div>
              </div>
              <div className="confetti">🎉</div>
            </div>
            <div className="gift-card-content">
              <h4>A101 Hediye Kartı</h4>
              <p>Hediye Kartı ile sevdiklerinize veya kendinize hediye alabilirsiniz muttlu olabilir.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;