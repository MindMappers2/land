import React, { useContext } from "react";
import { FavoritesContext } from "../Context/FavoritesContext";
import LandCard from "../Components/LandCard";

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="favorites-container">
      <div className="page-header">
        <h1 className="page-title">My Favorites</h1>
        <p className="page-subtitle">Your saved properties and favorite listings</p>
      </div>
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <p>No favorite lands yet.</p>
          <p>Browse lands and add them to your favorites!</p>
        </div>
      ) : (
        <div className="land-grid">
          {favorites.map((land) => (
            <div key={land.id}>
              <LandCard land={land} />
              <button 
                onClick={() => removeFavorite(land.id)}
                className="remove-favorite-button"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites; 