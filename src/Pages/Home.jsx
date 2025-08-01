import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-page">
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Find Your Perfect Land</h1>
        <p className="hero-subtitle">
          Discover and rent the perfect piece of land for your needs. From agricultural to recreational, 
          we connect landowners with renters across the country.
        </p>
        <div className="hero-actions">
          <Link to="/lands" className="btn btn-primary">Browse Lands</Link>
          <Link to="/register" className="btn btn-secondary">List Your Land</Link>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Available Lands</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1,200+</span>
            <span className="stat-label">Happy Renters</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Cities Covered</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          <span className="placeholder-icon">🏞️</span>
          <p>Beautiful Landscapes</p>
        </div>
      </div>
    </section>

    


    {/* CTA Section */}
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Find Your Perfect Land?</h2>
          <p>Join thousands of users who have found their ideal land through our platform.</p>
          <div className="cta-actions">
            <Link to="/lands" className="btn btn-primary">Start Searching</Link>
            <Link to="/register" className="btn btn-outline">Create Account</Link>
          </div>
        </div>
      </div>
    </section>

    {/* Categories Section */}
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <h2>Land Categories</h2>
          <p>Find the type of land that suits your needs</p>
        </div>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">🌾</div>
            <h3>Agricultural</h3>
            <p>Farming, crops, livestock</p>
            <Link to="/lands/agricultural" className="category-link">Browse →</Link>
          </div>
          <div className="category-card">
            <div className="category-icon">🏗️</div>
            <h3>Development</h3>
            <p>Construction, commercial use</p>
            <Link to="/lands/development" className="category-link">Browse →</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
