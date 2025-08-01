import React, { useEffect, useState } from "react";
import LandCard from "../Components/LandCard";

const DevelopmentLands = () => {
  const [lands, setLands] = useState([]);
  const [filteredLands, setFilteredLands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });

  useEffect(() => {
    const allLands = [
      { id: 3, title: "Mountain View", location: "Colorado", price: 15000, imageUrl: "https://via.placeholder.com/320x200/8e44ad/ffffff?text=Mountain+View", category: "development", size: "50 acres", type: "residential" },
      { id: 5, title: "Golden Valley", location: "Nevada", price: 12000, imageUrl: "https://via.placeholder.com/320x200/e67e22/ffffff?text=Golden+Valley", category: "development", size: "30 acres", type: "commercial" },
      { id: 6, title: "Pine Forest", location: "Washington", price: 25000, imageUrl: "https://via.placeholder.com/320x200/16a085/ffffff?text=Pine+Forest", category: "development", size: "75 acres", type: "mixed" },
      { id: 10, title: "Urban Heights", location: "New York", price: 35000, imageUrl: "https://via.placeholder.com/320x200/9b59b6/ffffff?text=Urban+Heights", category: "development", size: "25 acres", type: "residential" },
      { id: 11, title: "Tech Park", location: "California", price: 28000, imageUrl: "https://via.placeholder.com/320x200/3498db/ffffff?text=Tech+Park", category: "development", size: "40 acres", type: "commercial" },
      { id: 12, title: "Industrial Zone", location: "Texas", price: 18000, imageUrl: "https://via.placeholder.com/320x200/e74c3c/ffffff?text=Industrial+Zone", category: "development", size: "60 acres", type: "industrial" },
      { id: 13, title: "Commercial Plaza", location: "Florida", price: 22000, imageUrl: "https://via.placeholder.com/320x200/f39c12/ffffff?text=Commercial+Plaza", category: "development", size: "35 acres", type: "commercial" },
      { id: 14, title: "Residential Complex", location: "Arizona", price: 19000, imageUrl: "https://via.placeholder.com/320x200/1abc9c/ffffff?text=Residential+Complex", category: "development", size: "45 acres", type: "residential" }
    ];
    setLands(allLands);
    setFilteredLands(allLands);
  }, []);

  // Filter and sort lands
  useEffect(() => {
    let filtered = lands.filter(land => {
      const matchesSearch = land.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           land.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = land.price >= priceRange.min && land.price <= priceRange.max;
      return matchesSearch && matchesPrice;
    });

    // Sort lands
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.title.localeCompare(b.title);
        case "location":
          return a.location.localeCompare(b.location);
        default:
          return 0;
      }
    });

    setFilteredLands(filtered);
  }, [lands, searchTerm, sortBy, priceRange]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Development Lands</h1>
        <p className="page-subtitle">Find the best land for construction and commercial use</p>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label>Sort by:</label>
            <select value={sortBy} onChange={handleSort} className="filter-select">
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="location">Location</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range:</label>
            <div className="price-range">
              <input
                type="number"
                name="min"
                placeholder="Min"
                value={priceRange.min}
                onChange={handlePriceChange}
                className="price-input"
              />
              <span>to</span>
              <input
                type="number"
                name="max"
                placeholder="Max"
                value={priceRange.max}
                onChange={handlePriceChange}
                className="price-input"
              />
            </div>
          </div>
        </div>

        <div className="results-info">
          <p>Showing {filteredLands.length} of {lands.length} properties</p>
        </div>
      </div>

      <div className="land-grid">
        {filteredLands.map((land) => (
          <LandCard key={land.id} land={land} />
        ))}
      </div>

      {filteredLands.length === 0 && (
        <div className="no-results">
          <p>No properties found matching your criteria.</p>
          <button 
            onClick={() => {
              setSearchTerm("");
              setPriceRange({ min: 0, max: 50000 });
              setSortBy("name");
            }}
            className="reset-filters-btn"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default DevelopmentLands;