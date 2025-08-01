import React, { useEffect, useState } from "react";
import LandCard from "../Components/LandCard";

const DevelopmentLands = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    setLands([
      { id: 3, title: "Mountain View", location: "Colorado", price: 15000, imageUrl: "https://via.placeholder.com/320x200/8e44ad/ffffff?text=Mountain+View", category: "development" },
      { id: 5, title: "Golden Valley", location: "Nevada", price: 12000, imageUrl: "https://via.placeholder.com/320x200/e67e22/ffffff?text=Golden+Valley", category: "development" },
      { id: 6, title: "Pine Forest", location: "Washington", price: 25000, imageUrl: "https://via.placeholder.com/320x200/16a085/ffffff?text=Pine+Forest", category: "development" }
    ]);
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Development Lands</h1>
        <p className="page-subtitle">Find the best land for construction and commercial use</p>
      </div>
      <div className="land-grid">
        {lands.map((land) => (
          <LandCard key={land.id} land={land} />
        ))}
      </div>
    </div>
  );
};

export default DevelopmentLands;