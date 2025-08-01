import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LandDetail = () => {
  const { id } = useParams();
  const [land, setLand] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    setLand({
      id,
      title: "Green Acres",
      location: "Texas",
      price: 10000,
      imageUrl: "https://via.placeholder.com/800x400/27ae60/ffffff?text=Green+Acres",
      description: "Beautiful land in Texas with fertile soil and excellent water access. Perfect for farming or development. This property features rolling hills, mature trees, and a natural spring. The soil is rich and suitable for various agricultural activities."
    });
  }, [id]);

  if (!land) return <div className="loading">Loading...</div>;

  return (
    <div className="land-detail-container">
      <div className="land-detail-header">
        <h1 className="page-title">{land.title}</h1>
      </div>
      <img src={land.imageUrl} alt={land.title} className="land-detail-image" />
      <div className="land-detail-info">
        <h3>Property Details</h3>
        <p><strong>Description:</strong> {land.description}</p>
        <p><strong>Location:</strong> {land.location}</p>
        <p><strong>Price:</strong> ${land.price.toLocaleString()}</p>
        <button className="contact-button">
          Contact Owner
        </button>
      </div>
    </div>
  );
};

export default LandDetail; 