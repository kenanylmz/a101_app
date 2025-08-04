import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo-section">
            <div className="logo-card active">
              <span className="logo-main">A•101</span>
            </div>
            <div className="logo-card">
              <div className="logo-icon">🛒</div>
              <div className="logo-text">
                <span className="logo-main">A•101</span>
                <span className="logo-subtitle">ALDIM</span>
              </div>
            </div>
            <div className="logo-card">
              <div className="logo-icon">🚚</div>
              <div className="logo-text">
                <span className="logo-main">A•101</span>
                <span className="logo-subtitle">KAPIDA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Aradığın ürünü yaz..."
            className="search-input"
          />
        </div>
        
        <div className="header-right">
          <button className="login-btn">Giriş Yap</button>
        </div>
      </div>
    </header>
  );
};

export default Header;