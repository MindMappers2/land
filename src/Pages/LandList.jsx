import React, { useEffect, useState } from "react";
import LandCard from "../Components/LandCard";

const LandList = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    // Simulate API call with mock data
    setLands([
      { id: 1, title: "Green Acres", location: "Texas", price: 10000, imageUrl: "https://via.placeholder.com/320x200/27ae60/ffffff?text=Green+Acres", category: "agricultural" },
      { id: 2, title: "Sunny Fields", location: "California", price: 20000, imageUrl: "https://via.placeholder.com/320x200/f39c12/ffffff?text=Sunny+Fields", category: "agricultural" },
      { id: 3, title: "Mountain View", location: "Colorado", price: 15000, imageUrl: "https://via.placeholder.com/320x200/8e44ad/ffffff?text=Mountain+View", category: "development" },
      { id: 4, title: "Riverside Farm", location: "Oregon", price: 18000, imageUrl: "https://via.placeholder.com/320x200/3498db/ffffff?text=Riverside+Farm", category: "agricultural" },
      { id: 5, title: "Golden Valley", location: "Nevada", price: 12000, imageUrl: "https://via.placeholder.com/320x200/e67e22/ffffff?text=Golden+Valley", category: "development" },
      { id: 6, title: "Pine Forest", location: "Washington", price: 25000, imageUrl: "https://via.placeholder.com/320x200/16a085/ffffff?text=Pine+Forest", category: "development" }
    ]);
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Available Lands</h1>
        <p className="page-subtitle">Discover beautiful properties available for sale or rent</p>
      </div>
      <div className="land-grid">
        {lands.map((land) => (
          <LandCard key={land.id} land={land} />
        ))}
      </div>
    </div>
  );
};

export default LandList; 