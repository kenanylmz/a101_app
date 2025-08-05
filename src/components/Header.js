import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo-section">
            <Link to="/" className={`logo-card ${location.pathname === '/' ? 'active' : ''}`}>
              <span className="logo-main">A•101</span>
            </Link>
            <Link to="/aldim" className={`logo-card ${location.pathname === '/aldim' ? 'active' : ''}`}>
              <div className="logo-icon">🛒</div>
              <div className="logo-text">
                <span className="logo-main">A•101</span>
                <span className="logo-subtitle">ALDIM</span>
              </div>
            </Link>
            <Link to="/kapida" className={`logo-card ${location.pathname === '/kapida' ? 'active' : ''}`}>
              <div className="logo-icon">🚚</div>
              <div className="logo-text">
                <span className="logo-main">A•101</span>
                <span className="logo-subtitle">KAPIDA</span>
              </div>
            </Link>
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