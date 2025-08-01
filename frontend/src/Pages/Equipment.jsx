import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Equipment = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const equipmentData = [
    {
      id: 1,
      name: "Tractor - John Deere 5075E",
      category: "machinery",
      price: "$45,000",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "75 HP tractor with front loader, perfect for agricultural operations",
      location: "Karnataka",
      condition: "Used - Excellent"
    },
    {
      id: 2,
      name: "Irrigation System - Drip Kit",
      category: "irrigation",
      price: "$2,500",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Complete drip irrigation system for 2 acres",
      location: "Maharashtra",
      condition: "New"
    },
    {
      id: 3,
      name: "Harvester - Combine",
      category: "machinery",
      price: "$85,000",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "Self-propelled combine harvester for wheat and rice",
      location: "Punjab",
      condition: "Used - Good"
    },
    {
      id: 4,
      name: "Solar Water Pump",
      category: "irrigation",
      price: "$8,500",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "5 HP solar-powered water pump with panels",
      location: "Rajasthan",
      condition: "New"
    },
    {
      id: 5,
      name: "Seed Drill",
      category: "tools",
      price: "$3,200",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "12-row seed drill for precision planting",
      location: "Gujarat",
      condition: "Used - Excellent"
    },
    {
      id: 6,
      name: "Fertilizer Spreader",
      category: "tools",
      price: "$1,800",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Broadcast fertilizer spreader for large areas",
      location: "Tamil Nadu",
      condition: "Used - Good"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Equipment' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'irrigation', name: 'Irrigation' },
    { id: 'tools', name: 'Tools & Implements' }
  ];

  const filteredEquipment = selectedCategory === 'all' 
    ? equipmentData 
    : equipmentData.filter(item => item.category === selectedCategory);

  return (
    <div className="equipment-page">
      <div className="page-header">
        <h1 className="page-title">Agricultural Equipment</h1>
        <p className="page-subtitle">
          Find the perfect equipment for your farming needs. Quality machinery, tools, and irrigation systems.
        </p>
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="equipment-grid">
          {filteredEquipment.map(equipment => (
            <div key={equipment.id} className="equipment-card">
              <div className="equipment-image">
                <img src={equipment.image} alt={equipment.name} />
                <div className="equipment-category">{equipment.category}</div>
              </div>
              <div className="equipment-content">
                <h3>{equipment.name}</h3>
                <p className="equipment-description">{equipment.description}</p>
                <div className="equipment-details">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{equipment.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Condition:</span>
                    <span className="detail-value">{equipment.condition}</span>
                  </div>
                </div>
                <div className="equipment-price">{equipment.price}</div>
                <div className="equipment-actions">
                  <Link to={`/equipment/${equipment.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                  <button className="btn btn-secondary">
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Categories Section */}
        <div className="equipment-categories-section">
          <div className="section-header">
            <h2>Equipment Categories</h2>
            <p>Browse equipment by category to find exactly what you need</p>
          </div>
          
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">🚜</div>
              <h3>Machinery</h3>
              <p>Tractors, harvesters, and heavy farming equipment</p>
              <Link to="/equipment?category=machinery" className="category-link">
                Browse Machinery →
              </Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">💧</div>
              <h3>Irrigation</h3>
              <p>Water pumps, drip systems, and irrigation equipment</p>
              <Link to="/equipment?category=irrigation" className="category-link">
                Browse Irrigation →
              </Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">🔧</div>
              <h3>Tools & Implements</h3>
              <p>Hand tools, seed drills, and farming implements</p>
              <Link to="/equipment?category=tools" className="category-link">
                Browse Tools →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Sell Your Equipment?</h2>
            <p>List your agricultural equipment and reach thousands of farmers across India</p>
            <div className="cta-actions">
              <Link to="/dashboard" className="btn btn-primary">
                List Equipment
              </Link>
              <Link to="/lands" className="btn btn-secondary">
                Browse Lands
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment; 