import React from "react";
import { Link } from "react-router-dom";

const LandList = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Land Categories</h1>
        <p className="page-subtitle">Choose the type of land you're looking for</p>
      </div>
      
      <div className="land-categories-container">
        <div className="category-buttons">
          <Link to="/agricultural-lands" className="category-button agricultural">
            <div className="category-icon">🌾</div>
            <h2>Agricultural Lands</h2>
            <p>Find the best land for farming, crops, and livestock</p>
          </Link>
          
          <Link to="/development-lands" className="category-button development">
            <div className="category-icon">🏗️</div>
            <h2>Development Lands</h2>
            <p>Find the best land for construction and commercial use</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandList; 