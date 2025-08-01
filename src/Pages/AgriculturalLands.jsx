import React, { useEffect, useState } from "react";
import LandCard from "../Components/LandCard";

const AgriculturalLands = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    setLands([
      { id: 1, title: "Green Acres", location: "Texas", price: 10000, imageUrl: "https://via.placeholder.com/320x200/27ae60/ffffff?text=Green+Acres", category: "agricultural" },
      { id: 2, title: "Sunny Fields", location: "California", price: 20000, imageUrl: "https://via.placeholder.com/320x200/f39c12/ffffff?text=Sunny+Fields", category: "agricultural" },
      { id: 4, title: "Riverside Farm", location: "Oregon", price: 18000, imageUrl: "https://via.placeholder.com/320x200/3498db/ffffff?text=Riverside+Farm", category: "agricultural" }
    ]);
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Agricultural Lands</h1>
        <p className="page-subtitle">Find the best land for farming, crops, and livestock</p>
      </div>
      <div className="land-grid">
        {lands.map((land) => (
          <LandCard key={land.id} land={land} />
        ))}
      </div>
    </div>
  );
};

export default AgriculturalLands;