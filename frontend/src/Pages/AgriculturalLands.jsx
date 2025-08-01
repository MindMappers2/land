import React, { useEffect, useState } from "react";
import LandCard from "../Components/LandCard";

const AgriculturalLands = () => {
  const [lands, setLands] = useState([]);
  const [filteredLands, setFilteredLands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [cropType, setCropType] = useState("all");

  useEffect(() => {
    const allLands = [
      { id: 1, title: "Green Acres", location: "Texas", price: 10000, imageUrl: "https://via.placeholder.com/320x200/27ae60/ffffff?text=Green+Acres", category: "agricultural", size: "100 acres", cropType: "corn", soilType: "loamy" },
      { id: 2, title: "Sunny Fields", location: "California", price: 20000, imageUrl: "https://via.placeholder.com/320x200/f39c12/ffffff?text=Sunny+Fields", category: "agricultural", size: "150 acres", cropType: "wheat", soilType: "sandy" },
      { id: 4, title: "Riverside Farm", location: "Oregon", price: 18000, imageUrl: "https://via.placeholder.com/320x200/3498db/ffffff?text=Riverside+Farm", category: "agricultural", size: "80 acres", cropType: "vegetables", soilType: "clay" },
      { id: 7, title: "Cornfield Plains", location: "Iowa", price: 22000, imageUrl: "https://via.placeholder.com/320x200/2ecc71/ffffff?text=Cornfield+Plains", category: "agricultural", size: "200 acres", cropType: "corn", soilType: "loamy" },
      { id: 8, title: "Wheat Valley", location: "Kansas", price: 16000, imageUrl: "https://via.placeholder.com/320x200/f1c40f/ffffff?text=Wheat+Valley", category: "agricultural", size: "120 acres", cropType: "wheat", soilType: "sandy" },
      { id: 9, title: "Dairy Meadows", location: "Wisconsin", price: 19000, imageUrl: "https://via.placeholder.com/320x200/95a5a6/ffffff?text=Dairy+Meadows", category: "agricultural", size: "90 acres", cropType: "pasture", soilType: "loamy" }
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
      const matchesCropType = cropType === "all" || land.cropType === cropType;
      return matchesSearch && matchesPrice && matchesCropType;
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
        case "size":
          return parseInt(a.size) - parseInt(b.size);
        default:
          return 0;
      }
    });

    setFilteredLands(filtered);
  }, [lands, searchTerm, sortBy, priceRange, cropType]);

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

  const handleCropTypeChange = (e) => {
    setCropType(e.target.value);
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Agricultural Lands</h1>
        <p className="page-subtitle">Find the best land for farming, crops, and livestock</p>
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
              <option value="size">Size</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Crop Type:</label>
            <select value={cropType} onChange={handleCropTypeChange} className="filter-select">
              <option value="all">All Types</option>
              <option value="corn">Corn</option>
              <option value="wheat">Wheat</option>
              <option value="vegetables">Vegetables</option>
              <option value="pasture">Pasture</option>
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
              setCropType("all");
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

export default AgriculturalLands;