import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../Context/FavoritesContext";

const LandCard = ({ land }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  return (
    <div className="land-card">
      <img src={land.imageUrl} alt={land.title} />
      <div className="land-card-content">
        <h3>{land.title}</h3>
        <p><strong>Location:</strong> {land.location}</p>
        <p className="land-card-price">Price: ${land.price.toLocaleString()}</p>
        <div className="land-card-actions">
          <Link to={`/lands/${land.id}`}>
            View Details
          </Link>
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
  );
};

export default LandCard; 