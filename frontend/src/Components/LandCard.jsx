import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../Context/FavoritesContext";
import ContactForm from "./ContactForm";

const LandCard = ({ land }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <div className="land-card">
        <img src={land.imageUrl} alt={land.title} />
        <div className="land-card-content">
          <h3>{land.title}</h3>
          <p><strong>Location:</strong> {land.location}</p>
          <p className="land-card-price">Price: ${land.price.toLocaleString()}</p>
          {land.size && <p><strong>Size:</strong> {land.size}</p>}
          {land.type && <p><strong>Type:</strong> {land.type}</p>}
          {land.cropType && <p><strong>Crop Type:</strong> {land.cropType}</p>}
          <div className="land-card-actions">
            <Link to={`/lands/${land.id}`}>
              View Details
            </Link>
            <button 
              onClick={() => setShowContactForm(true)}
              className="contact-btn"
            >
              📞 Contact
            </button>
            {isFavorite(land.id) ? (
              <button 
                onClick={() => removeFavorite(land.id)}
                className="remove-favorite"
              >
                💔 Remove from Favorites
              </button>
            ) : (
              <button 
                onClick={() => addFavorite(land)}
                className="add-favorite"
              >
                ❤️ Add to Favorites
              </button>
            )}
          </div>
        </div>
      </div>

      {showContactForm && (
        <ContactForm 
          land={land} 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </>
  );
};

export default LandCard; 